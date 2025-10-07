import LoginForm from "@/components/organisms/LoginForm";
import Image from 'next/image';

export default function LoginPage() {
  return (
    <div className="relative w-dvw h-dvh flex flex-col items-center justify-center">
      <Image className="absolute top-0 w-dvw h-dvh" src="/images/PicoraLoginImg.jpg" alt="Imagen Administradora" layout="fill" objectFit="cover"/>
      <div className="absolute top-0 opacity-50 w-dvw h-dvh bg-black"></div>

      <div className="z-10 box-border flex items-center gap-4 lg:scale-150 absolute top-20 lg:m-0">
        <Image src="./logo/logo.svg" alt="logo.svg" width={30} height={26}/>
        <div className="flex flex-col">
          <h1 className="text-white font-bold text-3xl">Picora</h1>
          <p className="text-white">by Capital Code</p>
        </div>
      </div>
      
      <div className="z-10 box-border p-8 bg-red-950 rounded-4xl h-3/4 absolute bottom-[-30px] lg:relative lg:bottom-auto lg:h-min">
        <LoginForm role="admin" redirectTo="/admin" />
      </div>
    </div>
  );
}