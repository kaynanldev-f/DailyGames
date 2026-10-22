import Image from "next/image";
import { getGameId } from "@/actions/gameActions";
import { GameDetailsProps, GameProps } from "@/utils/types/game";
import { getDailyGame } from "@/actions/gameActions";
import Container from "@/components/container";
import { redirect } from "next/navigation";
import GameCard from "@/components/gameCard";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  "use cache";
  try {
    const { id } = await params;
    const response: GameDetailsProps = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game&id=${id}`,
    ).then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      return res.json();
    });

    return {
      title: `DalyGames - ${response.title}`,
      description: `${response.description.slice(0, 100)}...`,
      openGraph: {
        title: response.title,
        images: [response.image_url],
      },
      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: true,
          noimageindex: true,
        },
      },
    };
  } catch (err) {
    return {
      title: "DalyGames - Descubra jogos incríveis para se divertir",
    };
  }
}
export default async function detailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const gameId: GameDetailsProps = await getGameId(id);
  const dailyGame: GameProps = await getDailyGame();

  if (!gameId) {
    redirect("/");
  }
  return (
    <main className="mb-20">
      <div className="w-full h-96 bg-black relative">
        <Image
          src={gameId.image_url}
          alt={gameId.title}
          fill
          quality={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
          className="object-cover opacity-80 bg-center"
        />
      </div>
      <Container>
        <h2 className="font-bold text-[24px] my-6 ">{gameId.title}</h2>
        <p className="text-zinc-900 my-6">{gameId.description}</p>
        <div className="flex flex-col gap-4 mb-6">
          <h3 className="font-bold">Plataformas disponíveis:</h3>
          <ul className="flex items-center justify-center sm:justify-start gap-4">
            {gameId.platforms.map((plat, index) => (
              <li key={index} className="bg-slate-200 py-1 px-2 rounded-sm">
                {plat}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4 mb-6">
          <h3 className="font-bold">Categorias:</h3>
          <ul className="flex items-center justify-center sm:justify-start gap-4">
            {gameId.categories.map((cat, index) => (
              <li key={index} className="bg-slate-200 py-1 px-2 rounded-sm">
                {cat}
              </li>
            ))}
          </ul>
        </div>
        <h3 className="font-bold mb-6">
          Lançamento: <span className="font-normal">{gameId.release}</span>
        </h3>

        <div>
          <h3 className="font-bold mb-4">Outros jogos que recomendamos:</h3>
          <section className="grid grid-cols-1">
            <GameCard game={dailyGame} />
          </section>
        </div>
      </Container>
    </main>
  );
}
