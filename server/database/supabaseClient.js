import { createClient } from "@supabase/supabase-js";

import dotenv from "dotenv";
dotenv.config();

const SUPABASE_URL = process.env.SUPABASE_URL;
const SERVICEROLE_KEY = process.env.SERVICEROLE_KEY;

const supabase = createClient(SUPABASE_URL, SERVICEROLE_KEY, {
  auth: {
    persistSession: true, // REQUIRED
    autoRefreshToken: true, // REQUIRED
    detectSessionInUrl: true,
  },
});

export default supabase;
