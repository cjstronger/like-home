import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://nohopmmiocdiltolxwwg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5vaG9wbW1pb2NkaWx0b2x4d3dnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUzODAxMzEsImV4cCI6MjAzMDk1NjEzMX0.LJsnqCyMoQu-fNGxf8NZrjlkbj-ETL1JfJIOE8mNUx0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
