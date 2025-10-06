import LoginForm from "@/components/organisms/LoginForm";
import Image from 'next/image';

export default function LoginPage() {
  return (
    <div className="w-dvw h-dvh bg-contain bg-black">
      <img className="opacity-50" src="/images/PicoraLoginImg.jpg" alt="Imagen Administradora" />

      <div className="absolute top-0 w-full p-8 flex items-center justify-center h-1/4 gap-2">
        <Image src="./logo/logo.svg" alt="logo.svg" width={30} height={26}/>
        <div className="flex flex-col">
          <h1 className="text-white font-bold text-3xl">Picora</h1>
          <p className="text-white">by Capital Code</p>
        </div>
      </div>
      
      <div className="absolute bottom-0 w-full h-3/4 p-8 bg-red-950 rounded-t-4xl ">
        <LoginForm role="admin" redirectTo="/admin" />
      </div>
    </div>
  );
}