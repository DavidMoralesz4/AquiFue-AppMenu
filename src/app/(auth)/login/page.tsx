"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { InputField } from "@/components/molecules/InputField";

const formSchema = z.object({
  email: z.string().email({ message: "Email inválido" }),
  password: z.string().min(6, { message: "Mínimo 6 caracteres" }),
});

type FormValues = z.infer<typeof formSchema>;

export default function LoginPage() {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(formSchema) });

  const onSubmit = async (values: FormValues) => {
    setServerError(null);
    try {
      await axios.post("/api/auth/login", values, { withCredentials: true });
      router.push("/");
    } catch (err: any) {
      const message = err?.response?.data?.message ?? "Error de autenticación";
      setServerError(message);
    }
  };

  return (
    <main className="min-h-dvh flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-sm space-y-4 border rounded-lg p-6"
      >
        <h1 className="text-2xl font-semibold">Iniciar sesión</h1>
        {serverError && (
          <p className="text-sm text-red-600" role="alert">
            {serverError}
          </p>
        )}

        <InputField
          label="Email"
          id="email"
          type="email"
          required
          error={!!errors.email}
          errorMessage={errors.email?.message}
          inputProps={{
            autoComplete: "email",
            ...register("email")
          }}
        />

        <InputField
          label="Contraseña"
          id="password"
          type="password"
          required
          error={!!errors.password}
          errorMessage={errors.password?.message}
          inputProps={{
            autoComplete: "current-password",
            ...register("password")
          }}
        />

        <button
          disabled={isSubmitting}
          type="submit"
          className="w-full bg-black text-white rounded py-2 disabled:opacity-60"
        >
          {isSubmitting ? "Ingresando..." : "Ingresar"}
        </button>
      </form>
    </main>
  );
}


