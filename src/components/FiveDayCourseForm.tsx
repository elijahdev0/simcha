import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

interface FormData {
  // Participant Information
  fullName: string;
  dateOfBirth: string;
  gender: string;
  nationality: string;
  address: string;
  cityState: string;
  country: string;
  phoneNumber: string;
  emailAddress: string;

  // Emergency Contact
  emergencyName: string;
  emergencyRelationship: string;
  emergencyPhone: string;

  // Medical Information
  hasMedicalConditions: boolean;
  medicalConditions: string;
  takesMedications: boolean;
  medications: string;
  hasDietaryRestrictions: boolean;
  dietaryRestrictions: string;

  // Criminal Background Check
  hasBackgroundCheck: boolean;

  // Terms & Conditions
  photographyRelease: boolean;
  codeOfConduct: boolean;
  forceMajeure: boolean;
  personalEquipment: boolean;
  refundPolicy: boolean;

  // Liability Waiver
  acknowledgesRisk: boolean;
  releasesLiability: boolean;
  confirmsInsurance: boolean;
  confirmsBackgroundCheck: boolean;

  // Signature
  signature: string;
  signatureDate: string;
}

const FiveDayCourseForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();
  const [showMedicalDetails, setShowMedicalDetails] = useState(false);
  const [showMedicationDetails, setShowMedicationDetails] = useState(false);
  const [showDietaryDetails, setShowDietaryDetails] = useState(false);

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-heading font-bold text-gray-900 mb-8 text-center">
            Bald Eagle Tactical 5-Day Seminar Registration Form
          </h1>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Course Details */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Course Details</h2>
              <div className="space-y-2 text-gray-700">
                <p><strong>Location:</strong> S-Arms Shooting Range, Estonia</p>
                <p><strong>Accommodation:</strong> Hestia Hotel Strand (private room)</p>
                <p><strong>Duration:</strong> 5 days (23rd March to 27th March)</p>
                <p><strong>Seminar Price:</strong> 5700 EUR per participant</p>
              </div>
            </div>

            {/* Participant Information */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Participant Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    {...register("fullName", { required: "Full name is required" })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandRed"
                  />
                  {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                  <input
                    type="date"
                    {...register("dateOfBirth", { required: "Date of birth is required" })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandRed"
                  />
                  {errors.dateOfBirth && <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                  <select
                    {...register("gender", { required: "Gender is required" })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandRed"
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nationality</label>
                  <input
                    type="text"
                    {...register("nationality", { required: "Nationality is required" })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandRed"
                  />
                  {errors.nationality && <p className="text-red-500 text-sm mt-1">{errors.nationality.message}</p>}
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                  <input
                    type="text"
                    {...register("address", { required: "Address is required" })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandRed"
                  />
                  {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City/State</label>
                  <input
                    type="text"
                    {...register("cityState", { required: "City/State is required" })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandRed"
                  />
                  {errors.cityState && <p className="text-red-500 text-sm mt-1">{errors.cityState.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                  <input
                    type="text"
                    {...register("country", { required: "Country is required" })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandRed"
                  />
                  {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    {...register("phoneNumber", { required: "Phone number is required" })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandRed"
                  />
                  {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    {...register("emailAddress", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandRed"
                  />
                  {errors.emailAddress && <p className="text-red-500 text-sm mt-1">{errors.emailAddress.message}</p>}
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Emergency Contact Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    {...register("emergencyName", { required: "Emergency contact name is required" })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandRed"
                  />
                  {errors.emergencyName && <p className="text-red-500 text-sm mt-1">{errors.emergencyName.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Relationship</label>
                  <input
                    type="text"
                    {...register("emergencyRelationship", { required: "Relationship is required" })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandRed"
                  />
                  {errors.emergencyRelationship && <p className="text-red-500 text-sm mt-1">{errors.emergencyRelationship.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    {...register("emergencyPhone", { required: "Emergency contact phone is required" })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandRed"
                  />
                  {errors.emergencyPhone && <p className="text-red-500 text-sm mt-1">{errors.emergencyPhone.message}</p>}
                </div>
              </div>
            </div>

            {/* Medical Information */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Medical Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      {...register("hasMedicalConditions")}
                      onChange={(e) => setShowMedicalDetails(e.target.checked)}
                      className="rounded border-gray-300 text-brandRed focus:ring-brandRed"
                    />
                    <span className="text-sm font-medium text-gray-700">Do you have any medical conditions or allergies we should be aware of?</span>
                  </label>
                  {showMedicalDetails && (
                    <div className="mt-2">
                      <textarea
                        {...register("medicalConditions")}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandRed"
                        rows={3}
                      />
                    </div>
                  )}
                </div>

                <div>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      {...register("takesMedications")}
                      onChange={(e) => setShowMedicationDetails(e.target.checked)}
                      className="rounded border-gray-300 text-brandRed focus:ring-brandRed"
                    />
                    <span className="text-sm font-medium text-gray-700">Are you currently taking any medications?</span>
                  </label>
                  {showMedicationDetails && (
                    <div className="mt-2">
                      <textarea
                        {...register("medications")}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandRed"
                        rows={3}
                      />
                    </div>
                  )}
                </div>

                <div>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      {...register("hasDietaryRestrictions")}
                      onChange={(e) => setShowDietaryDetails(e.target.checked)}
                      className="rounded border-gray-300 text-brandRed focus:ring-brandRed"
                    />
                    <span className="text-sm font-medium text-gray-700">Do you have any dietary restrictions or food allergies?</span>
                  </label>
                  {showDietaryDetails && (
                    <div className="mt-2">
                      <textarea
                        {...register("dietaryRestrictions")}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandRed"
                        rows={3}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Criminal Background Check */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Criminal Background Check</h2>
              <div>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    {...register("hasBackgroundCheck", { required: "You must confirm the background check requirement" })}
                    className="rounded border-gray-300 text-brandRed focus:ring-brandRed"
                  />
                  <span className="text-sm font-medium text-gray-700">I confirm that I will provide a criminal background check from my country of residence</span>
                </label>
                {errors.hasBackgroundCheck && <p className="text-red-500 text-sm mt-1">{errors.hasBackgroundCheck.message}</p>}
              </div>
            </div>

            {/* Terms & Conditions */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Terms & Conditions</h2>
              <div className="space-y-4">
                <div>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      {...register("photographyRelease", { required: "You must agree to the photography release" })}
                      className="rounded border-gray-300 text-brandRed focus:ring-brandRed"
                    />
                    <span className="text-sm font-medium text-gray-700">I grant Bald Eagle Tactical permission to use my image in promotional materials</span>
                  </label>
                  {errors.photographyRelease && <p className="text-red-500 text-sm mt-1">{errors.photographyRelease.message}</p>}
                </div>

                <div>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      {...register("codeOfConduct", { required: "You must agree to the code of conduct" })}
                      className="rounded border-gray-300 text-brandRed focus:ring-brandRed"
                    />
                    <span className="text-sm font-medium text-gray-700">I agree to follow all safety protocols and instructions</span>
                  </label>
                  {errors.codeOfConduct && <p className="text-red-500 text-sm mt-1">{errors.codeOfConduct.message}</p>}
                </div>

                <div>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      {...register("forceMajeure", { required: "You must agree to the force majeure clause" })}
                      className="rounded border-gray-300 text-brandRed focus:ring-brandRed"
                    />
                    <span className="text-sm font-medium text-gray-700">I understand that Bald Eagle Tactical is not liable for seminar disruptions beyond its control</span>
                  </label>
                  {errors.forceMajeure && <p className="text-red-500 text-sm mt-1">{errors.forceMajeure.message}</p>}
                </div>

                <div>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      {...register("personalEquipment", { required: "You must agree to the personal equipment responsibility" })}
                      className="rounded border-gray-300 text-brandRed focus:ring-brandRed"
                    />
                    <span className="text-sm font-medium text-gray-700">I understand that I am responsible for my personal equipment</span>
                  </label>
                  {errors.personalEquipment && <p className="text-red-500 text-sm mt-1">{errors.personalEquipment.message}</p>}
                </div>

                <div>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      {...register("refundPolicy", { required: "You must agree to the refund policy" })}
                      className="rounded border-gray-300 text-brandRed focus:ring-brandRed"
                    />
                    <span className="text-sm font-medium text-gray-700">I understand that all deposits are non-refundable and cancellations within 30 days are not eligible for refunds</span>
                  </label>
                  {errors.refundPolicy && <p className="text-red-500 text-sm mt-1">{errors.refundPolicy.message}</p>}
                </div>
              </div>
            </div>

            {/* Liability Waiver */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Liability Waiver</h2>
              <div className="space-y-4">
                <div>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      {...register("acknowledgesRisk", { required: "You must acknowledge the risks involved" })}
                      className="rounded border-gray-300 text-brandRed focus:ring-brandRed"
                    />
                    <span className="text-sm font-medium text-gray-700">I acknowledge that participation involves live-fire exercises and physical activities</span>
                  </label>
                  {errors.acknowledgesRisk && <p className="text-red-500 text-sm mt-1">{errors.acknowledgesRisk.message}</p>}
                </div>

                <div>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      {...register("releasesLiability", { required: "You must release liability" })}
                      className="rounded border-gray-300 text-brandRed focus:ring-brandRed"
                    />
                    <span className="text-sm font-medium text-gray-700">I release Bald Eagle Tactical from any liability for injuries or incidents during the seminar</span>
                  </label>
                  {errors.releasesLiability && <p className="text-red-500 text-sm mt-1">{errors.releasesLiability.message}</p>}
                </div>

                <div>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      {...register("confirmsInsurance", { required: "You must confirm insurance coverage" })}
                      className="rounded border-gray-300 text-brandRed focus:ring-brandRed"
                    />
                    <span className="text-sm font-medium text-gray-700">I confirm that platinum-level insurance is included</span>
                  </label>
                  {errors.confirmsInsurance && <p className="text-red-500 text-sm mt-1">{errors.confirmsInsurance.message}</p>}
                </div>

                <div>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      {...register("confirmsBackgroundCheck", { required: "You must confirm the background check requirement" })}
                      className="rounded border-gray-300 text-brandRed focus:ring-brandRed"
                    />
                    <span className="text-sm font-medium text-gray-700">I confirm I will provide a valid background check before attending</span>
                  </label>
                  {errors.confirmsBackgroundCheck && <p className="text-red-500 text-sm mt-1">{errors.confirmsBackgroundCheck.message}</p>}
                </div>
              </div>
            </div>

            {/* Signature */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Signature</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Electronic Signature</label>
                  <input
                    type="text"
                    {...register("signature", { required: "Signature is required" })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandRed"
                    placeholder="Type your full name to sign"
                  />
                  {errors.signature && <p className="text-red-500 text-sm mt-1">{errors.signature.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                  <input
                    type="date"
                    {...register("signatureDate", { required: "Date is required" })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandRed"
                  />
                  {errors.signatureDate && <p className="text-red-500 text-sm mt-1">{errors.signatureDate.message}</p>}
                </div>
              </div>
            </div>

            {/* Payment Details */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Payment Details</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-tactical-200">Non-refundable Deposit:</span>
                  <span className="font-medium">1000 EUR</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-tactical-200">Balance Due:</span>
                  <span className="font-medium">4700 EUR</span>
                </div>
                <div className="flex justify-between items-center text-lg font-semibold">
                  <span>Total:</span>
                  <span>5700 EUR</span>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-brandRed hover:bg-brandRed-hover text-white px-8 py-3 rounded-md font-medium transition-colors duration-200"
              >
                Submit Registration
              </button>
            </div>
          </form>

          {/* Contact Information */}
          <div className="mt-12 text-center text-gray-700">
            <p>For any questions regarding the seminar or registration process, please contact:</p>
            <p className="mt-2"><strong>Email:</strong> Menahem@baldeagletactical.com</p>
            <p><strong>Phone:</strong> +44 7982 369701</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiveDayCourseForm; 