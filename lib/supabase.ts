import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL || "";
const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY || "";

if (!supabaseUrl) {
  console.warn("⚠️ Missing Supabase URL environment variable.");
}

if (!supabaseSecretKey) {
  console.warn("⚠️ Missing Supabase Secret Key environment variable.");
}

export const supabase = createClient(
  supabaseUrl || "https://placeholder.supabase.co",
  supabaseSecretKey || "placeholder_key"
);
