import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jxhnpukxnjlmtboemcgv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4aG5wdWt4bmpsbXRib2VtY2d2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQxNjc0MTEsImV4cCI6MjAyOTc0MzQxMX0.ssx_WjyvnlAW-lMScnX_P3qUBBfYkVShD5UZbqSM0AQ';

export const supabase = createClient(supabaseUrl, supabaseKey);