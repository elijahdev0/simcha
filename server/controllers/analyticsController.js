const { google } = require('googleapis');
const { JWT } = require('google-auth-library');

// Create a Google Analytics controller to fetch real-time data
// This will be your server-side component to safely interact with the GA API

// Replace these with your actual Google Cloud credentials
const GA_PROPERTY_ID = 'properties/YOUR_GA4_PROPERTY_ID'; // Example: properties/123456789
const PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
const CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL;

// Initialize a JWT client for authentication
const initializeJwtClient = () => {
  if (!PRIVATE_KEY || !CLIENT_EMAIL) {
    throw new Error('Missing Google credentials. Check your environment variables.');
  }
  
  return new JWT({
    email: CLIENT_EMAIL,
    key: PRIVATE_KEY,
    scopes: ['https://www.googleapis.com/auth/analytics.readonly']
  });
};

// Fetch visitor data for the past 7 days
const getVisitorData = async (req, res) => {
  try {
    const client = initializeJwtClient();
    const analyticsData = google.analyticsdata({
      version: 'v1beta',
      auth: client
    });
    
    // Get date 7 days ago
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    
    // Format dates for the GA API
    const startDate = sevenDaysAgo.toISOString().split('T')[0];
    const endDate = new Date().toISOString().split('T')[0];
    
    // Run the report
    const response = await analyticsData.properties.runReport({
      property: GA_PROPERTY_ID,
      requestBody: {
        dateRanges: [{ startDate, endDate }],
        dimensions: [{ name: 'date' }],
        metrics: [{ name: 'activeUsers' }]
      }
    });
    
    // Process the data
    const visitorData = [];
    
    if (response.data && response.data.rows) {
      response.data.rows.forEach(row => {
        // Convert YYYYMMDD to a more readable format
        const date = row.dimensionValues[0].value;
        const year = date.substring(0, 4);
        const month = date.substring(4, 6);
        const day = date.substring(6, 8);
        const formattedDate = new Date(`${year}-${month}-${day}`);
        
        visitorData.push({
          date: formattedDate.toLocaleDateString('en-US', { weekday: 'short' }),
          visitors: parseInt(row.metricValues[0].value, 10)
        });
      });
    }
    
    return res.status(200).json({ visitorData });
  } catch (error) {
    console.error('Error fetching visitor data:', error);
    return res.status(500).json({ error: 'Failed to fetch analytics data' });
  }
};

// Get device breakdown
const getDeviceData = async (req, res) => {
  try {
    const client = initializeJwtClient();
    const analyticsData = google.analyticsdata({
      version: 'v1beta',
      auth: client
    });
    
    // Run the report
    const response = await analyticsData.properties.runReport({
      property: GA_PROPERTY_ID,
      requestBody: {
        dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
        dimensions: [{ name: 'deviceCategory' }],
        metrics: [{ name: 'activeUsers' }]
      }
    });
    
    // Process the data
    const deviceData = [];
    
    if (response.data && response.data.rows) {
      response.data.rows.forEach(row => {
        deviceData.push({
          name: row.dimensionValues[0].value,
          value: parseInt(row.metricValues[0].value, 10)
        });
      });
    }
    
    return res.status(200).json({ deviceData });
  } catch (error) {
    console.error('Error fetching device data:', error);
    return res.status(500).json({ error: 'Failed to fetch device data' });
  }
};

// Get popular pages
const getPageViewData = async (req, res) => {
  try {
    const client = initializeJwtClient();
    const analyticsData = google.analyticsdata({
      version: 'v1beta',
      auth: client
    });
    
    // Run the report
    const response = await analyticsData.properties.runReport({
      property: GA_PROPERTY_ID,
      requestBody: {
        dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
        dimensions: [{ name: 'pagePath' }],
        metrics: [{ name: 'screenPageViews' }],
        limit: 10,
        orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }]
      }
    });
    
    // Process the data
    const pageViewData = [];
    
    if (response.data && response.data.rows) {
      response.data.rows.forEach(row => {
        pageViewData.push({
          page: row.dimensionValues[0].value,
          views: parseInt(row.metricValues[0].value, 10)
        });
      });
    }
    
    return res.status(200).json({ pageViewData });
  } catch (error) {
    console.error('Error fetching page view data:', error);
    return res.status(500).json({ error: 'Failed to fetch page view data' });
  }
};

