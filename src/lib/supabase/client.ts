import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}

/*
Se crea un createClient para cliente y servidor
por que: el server no tiene localStorage y el cliente no tiene acceso a cookies de servidor.

*/