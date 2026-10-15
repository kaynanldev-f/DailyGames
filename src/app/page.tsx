import Image from "next/image";
import Container from "../components/container";
import { GameProps } from "@/utils/types/game";
import Link from "next/link";
import { getDalyGame } from "@/actions/gameActions";
import { BsArrowRightSquare } from "react-icons/bs";
import InputSearch from "@/components/inputSearch";
export default async function Home() {
  const dalyGame: GameProps = await getDalyGame();

  return (
    <main className="w-full">
      <Container>
        <h1 className="text-center font-bold text-xl mt-8 mb-5">
          Separamos um jogo exclusivo pra você
        </h1>
        <Link href={`/game/${dalyGame.id}`}>
          <section className="w-full bg-black rounded-lg">
            <div className="relative w-full max-h-96 h-96 rounded-lg">
              <div className="absolute bottom-0 z-10 p-4 flex items-center justify-center gap-2">
                <p className="text-white font-bold">{dalyGame.title}</p>
                <BsArrowRightSquare size={24} color="#fff" />
              </div>
              <Image
                src={dalyGame.image_url}
                alt={dalyGame.title}
                priority={true}
                quality={100}
                fill
                className="object-cover rounded-lg opacity-50 hover:opacity-100 transition-opacity duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
              />
            </div>
          </section>
        </Link>
        <InputSearch />
      </Container>
    </main>
  );
}
