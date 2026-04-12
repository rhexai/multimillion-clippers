import { createClient } from "@supabase/supabase-js";

if (!process.env.SUPABASE_URL) {
  throw new Error("Missing Supabase URL");
}

if (!process.env.SUPABASE_SECRET_KEY) {
  throw new Error("Missing Supabase Secret Key");
}

// We use the SUPABASE_SECRET_KEY (service role key) here because
// these actions run on the server side and allow us to bypass RLS for now,
// similar to how Prisma had full DB access.
export const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SECRET_KEY);
