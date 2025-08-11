import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jzejwrtvffmmfphtjgxn.supabase.co'; // Substitua pela sua URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6ZWp3cnR2ZmZtbWZwaHRqZ3huIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ5NTAxMDcsImV4cCI6MjA3MDUyNjEwN30.O70WmwK56Zq9R9E3MW2xEbLur7jUYYoAdH36PpdxChU'; // Substitua pela sua chave

export const supabase = createClient(supabaseUrl, supabaseKey);