// Get overall stats
const getOverallStats = async (req, res) => {
  try {
    const client = initializeJwtClient();
    const analyticsData = google.analyticsdata({
      version: 'v1beta',
      auth: client
    });
    
    // Run the report for total visitors
    const visitorsResponse = await analyticsData.properties.runReport({
      property: GA_PROPERTY_ID,
      requestBody: {
        dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
        metrics: [{ name: 'activeUsers' }]
      }
    });
    
    // Run the report for bounce rate
    const bounceResponse = await analyticsData.properties.runReport({
      property: GA_PROPERTY_ID,
      requestBody: {
        dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
        metrics: [{ name: 'bounceRate' }]
      }
    });
    
    // Run the report for top referrer
    const referrerResponse = await analyticsData.properties.runReport({
      property: GA_PROPERTY_ID,
      requestBody: {
        dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
        dimensions: [{ name: 'sessionSource' }],
        metrics: [{ name: 'sessions' }],
        limit: 1,
        orderBys: [{ metric: { metricName: 'sessions' }, desc: true }]
      }
    });
    
    // Process the data
    let totalVisitors = 0;
    let bounceRate = '0%';
    let topReferrer = 'Direct';
    
    if (visitorsResponse.data && visitorsResponse.data.rows) {
      totalVisitors = parseInt(visitorsResponse.data.rows[0].metricValues[0].value, 10);
    }
    
    if (bounceResponse.data && bounceResponse.data.rows) {
      const bounceRateValue = parseFloat(bounceResponse.data.rows[0].metricValues[0].value);
      bounceRate = `${bounceRateValue.toFixed(1)}%`;
    }
    
    if (referrerResponse.data && referrerResponse.data.rows && referrerResponse.data.rows.length > 0) {
      topReferrer = referrerResponse.data.rows[0].dimensionValues[0].value;
    }
    
    // Calculate average daily visitors
    const averageDailyVisitors = Math.round(totalVisitors / 30);
    
    const stats = {
      totalVisitors,
      averageDailyVisitors,
      bounceRate,
      topReferrer
    };
    
    return res.status(200).json({ stats });
  } catch (error) {
    console.error('Error fetching overall stats:', error);
    return res.status(500).json({ error: 'Failed to fetch overall stats' });
  }
};

// Get all analytics data in one call
const getAllAnalyticsData = async (req, res) => {
  try {
    const client = initializeJwtClient();
    const analyticsData = google.analyticsdata({
      version: 'v1beta',
      auth: client
    });
    
    // Run all reports in parallel
    const [visitorData, deviceData, pageViewData, stats] = await Promise.all([
      getVisitorDataInternal(analyticsData),
      getDeviceDataInternal(analyticsData),
      getPageViewDataInternal(analyticsData),
      getOverallStatsInternal(analyticsData)
    ]);
    
    return res.status(200).json({
      visitorData,
      deviceData,
      pageViewData,
      stats
    });
  } catch (error) {
    console.error('Error fetching all analytics data:', error);
    return res.status(500).json({ error: 'Failed to fetch analytics data' });
  }
};

