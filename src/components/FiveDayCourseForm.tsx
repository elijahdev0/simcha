import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import PaymentForm from './PaymentForm';
import ZoomScheduler from './ZoomScheduler';
import { MessageCircle } from 'lucide-react';

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
  hasMedicalConditions: string;
  medicalConditions: string;
  takesMedications: string;
  medications: string;
  hasDietaryRestrictions: string;
  dietaryRestrictions: string;

  // Required Documents
  backgroundCheckFile: FileList;
  passportFile: FileList;
  photoIdFile: FileList;
  medicalClearanceFile: FileList;

  // Terms & Conditions
  photographyRelease: boolean;
  codeOfConduct: boolean;
  forceMajeure: boolean;
  personalEquipment: boolean;

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
  const [showPayment, setShowPayment] = useState(false);
  const [showZoomScheduler, setShowZoomScheduler] = useState(false);
  const [formData, setFormData] = useState<FormData | null>(null);
  const [scheduledMeeting, setScheduledMeeting] = useState<{
    startTime: string;
    duration: number;
    topic: string;
    meetingUrl?: string;
  } | null>(null);

  const onSubmit = (data: FormData) => {
    setFormData(data);
    setShowZoomScheduler(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMeetingScheduled = (meetingDetails: {
    startTime: string;
    duration: number;
    topic: string;
    meetingUrl?: string;
  }) => {
    setScheduledMeeting(meetingDetails);
    setShowZoomScheduler(false);
    setShowPayment(true);
  };

  const handlePaymentSuccess = () => {
    // Here you would typically submit both the form data, meeting details, and payment info to your backend
    console.log('Form, meeting, and payment completed:', { formData, scheduledMeeting });
    // Reset the form or redirect to a success page
  };

  const handlePaymentCancel = () => {
    setShowPayment(false);
    setShowZoomScheduler(true);
  };

  if (showPayment && formData) {
    return (
      <div className="min-h-screen bg-tactical-950 pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8 p-6 bg-tactical-800 rounded-lg">
              <h2 className="text-xl font-bold text-white mb-4">Virtual Meeting Scheduled</h2>
              {scheduledMeeting && (
                <div className="text-tactical-100">
                  <p>Topic: {scheduledMeeting.topic}</p>
                  <p>Date: {new Date(scheduledMeeting.startTime).toLocaleDateString()}</p>
                  <p>Time: {new Date(scheduledMeeting.startTime).toLocaleTimeString()}</p>
                  <p>Duration: {scheduledMeeting.duration} minutes</p>
                  {scheduledMeeting.meetingUrl && (
                    <p>Meeting URL: <a href={scheduledMeeting.meetingUrl} className="text-brandRed hover:text-brandRed-hover" target="_blank" rel="noopener noreferrer">{scheduledMeeting.meetingUrl}</a></p>
                  )}
                </div>
              )}
            </div>
            <PaymentForm
              amount={5700}
              courseName="5-Day Tactical Masterclass"
              onSuccess={handlePaymentSuccess}
              onCancel={handlePaymentCancel}
              showDepositOption={true}
            />
          </div>
        </div>
      </div>
    );
  }

  if (showZoomScheduler && formData) {
    return (
      <div className="min-h-screen bg-tactical-950 pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Schedule Your Virtual Meeting</h2>
              <p className="text-tactical-100">Before proceeding with payment, let's schedule a brief virtual meeting to discuss course details and answer any questions you may have.</p>
            </div>
            <div className="bg-tactical-800 p-6 rounded-lg">
              <ZoomScheduler onScheduled={handleMeetingScheduled} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-32 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-heading font-bold text-gray-900 mb-8 text-center">
            Bald Eagle Tactical 5-Day Masterclass Registration Form
          </h1>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Course Details */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Course Details</h2>
              <div className="space-y-2 text-gray-700">
                <p><strong>Location:</strong> S-Arms Shooting Range, Estonia</p>
                <p><strong>Duration:</strong> 5 days (April 27 to May 1)</p>
                <p><strong>Price:</strong> 5700 EUR per participant</p>
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
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth (DD/MM/YYYY)</label>
                  <input
                    type="date"
                    {...register("dateOfBirth", { required: "Date of birth is required" })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandRed"
                  />
                  {errors.dateOfBirth && <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                  <input
                    type="text"
                    {...register("gender", { required: "Gender is required" })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandRed"
                  />
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Do you have any medical conditions or allergies we should be aware of?
                  </label>
                  <div className="flex space-x-4 mb-2">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        {...register("hasMedicalConditions")}
                        value="yes"
                        className="form-radio text-brandRed"
                      />
                      <span className="ml-2">Yes</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        {...register("hasMedicalConditions")}
                        value="no"
                        className="form-radio text-brandRed"
                      />
                      <span className="ml-2">No</span>
                    </label>
                  </div>
                  {watch("hasMedicalConditions") === "yes" && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Please specify:</label>
                      <textarea
                        {...register("medicalConditions")}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandRed"
                        rows={3}
                      />
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Are you currently taking any medications?
                  </label>
                  <div className="flex space-x-4 mb-2">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        {...register("takesMedications")}
                        value="yes"
                        className="form-radio text-brandRed"
                      />
                      <span className="ml-2">Yes</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        {...register("takesMedications")}
                        value="no"
                        className="form-radio text-brandRed"
                      />
                      <span className="ml-2">No</span>
                    </label>
                  </div>
                  {watch("takesMedications") === "yes" && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Please list them:</label>
                      <textarea
                        {...register("medications")}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandRed"
                        rows={3}
                      />
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Do you have any dietary restrictions or food allergies?
                  </label>
                  <div className="flex space-x-4 mb-2">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        {...register("hasDietaryRestrictions")}
                        value="yes"
                        className="form-radio text-brandRed"
                      />
                      <span className="ml-2">Yes</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        {...register("hasDietaryRestrictions")}
                        value="no"
                        className="form-radio text-brandRed"
                      />
                      <span className="ml-2">No</span>
                    </label>
                  </div>
                  {watch("hasDietaryRestrictions") === "yes" && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Please specify:</label>
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
            <div className="bg-gray-50 p-6 rounded-lg border-2 border-brandRed">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Criminal Background Check</h2>
              <div className="space-y-4">
                <p className="text-gray-700 font-medium">
                  Participants must submit a criminal background check from their country of residence.
                </p>
                <div>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      {...register("confirmsBackgroundCheck", { 
                        required: "You must confirm that you will provide a criminal background check" 
                      })}
                      className="rounded border-gray-300 text-brandRed focus:ring-brandRed"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      I confirm that I will provide a criminal background check from my country of residence before attending the seminar
                    </span>
                  </label>
                  {errors.confirmsBackgroundCheck && (
                    <p className="text-red-500 text-sm mt-1">{errors.confirmsBackgroundCheck.message}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Required Documents */}
            <div className="bg-gray-50 p-6 rounded-lg border-2 border-brandRed">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Required Documents</h2>
              <div className="space-y-6">
                <p className="text-gray-700">
                  Please upload copies of the following required documents. All documents must be clear, legible, and in PDF or image format.
                </p>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Criminal Background Check <span className="text-brandRed">*</span>
                    </label>
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      {...register("backgroundCheckFile", { 
                        required: "Criminal background check document is required" 
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandRed"
                    />
                    {errors.backgroundCheckFile && (
                      <p className="text-red-500 text-sm mt-1">{errors.backgroundCheckFile.message}</p>
                    )}
                    <p className="text-sm text-gray-500 mt-1">
                      Upload your criminal background check from your country of residence
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Valid Passport <span className="text-brandRed">*</span>
                    </label>
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      {...register("passportFile", { 
                        required: "Passport copy is required" 
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandRed"
                    />
                    {errors.passportFile && (
                      <p className="text-red-500 text-sm mt-1">{errors.passportFile.message}</p>
                    )}
                    <p className="text-sm text-gray-500 mt-1">
                      Upload a clear copy of your valid passport's photo page
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Government-Issued Photo ID <span className="text-brandRed">*</span>
                    </label>
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      {...register("photoIdFile", { 
                        required: "Photo ID is required" 
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandRed"
                    />
                    {errors.photoIdFile && (
                      <p className="text-red-500 text-sm mt-1">{errors.photoIdFile.message}</p>
                    )}
                    <p className="text-sm text-gray-500 mt-1">
                      Upload a clear copy of your government-issued photo ID (e.g., driver's license)
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Medical Clearance <span className="text-brandRed">*</span>
                    </label>
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      {...register("medicalClearanceFile", { 
                        required: "Medical clearance document is required" 
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandRed"
                    />
                    {errors.medicalClearanceFile && (
                      <p className="text-red-500 text-sm mt-1">{errors.medicalClearanceFile.message}</p>
                    )}
                    <p className="text-sm text-gray-500 mt-1">
                      Upload a medical clearance form or certificate from your healthcare provider
                    </p>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-gray-100 rounded-md">
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Important Notes:</h3>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li>All documents must be current and valid</li>
                    <li>Files must be in PDF, JPG, or PNG format</li>
                    <li>Maximum file size: 5MB per document</li>
                    <li>Documents must be in English or accompanied by certified translations</li>
                    <li>Unclear or illegible documents will not be accepted</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Seminar Inclusions */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Seminar Inclusions</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• Accommodation: Private room for 5 nights at Hestia Hotel Strand</li>
                <li>• Transportation: All seminar-related transportation provided</li>
                <li>• Meals: Daily meals provided during the seminar</li>
                <li>• Insurance: Platinum-level insurance for all seminar activities</li>
                <li>• Tactical Training: 5 full days of intensive tactical training at the S-Arms Shooting Range</li>
                <li>• Seminar T-Shirt: Custom Bald Eagle Tactical seminar t-shirt</li>
              </ul>
            </div>

            {/* Additional Terms & Conditions */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Additional Terms & Conditions</h2>
              <div className="space-y-4">
                <div>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      {...register("photographyRelease", { required: "You must agree to the photography release" })}
                      className="rounded border-gray-300 text-brandRed focus:ring-brandRed"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      Photography & Media Release: I grant Bald Eagle Tactical permission to use my image in promotional materials
                    </span>
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
                    <span className="text-sm font-medium text-gray-700">
                      Code of Conduct: I agree to follow all safety protocols and instructions
                    </span>
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
                    <span className="text-sm font-medium text-gray-700">
                      Force Majeure: I understand that Bald Eagle Tactical is not liable for seminar disruptions beyond its control
                    </span>
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
                    <span className="text-sm font-medium text-gray-700">
                      Personal Equipment: I understand that I am responsible for my personal equipment
                    </span>
                  </label>
                  {errors.personalEquipment && <p className="text-red-500 text-sm mt-1">{errors.personalEquipment.message}</p>}
                </div>
              </div>
            </div>

            {/* Liability Waiver */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Liability Waiver and Release of Claims</h2>
              <div className="space-y-4">
                <div>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      {...register("acknowledgesRisk", { required: "You must acknowledge the risks involved" })}
                      className="rounded border-gray-300 text-brandRed focus:ring-brandRed"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      Acknowledgment of Risk: I acknowledge that participation involves live-fire exercises and physical activities
                    </span>
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
                    <span className="text-sm font-medium text-gray-700">
                      Release of Liability: I release Bald Eagle Tactical from any liability for injuries or incidents during the seminar
                    </span>
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
                    <span className="text-sm font-medium text-gray-700">
                      Insurance: I confirm that platinum-level insurance is included
                    </span>
                  </label>
                  {errors.confirmsInsurance && <p className="text-red-500 text-sm mt-1">{errors.confirmsInsurance.message}</p>}
                </div>
              </div>
            </div>

            {/* Signature */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Signature</h2>
              <p className="text-gray-700 mb-4">
                By signing below, I confirm that I have read, understood, and agreed to the terms outlined above.
              </p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Participant Signature</label>
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
            <p className="mt-2">
              <strong>Email:</strong>{' '}
              <a href="mailto:Menahem@baldeagletactical.com" className="text-brandRed hover:text-brandRed-hover">
                Menahem@baldeagletactical.com
              </a>
            </p>
            <p>
              <strong>WhatsApp:</strong>{' '}
              <a href="https://wa.me/447982369701" className="text-brandRed hover:text-brandRed-hover">
                <MessageCircle className="inline-block mr-1" size={16} />
                📞 Chat with Us on WhatsApp
              </a>
            </p>
            <p>
              <strong>Phone:</strong>{' '}
              <a href="tel:+447982369701" className="text-brandRed hover:text-brandRed-hover">
                +44 7982 369701
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiveDayCourseForm; 