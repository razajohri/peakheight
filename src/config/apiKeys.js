// API Keys Configuration
// Replace with your actual API keys

export const API_KEYS = {
  // Google Vision API Key
  // Get your key from: https://console.cloud.google.com/apis/credentials
  GOOGLE_VISION_API_KEY: 'AIzaSyCbIlDzLMqu7zXgWRhYpWItOR_oKcey0_w',

  // Open Food Facts API (no key required)
  OPEN_FOOD_FACTS_API: 'https://world.openfoodfacts.org/api/v0/product/',

  // Google OAuth Client ID (provided by user)
  GOOGLE_OAUTH_CLIENT_ID: '257971844278-1tdb5biqv27j9kmef24l8dhgnm0f7cif.apps.googleusercontent.com',
};

// Instructions for getting Google Vision API Key:
// 1. Go to https://console.cloud.google.com/
// 2. Create a new project or select existing one
// 3. Enable the Vision API
// 4. Go to Credentials and create an API key
// 5. Replace 'YOUR_GOOGLE_VISION_API_KEY_HERE' with your actual key
// 6. Restrict the key to Vision API for security

export default API_KEYS;
