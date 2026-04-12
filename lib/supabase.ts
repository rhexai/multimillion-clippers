import { createClient } from "@supabase/supabase-js";

if (!process.env.URL) {
  throw new Error("Missing Supabase URL");
}

if (!process.env.Secret_Key) {
  throw new Error("Missing Supabase Secret Key");
}

// We use the Secret_Key (service role key) here because
// these actions run on the server side and allow us to bypass RLS for now,
// similar to how Prisma had full DB access.
export const supabase = createClient(process.env.URL, process.env.Secret_Key);
