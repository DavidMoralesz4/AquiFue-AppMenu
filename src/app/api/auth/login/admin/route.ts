import { NextResponse } from "next/server";
import { z } from "zod";
import { createClient as createServerSupabase } from "@/lib/supabase/server";

export type Role = "admin" | "customer";

const bodySchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  role: z.enum(["admin"]),
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const { email, password, role = "admin" } = bodySchema.parse(json);

    const supabase = await createServerSupabase();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return NextResponse.json(
        { message: "Credenciales inválidas", code: error.code },
        { status: 401 },
      );
    }

    if (data.user.user_metadata.role !== "admin") {
      return NextResponse.json(
        { message: "No tienes permisos de administrador", code: "unauthorized" },
        { status: 401 },
      );
    }

    return NextResponse.json(
      { message: "Autenticado", user: data.user },
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


