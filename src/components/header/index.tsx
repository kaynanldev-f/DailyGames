import Link from "next/link";
import Container from "../container";
import Image from "next/image";
import { LiaGamepadSolid } from "react-icons/lia";

export default function Header() {
  return (
    <header className="bg-[#F1F5F9] w-full py-8">
      <Container>
        <div className="flex items-baseline justify-center sm:justify-between ">
          <nav className="flex items-center gap-4 text-zinc font-bold">
            <Link href="/">
              <Image
                src={"/logo.svg"}
                alt="Logo"
                priority
                quality={100}
                width={100}
                height={100}
              />
            </Link>
            <Link href="/jogos">Jogos</Link>
            <Link href="/perfil">Perfil</Link>
          </nav>
          <div className="hidden sm:flex items-center gap-4 text-zinc font-bold">
            <Link href="/jogos">
              <LiaGamepadSolid size={24} color="#18181b" />
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
