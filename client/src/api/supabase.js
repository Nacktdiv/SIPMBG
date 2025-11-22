import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY;

// const supabaseUrl = 'https://rvtdvbdwzalkqinrfguc.supabase.co';
// const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ2dGR2YmR3emFsa3FpbnJmZ3VjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM2NDExNjEsImV4cCI6MjA3OTIxNzE2MX0.6qD-bU8LMUGCxqFSeN2PtfgVOGILOsCfuEXMgU2C7cQ';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

//------------------------------------------------------------------------------------//
/**
 * Upload a File/Blob to Supabase Storage and return public URL
 * @param {File|Blob} file 
 * @param {string} path e.g. `uploads/165...jpg`
 */
export async function uploadImageToSupabase(file, path) {
  const { data, error } = await supabase.storage
    .from("mbg-images")
    .upload(path, file, { cacheControl: "3600", upsert: false });

  if (error) throw error;

  // create public URL
  const { publicURL, error: urlErr } = supabase.storage
    .from("mbg-images")
    .getPublicUrl(path);

  if (urlErr) throw urlErr;
  return publicURL;
}

/**
 * Insert detection metadata to Supabase table
 */
export async function insertDetectionRecord(record) {
  const { data, error } = await supabase
    .from("detections")
    .insert([record]);

  if (error) throw error;
  return data;
}