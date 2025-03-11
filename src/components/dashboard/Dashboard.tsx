import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface UserProgress {
  courseName: string;
  status: 'Registered' | 'In Progress' | 'Completed';
  startDate: string;
  completionDate?: string;
  paymentStatus: 'Full Payment' | 'Deposit Paid' | 'Balance Due';
  remainingBalance?: number;
}

interface UserInfo {
  fullName: string;
  email: string;
  phoneNumber: string;
  address: string;
  emergencyContact: {
    name: string;
    relationship: string;
    phone: string;
  };
  medicalInfo: {
    conditions: string[];
    medications: string[];
    allergies: string[];
  };
}

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'progress' | 'profile'>('progress');
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [progress, setProgress] = useState<UserProgress[]>([]);

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }

    // TODO: Fetch actual user data from backend
    // For now, using mock data
    setUserInfo({
      fullName: 'John Doe',
      email: localStorage.getItem('userEmail') || '',
      phoneNumber: '+1234567890',
      address: '123 Main St, City, Country',
      emergencyContact: {
        name: 'Jane Doe',
        relationship: 'Spouse',
        phone: '+0987654321',
      },
      medicalInfo: {
        conditions: ['None'],
        medications: ['None'],
        allergies: ['None'],
      },
    });

    setProgress([
      {
        courseName: '2-Day Tactical Training',
        status: 'Registered',
        startDate: '2024-04-21',
        paymentStatus: 'Deposit Paid',
        remainingBalance: 1900,
      },
    ]);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    navigate('/login');
  };

  if (!userInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-tactical-950 pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-900">Welcome, {userInfo.fullName}</h1>
              <button
                onClick={handleLogout}
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Logout
              </button>
            </div>
          </div>

          <div className="border-b border-gray-200">
            <nav className="flex">
              <button
                onClick={() => setActiveTab('progress')}
                className={`px-6 py-3 text-sm font-medium ${
                  activeTab === 'progress'
                    ? 'border-b-2 border-brandRed text-brandRed'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Course Progress
              </button>
              <button
                onClick={() => setActiveTab('profile')}
                className={`px-6 py-3 text-sm font-medium ${
                  activeTab === 'profile'
                    ? 'border-b-2 border-brandRed text-brandRed'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Profile Information
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'progress' ? (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900">Your Courses</h2>
                {progress.map((course, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-gray-900">{course.courseName}</h3>
                        <p className="text-sm text-gray-500">Start Date: {course.startDate}</p>
                        <p className="text-sm text-gray-500">Status: {course.status}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900">
                          Payment Status: {course.paymentStatus}
                        </p>
                        {course.remainingBalance && (
                          <p className="text-sm text-gray-500">
                            Remaining Balance: €{course.remainingBalance}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium">{userInfo.email}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="font-medium">{userInfo.phoneNumber}</p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-sm text-gray-500">Address</p>
                      <p className="font-medium">{userInfo.address}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Emergency Contact</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Name</p>
                      <p className="font-medium">{userInfo.emergencyContact.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Relationship</p>
                      <p className="font-medium">{userInfo.emergencyContact.relationship}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="font-medium">{userInfo.emergencyContact.phone}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Medical Information</h2>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500">Medical Conditions</p>
                      <p className="font-medium">{userInfo.medicalInfo.conditions.join(', ')}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Medications</p>
                      <p className="font-medium">{userInfo.medicalInfo.medications.join(', ')}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Allergies</p>
                      <p className="font-medium">{userInfo.medicalInfo.allergies.join(', ')}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 