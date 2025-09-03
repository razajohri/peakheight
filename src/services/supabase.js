import { createClient } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-url-polyfill/auto';

class SupabaseService {
  constructor() {
    this.client = null;
    this.initialized = false;
  }

  async initialize() {
    try {
      // Get DATABASE_URL from environment
      const databaseUrl = process.env.DATABASE_URL;
      
      if (!databaseUrl) {
        throw new Error('DATABASE_URL environment variable not set');
      }

      // Parse the database URL to extract Supabase details
      const url = new URL(databaseUrl);
      const supabaseUrl = `https://${url.hostname}`;
      
      // For React Native, we need the anon key from the Supabase dashboard
      // This should be set as an environment variable
      const supabaseKey = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlvdXItcHJvamVjdCIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjc0NzM2ODAwLCJleHAiOjE5OTAzMTI4MDB9.example';

      this.client = createClient(supabaseUrl, supabaseKey, {
        auth: {
          storage: AsyncStorage,
          autoRefreshToken: true,
          persistSession: true,
          detectSessionInUrl: false
        },
        realtime: {
          params: {
            eventsPerSecond: 2
          }
        }
      });

      // Test the connection
      const { data, error } = await this.client.auth.getSession();
      if (error && error.message !== 'Invalid session') {
        console.error('Supabase connection test failed:', error);
      }

      this.initialized = true;
      console.log('Supabase initialized successfully');
      
    } catch (error) {
      console.error('Failed to initialize Supabase:', error);
      throw error;
    }
  }

  getClient() {
    if (!this.initialized || !this.client) {
      throw new Error('Supabase not initialized. Call initialize() first.');
    }
    return this.client;
  }

  // Auth methods
  async getCurrentSession() {
    const client = this.getClient();
    const { data, error } = await client.auth.getSession();
    if (error) throw error;
    return data.session;
  }

  async getCurrentUser() {
    const client = this.getClient();
    const { data, error } = await client.auth.getUser();
    if (error) throw error;
    return data.user;
  }

  // Database helper methods
  async query(table) {
    const client = this.getClient();
    return client.from(table);
  }

  // Storage methods
  getStorage(bucket) {
    const client = this.getClient();
    return client.storage.from(bucket);
  }

  // Realtime methods
  channel(name) {
    const client = this.getClient();
    return client.channel(name);
  }

  // Edge Functions
  async invokeFunction(functionName, options = {}) {
    const client = this.getClient();
    const { data, error } = await client.functions.invoke(functionName, options);
    if (error) throw error;
    return data;
  }

  // Utility methods
  isInitialized() {
    return this.initialized;
  }

  async healthCheck() {
    try {
      const client = this.getClient();
      const { data, error } = await client.from('users').select('id').limit(1);
      return { healthy: !error, error: error?.message };
    } catch (error) {
      return { healthy: false, error: error.message };
    }
  }
}

// Create singleton instance
const supabaseService = new SupabaseService();

export { supabaseService as SupabaseService };
export default supabaseService;