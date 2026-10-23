import Container from "@/components/container";
import FavoriteCard from "@/components/favoriteCard";
import Image from "next/image";
import { FiShare } from "react-icons/fi";

export default function PerfilPage() {
  return (
    <main>
      <Container>
        <section className="relative mt-10 flex justify-between items-center">
          <div className=" w-full flex flex-col sm:flex-row items-center gap-4">
            <div className="w-39 h-39 relative rounded-full">
              <Image
                src={"/user.png"}
                alt="foto de perfil"
                fill
                quality={100}
                className="object-cover rounded-full"
              />
            </div>
            <h2 className="font-bold text-2xl">Kaynan Teixeira</h2>
          </div>
          <div className="absolute top-0 right-0 flex gap-4">
            <button className="bg-[#334155] text-white py-2 px-4 rounded-lg">
              Configurações
            </button>
            <button className="bg-[#334155] text-white py-2 px-4 rounded-lg">
              <FiShare size={24} />
            </button>
          </div>
        </section>

        <section className="w-full mt-8 flex flex-wrap grow gap-6">
          <FavoriteCard></FavoriteCard>
          <FavoriteCard></FavoriteCard>
          <FavoriteCard></FavoriteCard>
        </section>
      </Container>
    </main>
  );
}
