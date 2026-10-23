import Container from "@/components/container";
import FavoriteCard from "@/components/favoriteCard";
import Image from "next/image";
import { FiShare } from "react-icons/fi";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DalyGames - Perfil",
  description: "Tela de perfil do usuário",
};

export default function PerfilPage() {
  return (
    <main>
      <Container>
        <section className="relative mt-10 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="relative w-39 h-39 rounded-full overflow-hidden shrink-0">
              <Image
                src="/user.png"
                alt="Foto de perfil de Kaynan Teixeira"
                fill
                quality={100}
                className="object-cover"
              />
            </div>

            <h2 className="font-bold text-2xl">Kaynan Teixeira</h2>
          </div>

          <div className="flex gap-4">
            <button className="bg-[#334155] text-white py-2 px-4 rounded-lg">
              Configurações
            </button>

            <button
              aria-label="Compartilhar perfil"
              className="bg-[#334155] text-white py-2 px-4 rounded-lg"
            >
              <FiShare size={24} />
            </button>
          </div>
        </section>

        <section className="w-full mt-8 flex flex-wrap gap-6">
          <FavoriteCard />
          <FavoriteCard />
          <FavoriteCard />
        </section>
      </Container>
    </main>
  );
}
