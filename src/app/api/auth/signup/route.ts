import { NextResponse } from "next/server";
import { z } from "zod";
import { createClient as createServerSupabase } from "@/lib/supabase/server";

const bodySchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const { email, password } = bodySchema.parse(json);

    const supabase = await createServerSupabase();
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}/auth/callback`,
      },
    });

    if (error) {
      return NextResponse.json(
        { message: "No se pudo registrar", code: error.code },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { message: "Registro iniciado. Revisa tu correo", user: data.user },
      { status: 200 },
    );
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Datos inválidos", issues: err.issues },
        { status: 400 },
      );
    }
    return NextResponse.json(
      { message: "Error interno" },
      { status: 500 },
    );
  }
}


