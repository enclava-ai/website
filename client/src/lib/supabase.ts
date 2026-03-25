import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_LEADS_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_LEADS_SUPABASE_ANON_KEY;

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export async function submitLead(email: string, source?: string) {
  if (!supabase) return { status: "error", message: "Not configured" } as const;
  const { error } = await supabase.from("leads").insert({
    site_id: "enclava",
    contact_type: "email",
    contact_value: email.trim(),
    metadata: source ? { source } : {},
  });

  if (error?.code === "23505") return { status: "duplicate" } as const;
  if (error) return { status: "error", message: error.message } as const;
  return { status: "ok" } as const;
}
