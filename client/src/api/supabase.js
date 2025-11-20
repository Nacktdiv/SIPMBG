import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database

const supabaseUrl = 'https://rvtdvbdwzalkqinrfguc.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ2dGR2YmR3emFsa3FpbnJmZ3VjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM2NDExNjEsImV4cCI6MjA3OTIxNzE2MX0.6qD-bU8LMUGCxqFSeN2PtfgVOGILOsCfuEXMgU2C7cQ';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);