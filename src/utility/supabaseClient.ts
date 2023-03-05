import { createClient } from "@pankod/refine-supabase";

const SUPABASE_URL = "https://yugvqjtbebyqngdpstws.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1Z3ZxanRiZWJ5cW5nZHBzdHdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc5OTY1NzgsImV4cCI6MTk5MzU3MjU3OH0.mzbcAXcKzidIObQr_2LNfKPmZo8KI6hHJlYe937A57s";

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY, {
  db: {
    schema: "public",
  },
  auth: {
    persistSession: true,
  },
});
