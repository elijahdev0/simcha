import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { createPaymentIntent } from '../api/payment';
import { useAuth } from '../hooks/useAuth';

// Initialize Stripe with the publishable key
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

interface PaymentFormProps {
  amount: number;
  courseName: string;
  courseId: string;
  onSuccess: () => void;
  onCancel: () => void;
  showDepositOption?: boolean;
}

const CheckoutForm = ({ amount, courseName, courseId, onSuccess, onCancel, showDepositOption = false }: PaymentFormProps) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user, updatePaymentPreferences } = useAuth();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [isDeposit, setIsDeposit] = useState(false);
  const depositAmount = 1000;

  const finalAmount = isDeposit ? depositAmount : amount;

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    createPaymentIntent(finalAmount)
      .then(data => setClientSecret(data.clientSecret))
      .catch(error => setPaymentError('Failed to initialize payment. Please try again.'));
  }, [finalAmount]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements || !clientSecret) {
      return;
    }

    setIsProcessing(true);
    setPaymentError(null);

    const { error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)!,
      },
    });

    if (confirmError) {
      setPaymentError(confirmError.message || 'An error occurred during payment');
      setIsProcessing(false);
      return;
    }

    // If this was a deposit payment, update the user's payment preferences
    if (isDeposit && user) {
      updatePaymentPreferences({
        prefersSplitPayment: true,
        hasOutstandingBalance: true,
        outstandingBalanceAmount: amount - depositAmount,
        courseId
      });
    }

    // Payment successful
    onSuccess();
    setIsProcessing(false);
  };

  // Show deposit option only for logged-in users
  const canShowDepositOption = showDepositOption && user?.isLoggedIn;

  // If user has an outstanding balance for this course, show that instead
  const hasOutstandingBalance = user?.paymentPreferences?.hasOutstandingBalance && 
                               user?.paymentPreferences?.courseId === courseId;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Payment Details</h3>
          <p className="text-gray-600">
            Secure payment for {courseName}
          </p>

          {hasOutstandingBalance ? (
            <div className="mt-4 bg-tactical-50 p-4 rounded-md">
              <h4 className="font-semibold text-gray-900">Outstanding Balance Payment</h4>
              <p className="text-gray-600">
                Remaining balance: €{user?.paymentPreferences?.outstandingBalanceAmount}
              </p>
            </div>
          ) : canShowDepositOption && (
            <div className="mt-4 space-y-4">
              <div className="flex items-center space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-brandRed"
                    checked={!isDeposit}
                    onChange={() => setIsDeposit(false)}
                  />
                  <span className="ml-2">Full Payment - €{amount}</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-brandRed"
                    checked={isDeposit}
                    onChange={() => setIsDeposit(true)}
                  />
                  <span className="ml-2">Deposit Only - €{depositAmount}</span>
                </label>
              </div>
              {isDeposit && (
                <div className="bg-tactical-50 p-4 rounded-md">
                  <p className="text-sm text-gray-600">
                    By choosing the deposit option:
                  </p>
                  <ul className="list-disc ml-5 mt-2 text-sm text-gray-600">
                    <li>Initial deposit: €{depositAmount}</li>
                    <li>Remaining balance: €{amount - depositAmount}</li>
                    <li>Balance payment due 15 days before course start</li>
                  </ul>
                </div>
              )}
            </div>
          )}

          <p className="mt-4 text-lg font-semibold text-gray-900">
            Total to pay: €{finalAmount}
          </p>
        </div>

        <div className="space-y-4">
          <div className="border border-gray-300 rounded-md p-4">
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                      color: '#aab7c4',
                    },
                  },
                  invalid: {
                    color: '#9e2146',
                  },
                },
              }}
            />
          </div>

          {paymentError && (
            <div className="text-red-500 text-sm bg-red-50 p-3 rounded">
              {paymentError}
            </div>
          )}

          <div className="flex items-center justify-between pt-4">
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              disabled={isProcessing}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!stripe || isProcessing}
              className={`px-6 py-2 bg-brandRed text-white rounded-md transition-all ${
                isProcessing
                  ? 'opacity-75 cursor-not-allowed'
                  : 'hover:bg-brandRed-hover'
              }`}
            >
              {isProcessing ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                `Pay €${finalAmount}`
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="text-center">
        <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
            <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
          </svg>
          <span>Secure Payment</span>
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
          </svg>
          <span>SSL Encrypted</span>
        </div>
      </div>
    </form>
  );
};

const PaymentForm = (props: PaymentFormProps) => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm {...props} />
    </Elements>
  );
};

export default PaymentForm; 