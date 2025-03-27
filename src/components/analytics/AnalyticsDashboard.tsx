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
import axios from 'axios';

// This should be a secure, hard-to-guess string
const VALID_SECRET = 'dRx78Kp2wQ9zL';
const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

// Google Analytics Measurement ID
const GA_MEASUREMENT_ID = 'G-6RPTWJ4CQ8';

// Define types for our analytics data
interface VisitorData {
  date: string;
  visitors: number;
}

interface DeviceData {
  name: string;
  value: number;
}

interface PageViewData {
  page: string;
  views: number;
}

interface StatsData {
  totalVisitors: number;
  averageDailyVisitors: number;
  bounceRate: string;
  topReferrer: string;
}

interface AnalyticsApiResponse {
  visitorData: VisitorData[];
  deviceData: DeviceData[];
  pageViewData: PageViewData[];
  stats: StatsData;
}

interface SimulatedData {
  visitorData: VisitorData[];
  deviceData: DeviceData[];
  pageViewData: PageViewData[];
  bounceRate: string;
  topReferrer: string;
  lastUpdated: string;
}

const AnalyticsDashboard = () => {
  // Simple secret-based access
  const [searchParams] = useSearchParams();
  const secretKey = searchParams.get('key');
  
  // State for analytics data
  const [visitorData, setVisitorData] = useState<VisitorData[]>([]);
  const [deviceData, setDeviceData] = useState<DeviceData[]>([]);
  const [pageViewData, setPageViewData] = useState<PageViewData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState('');
  
  // Stats summary
  const [stats, setStats] = useState<StatsData>({
    totalVisitors: 0,
    averageDailyVisitors: 0,
    bounceRate: '0%',
    topReferrer: 'Direct'
  });

  // Fetch real-time analytics data
  useEffect(() => {
    const fetchAnalyticsData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // Make API request to our backend endpoint
        // This endpoint will communicate with the Google Analytics API
        const response = await axios.get<AnalyticsApiResponse>(`/api/analytics/all-data?key=${secretKey}`);
        const data = response.data;
        
        if (data) {
          setVisitorData(data.visitorData || []);
          setDeviceData(data.deviceData || []);
          setPageViewData(data.pageViewData || []);
          setStats(data.stats || {
            totalVisitors: 0,
            averageDailyVisitors: 0,
            bounceRate: '0%',
            topReferrer: 'Direct'
          });
          
          // Set last updated timestamp
          const now = new Date();
          setLastUpdated(now.toLocaleString());
        }
        
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching analytics data:', err);
        setError('Failed to load analytics data. Using simulation instead.');
        setIsLoading(false);
        
        // Fallback to simulation if the API fails
        const simulatedData = simulateGoogleAnalyticsData();
        setVisitorData(simulatedData.visitorData);
        setDeviceData(simulatedData.deviceData);
        setPageViewData(simulatedData.pageViewData);
        setStats({
          totalVisitors: simulatedData.visitorData.reduce((sum, item) => sum + item.visitors, 0),
          averageDailyVisitors: Math.round(simulatedData.visitorData.reduce((sum, item) => sum + item.visitors, 0) / simulatedData.visitorData.length),
          bounceRate: simulatedData.bounceRate,
          topReferrer: simulatedData.topReferrer
        });
        setLastUpdated(simulatedData.lastUpdated);
      }
    };
    
    // Fetch data initially
    fetchAnalyticsData();
    
    // Set up a timer to refresh data every minute for "real-time" updates
    const intervalId = setInterval(fetchAnalyticsData, 60000);
    
    // Clean up the interval when component unmounts
    return () => clearInterval(intervalId);
  }, [secretKey]);
  
  // Simulate data as a fallback if the API fails
  const simulateGoogleAnalyticsData = (): SimulatedData => {
    // Simulate some fluctuation in the data to mimic real-time changes
    const now = new Date();
    const today = now.toLocaleDateString('en-US', { weekday: 'short' });
    const timeString = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    
    // Create visitor data for the past 7 days, with today having real-time updates
    const visitorData: VisitorData[] = [
      { date: 'Mon', visitors: Math.floor(Math.random() * 50) + 100 },
      { date: 'Tue', visitors: Math.floor(Math.random() * 50) + 120 },
      { date: 'Wed', visitors: Math.floor(Math.random() * 50) + 150 },
      { date: 'Thu', visitors: Math.floor(Math.random() * 50) + 180 },
      { date: 'Fri', visitors: Math.floor(Math.random() * 50) + 160 },
      { date: 'Sat', visitors: Math.floor(Math.random() * 50) + 200 },
      { date: 'Sun', visitors: Math.floor(Math.random() * 50) + 170 }
    ];
    
    // Update today's data to reflect "real-time"
    const todayIndex = visitorData.findIndex(item => item.date === today);
    if (todayIndex !== -1) {
      // Add some "real-time" randomness
      visitorData[todayIndex].visitors += Math.floor(Math.random() * 10);
    }
    
    // Device data with slight randomness
    const deviceData: DeviceData[] = [
      { name: 'Desktop', value: Math.floor(Math.random() * 10) + 50 },
      { name: 'Mobile', value: Math.floor(Math.random() * 10) + 30 },
      { name: 'Tablet', value: Math.floor(Math.random() * 5) + 8 }
    ];
    
    // Page view data with randomness
    const pageViewData: PageViewData[] = [
      { page: '/home', views: Math.floor(Math.random() * 50) + 300 },
      { page: '/courses', views: Math.floor(Math.random() * 40) + 230 },
      { page: '/about', views: Math.floor(Math.random() * 30) + 160 },
      { page: '/booking', views: Math.floor(Math.random() * 30) + 190 },
      { page: '/contact', views: Math.floor(Math.random() * 20) + 140 }
    ];
    
    // Calculate simulated bounce rate
    const bounceRate = `${Math.floor(Math.random() * 10) + 40}%`;
    
    // Randomly pick a top referrer
    const referrers = ['Google', 'Direct', 'Instagram', 'Facebook', 'Twitter'];
    const topReferrer = referrers[Math.floor(Math.random() * referrers.length)];
    
    return {
      visitorData,
      deviceData,
      pageViewData,
      bounceRate,
      topReferrer,
      lastUpdated: `${today} ${timeString}`
    };
  };
  
  // If the secret key doesn't match, redirect to home
  if (secretKey !== VALID_SECRET) {
    return <Navigate to="/" />;
  }

  return (
    <div className="p-8 max-w-7xl mx-auto bg-tactical-900 text-white">
      <h1 className="text-3xl font-bold mb-8">Bald Eagle Tactical - Analytics Dashboard</h1>
      
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-tactical-300"></div>
        </div>
      ) : (
        <>
          {error && (
            <div className="mb-4 p-3 bg-red-900/50 text-red-200 rounded-md">
              {error}
            </div>
          )}
          
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
                <LineChart data={visitorData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
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
                      data={deviceData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {deviceData.map((entry, index) => (
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
                  <BarChart data={pageViewData} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
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
            <p>This dashboard is connected to your Google Analytics account.</p>
            <p className="mt-2">Data updates automatically every minute to provide near real-time insights.</p>
            <p className="mt-1 text-tactical-500">Google Analytics Measurement ID: {GA_MEASUREMENT_ID}</p>
            {lastUpdated && (
              <p className="mt-1 text-tactical-500">Last updated: {lastUpdated}</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default AnalyticsDashboard; 