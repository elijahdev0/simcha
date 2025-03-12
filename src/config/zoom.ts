export const zoomConfig = {
  accountId: import.meta.env.VITE_ZOOM_ACCOUNT_ID,
  clientId: import.meta.env.VITE_ZOOM_CLIENT_ID,
  clientSecret: import.meta.env.VITE_ZOOM_CLIENT_SECRET,
} as const;

// Validate required environment variables
if (!zoomConfig.accountId || !zoomConfig.clientId || !zoomConfig.clientSecret) {
  throw new Error('Missing required Zoom configuration. Please check your environment variables.');
} 