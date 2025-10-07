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

interface LoginFormProps {
  role: "admin" | "customer";
  redirectTo: string;
}

type FormValues = z.infer<typeof formSchema>;

export default function LoginForm({ role, redirectTo }: LoginFormProps) {
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-sm space-y-4 rounded-lg p-6 flex flex-col gap-7 items-center"
    >
      <h1 className="text-4xl text-white text-center font-semibold">Iniciar sesión</h1>
      <p className="text-white text-center">Todo lo que necesitas para vender esta aqui en Picora. Comienza ahora mismo</p>
      {serverError && (
        <p className="text-sm text-red-600" role="alert">
          {serverError}
        </p>
      )}

      <InputField
        id="email"
        type="email"
        required
        error={!!errors.email}
        errorMessage={errors.email?.message}
        inputProps={{
          autoComplete: "email",
          ...register("email"),
        }}
        className="bg-[#D9D9D9] rounded-xl w-full"
        placeholder="Correo electrónico"
        />

      <InputField
        id="password"
        type="password"
        required
        error={!!errors.password}
        errorMessage={errors.password?.message}
        inputProps={{
          autoComplete: "current-password",
          ...register("password"),
        }}
        className="bg-[#D9D9D9] rounded-xl w-full"
        placeholder="Contraseña"
      />

      <button
        disabled={isSubmitting}
        type="submit"
        className="bg-black w-full text-white rounded-lg px-4 py-2 disabled:opacity-60"
      >
        {isSubmitting ? "Iniciando sesión..." : "Iniciar sesión"}
      </button>
    </form>
  );
}
