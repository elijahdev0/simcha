import { Router } from 'express';
import zoomService from '../services/zoomService';

const router = Router();

// Test endpoint to verify credentials
router.get('/test-credentials', async (req, res) => {
  try {
    // This will attempt to get an access token using the credentials
    await zoomService.getAccessToken();
    res.json({ status: 'success', message: 'Zoom credentials are valid' });
  } catch (error) {
    console.error('Error testing Zoom credentials:', error);
    res.status(500).json({ 
      status: 'error', 
      message: 'Failed to verify Zoom credentials',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

router.post('/schedule-zoom', async (req, res) => {
  try {
    const { topic, startTime, duration } = req.body;

    if (!topic || !startTime || !duration) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const meeting = await zoomService.createMeeting({
      topic,
      startTime,
      duration,
    });

    res.json(meeting);
  } catch (error) {
    console.error('Error scheduling Zoom meeting:', error);
    res.status(500).json({ error: 'Failed to schedule meeting' });
  }
});

export default router; 