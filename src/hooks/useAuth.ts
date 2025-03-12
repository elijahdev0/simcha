import { useState, useEffect } from 'react';

interface UserData {
  email: string;
  isLoggedIn: boolean;
  paymentPreferences?: {
    prefersSplitPayment: boolean;
    hasOutstandingBalance: boolean;
    outstandingBalanceAmount?: number;
    courseId?: string;
  };
}

export const useAuth = () => {
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    // Check localStorage for existing session
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const userEmail = localStorage.getItem('userEmail');
    
    if (isLoggedIn && userEmail) {
      // In a real app, you would validate the session with your backend
      setUser({
        email: userEmail,
        isLoggedIn: true,
        paymentPreferences: {
          prefersSplitPayment: false,
          hasOutstandingBalance: false
        }
      });
    }
  }, []);

  const login = (email: string) => {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userEmail', email);
    setUser({
      email,
      isLoggedIn: true,
      paymentPreferences: {
        prefersSplitPayment: false,
        hasOutstandingBalance: false
      }
    });
  };

  const logout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    setUser(null);
  };

  const updatePaymentPreferences = (preferences: UserData['paymentPreferences']) => {
    if (user) {
      setUser({
        ...user,
        paymentPreferences: {
          ...user.paymentPreferences,
          ...preferences
        }
      });
    }
  };

  return {
    user,
    login,
    logout,
    updatePaymentPreferences,
    isAuthenticated: !!user
  };
}; 