// Internal helper functions for parallel execution
async function getVisitorDataInternal(analyticsData) {
  // Get date 7 days ago
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
  
  // Format dates for the GA API
  const startDate = sevenDaysAgo.toISOString().split('T')[0];
  const endDate = new Date().toISOString().split('T')[0];
  
  // Run the report
  const response = await analyticsData.properties.runReport({
    property: GA_PROPERTY_ID,
    requestBody: {
      dateRanges: [{ startDate, endDate }],
      dimensions: [{ name: 'date' }],
      metrics: [{ name: 'activeUsers' }]
    }
  });
  
  // Process the data
  const visitorData = [];
  
  if (response.data && response.data.rows) {
    response.data.rows.forEach(row => {
      // Convert YYYYMMDD to a more readable format
      const date = row.dimensionValues[0].value;
      const year = date.substring(0, 4);
      const month = date.substring(4, 6);
      const day = date.substring(6, 8);
      const formattedDate = new Date(`${year}-${month}-${day}`);
      
      visitorData.push({
        date: formattedDate.toLocaleDateString('en-US', { weekday: 'short' }),
        visitors: parseInt(row.metricValues[0].value, 10)
      });
    });
  }
  
  return visitorData;
}

async function getDeviceDataInternal(analyticsData) {
  // Run the report
  const response = await analyticsData.properties.runReport({
    property: GA_PROPERTY_ID,
    requestBody: {
      dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
      dimensions: [{ name: 'deviceCategory' }],
      metrics: [{ name: 'activeUsers' }]
    }
  });
  
  // Process the data
  const deviceData = [];
  
  if (response.data && response.data.rows) {
    response.data.rows.forEach(row => {
      deviceData.push({
        name: row.dimensionValues[0].value,
        value: parseInt(row.metricValues[0].value, 10)
      });
    });
  }
  
  return deviceData;
}

async function getPageViewDataInternal(analyticsData) {
  // Run the report
  const response = await analyticsData.properties.runReport({
    property: GA_PROPERTY_ID,
    requestBody: {
      dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
      dimensions: [{ name: 'pagePath' }],
      metrics: [{ name: 'screenPageViews' }],
      limit: 10,
      orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }]
    }
  });
  
  // Process the data
  const pageViewData = [];
  
  if (response.data && response.data.rows) {
    response.data.rows.forEach(row => {
      pageViewData.push({
        page: row.dimensionValues[0].value,
        views: parseInt(row.metricValues[0].value, 10)
      });
    });
  }
  
  return pageViewData;
}

async function getOverallStatsInternal(analyticsData) {
  // Run the report for total visitors
  const visitorsResponse = await analyticsData.properties.runReport({
    property: GA_PROPERTY_ID,
    requestBody: {
      dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
      metrics: [{ name: 'activeUsers' }]
    }
  });
  
  // Run the report for bounce rate
  const bounceResponse = await analyticsData.properties.runReport({
    property: GA_PROPERTY_ID,
    requestBody: {
      dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
      metrics: [{ name: 'bounceRate' }]
    }
  });
  
  // Run the report for top referrer
  const referrerResponse = await analyticsData.properties.runReport({
    property: GA_PROPERTY_ID,
    requestBody: {
      dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
      dimensions: [{ name: 'sessionSource' }],
      metrics: [{ name: 'sessions' }],
      limit: 1,
      orderBys: [{ metric: { metricName: 'sessions' }, desc: true }]
    }
  });
  
  // Process the data
  let totalVisitors = 0;
  let bounceRate = '0%';
  let topReferrer = 'Direct';
  
  if (visitorsResponse.data && visitorsResponse.data.rows) {
    totalVisitors = parseInt(visitorsResponse.data.rows[0].metricValues[0].value, 10);
  }
  
  if (bounceResponse.data && bounceResponse.data.rows) {
    const bounceRateValue = parseFloat(bounceResponse.data.rows[0].metricValues[0].value);
    bounceRate = `${bounceRateValue.toFixed(1)}%`;
  }
  
  if (referrerResponse.data && referrerResponse.data.rows && referrerResponse.data.rows.length > 0) {
    topReferrer = referrerResponse.data.rows[0].dimensionValues[0].value;
  }
  
  // Calculate average daily visitors
  const averageDailyVisitors = Math.round(totalVisitors / 30);
  
  return {
    totalVisitors,
    averageDailyVisitors,
    bounceRate,
    topReferrer
  };
}

module.exports = {
  getVisitorData,
  getDeviceData,
  getPageViewData,
  getOverallStats,
  getAllAnalyticsData
}; 