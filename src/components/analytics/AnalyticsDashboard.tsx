import React, { useState, useEffect } from 'react';
import { useSearchParams, Navigate } from 'react-router-dom';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from 'recharts';

// Dummy data - in a real application, you would fetch this from your analytics API
const dummyVisitorData = [
  { date: 'Mon', visitors: 120 },
  { date: 'Tue', visitors: 150 },
  { date: 'Wed', visitors: 180 },
  { date: 'Thu', visitors: 200 },
  { date: 'Fri', visitors: 170 },
  { date: 'Sat', visitors: 220 },
  { date: 'Sun', visitors: 190 }
];

const dummyDeviceData = [
  { name: 'Desktop', value: 55 },
  { name: 'Mobile', value: 35 },
  { name: 'Tablet', value: 10 }
];

const dummyPageViews = [
  { page: '/home', views: 320 },
  { page: '/courses', views: 250 },
  { page: '/about', views: 180 },
  { page: '/booking', views: 210 },
  { page: '/contact', views: 150 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const AnalyticsDashboard = () => {
  // Simple secret-based access
  const [searchParams] = useSearchParams();
  const secretKey = searchParams.get('key');
  
  // This should be a secure, hard-to-guess string
  const VALID_SECRET = 'dRx78Kp2wQ9zL';
  
  // Stats summary
  const [stats, setStats] = useState({
    totalVisitors: 0,
    averageDailyVisitors: 0,
    bounceRate: '45%',
    topReferrer: 'Google'
  });
  
  useEffect(() => {
    // Calculate summary statistics
    const totalVisitors = dummyVisitorData.reduce((sum, item) => sum + item.visitors, 0);
    const avgDaily = Math.round(totalVisitors / dummyVisitorData.length);
    
    setStats({
      totalVisitors,
      averageDailyVisitors: avgDaily,
      bounceRate: '45%',
      topReferrer: 'Google'
    });
  }, []);
  
  // If the secret key doesn't match, redirect to home
  if (secretKey !== VALID_SECRET) {
    return <Navigate to="/" />;
  }

  return (
    <div className="p-8 max-w-7xl mx-auto bg-tactical-900 text-white">
      <h1 className="text-3xl font-bold mb-8">Bald Eagle Tactical - Analytics Dashboard</h1>
      
      {/* Summary Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-tactical-800 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-tactical-300">Total Visitors</h3>
          <p className="text-2xl font-bold">{stats.totalVisitors}</p>
        </div>
        <div className="bg-tactical-800 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-tactical-300">Avg. Daily Visitors</h3>
          <p className="text-2xl font-bold">{stats.averageDailyVisitors}</p>
        </div>
        <div className="bg-tactical-800 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-tactical-300">Bounce Rate</h3>
          <p className="text-2xl font-bold">{stats.bounceRate}</p>
        </div>
        <div className="bg-tactical-800 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-tactical-300">Top Referrer</h3>
          <p className="text-2xl font-bold">{stats.topReferrer}</p>
        </div>
      </div>
      
      {/* Visitors Over Time Chart */}
      <div className="mb-8 bg-tactical-800 p-4 rounded-lg">
        <h2 className="text-xl font-medium mb-4">Visitors Over Time</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={dummyVisitorData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="visitors" stroke="#82ca9d" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Device Breakdown */}
        <div className="bg-tactical-800 p-4 rounded-lg">
          <h2 className="text-xl font-medium mb-4">Device Breakdown</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={dummyDeviceData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {dummyDeviceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        {/* Popular Pages */}
        <div className="bg-tactical-800 p-4 rounded-lg">
          <h2 className="text-xl font-medium mb-4">Popular Pages</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dummyPageViews} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis type="number" />
                <YAxis dataKey="page" type="category" width={80} />
                <Tooltip />
                <Bar dataKey="views" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      <div className="text-sm text-tactical-400 text-center mt-8">
        <p>This dashboard displays simulated data for demonstration purposes.</p>
        <p className="mt-2">In a production environment, this would be connected to your Google Analytics or other analytics service.</p>
      </div>
    </div>
  );
};

export default AnalyticsDashboard; 