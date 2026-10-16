import Image from "next/image";
import Container from "../components/container";
import { GameProps } from "@/utils/types/game";
import Link from "next/link";
import { getAllGames, getDailyGame } from "@/actions/gameActions";
import { BsArrowRightSquare } from "react-icons/bs";
import InputSearch from "@/components/inputSearch";
import GameCard from "@/components/gameCard";
import { BiRightArrowCircle } from "react-icons/bi";

export default async function Home() {
  const dailyGame: GameProps = await getDailyGame();
  const allGames: GameProps[] = await getAllGames();

  return (
    <main className="w-full">
      <Container>
        <h1 className="text-center font-bold text-xl mt-8 mb-5">
          Separamos um jogo exclusivo pra você
        </h1>
        <Link href={`/game/${dailyGame.id}`}>
          <section className="w-full bg-black rounded-lg">
            <div className="relative w-full max-h-96 h-96 rounded-lg">
              <div className="absolute bottom-0 z-10 p-4 flex items-center justify-center gap-2">
                <p className="text-white font-bold">{dailyGame.title}</p>
                <BiRightArrowCircle size={24} color="#fff" />
              </div>
              <Image
                src={dailyGame.image_url}
                alt={dailyGame.title}
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
        <h2 className="font-bold text-base mt-8 mb-6">
          Separamos um jogo exclusivo pra você
        </h2>
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {allGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </section>
      </Container>
    </main>
  );
}
