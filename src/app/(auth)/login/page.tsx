import LoginForm from "@/components/organisms/LoginForm";

export default function LoginPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      <aside className="hidden md:flex items-center justify-center">
        <img
          src="/images/executive.jpg"
          alt="Imagen administrativa"
          width={600}
          height={800}
        />
      </aside>
      <main className="flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <h1>Iniciar sesión - Administrador</h1>
          <LoginForm role="admin" redirectTo="/admin" />
        </div>
      </main>
    </div>
  );
}
