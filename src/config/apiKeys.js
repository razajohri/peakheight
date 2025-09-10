// API Keys and Configuration
// IMPORTANT: These should be stored in environment variables in production

export const API_KEYS = {
  // OpenAI for AI features
  OPENAI_API_KEY: process.env.EXPO_PUBLIC_OPENAI_API_KEY || 'YOUR_OPENAI_API_KEY',
  
  // Google Vision for food scanning
  GOOGLE_VISION_API_KEY: process.env.EXPO_PUBLIC_GOOGLE_VISION_API_KEY || 'YOUR_GOOGLE_VISION_API_KEY',
  
  // RevenueCat for premium subscriptions
  REVENUECAT_API_KEY: process.env.EXPO_PUBLIC_REVENUECAT_API_KEY || 'YOUR_REVENUECAT_API_KEY',
  
  // Analytics
  MIXPANEL_TOKEN: process.env.EXPO_PUBLIC_MIXPANEL_TOKEN || 'YOUR_MIXPANEL_TOKEN',
};

// External API endpoints
export const API_ENDPOINTS = {
  // Open Food Facts API (no key required)
  OPEN_FOOD_FACTS: 'https://world.openfoodfacts.org/api/v0',
  
  // Google Vision API
  GOOGLE_VISION: 'https://vision.googleapis.com/v1/images:annotate',
  
  // OpenAI API
  OPENAI: 'https://api.openai.com/v1',
};

// Security: Content moderation thresholds
export const MODERATION_THRESHOLDS = {
  COMMUNITY_POST: 0.8, // Confidence threshold for auto-approval
  AI_CONTENT: 0.9, // Higher threshold for AI-generated content
  USER_REPORT: 0.7, // Threshold for manual review
};

// Premium feature limits
export const PREMIUM_LIMITS = {
  FREE: {
    AI_REQUESTS_PER_DAY: 10,
    COMMUNITY_POSTS_PER_DAY: 3,
    FOOD_SCANS_PER_DAY: 20,
    EXERCISE_ACCESS: 'basic',
  },
  PREMIUM: {
    AI_REQUESTS_PER_DAY: -1, // Unlimited
    COMMUNITY_POSTS_PER_DAY: -1, // Unlimited
    FOOD_SCANS_PER_DAY: -1, // Unlimited
    EXERCISE_ACCESS: 'all',
  },
};

export default API_KEYS;