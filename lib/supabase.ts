import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mzagwjjqxnqclwpomnjt.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16YWd3ampxeG5xY2x3cG9tbmp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2Mjc0ODAsImV4cCI6MjA4NTIwMzQ4MH0.KP7XoO4oaOeEhNdrgiBm90i6_U7_L9H7zKnadbiysd0';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);