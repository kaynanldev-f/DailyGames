import { getSearchGames } from "@/actions/gameActions";
import Container from "@/components/container";
import GameCard from "@/components/gameCard";
import InputSearch from "@/components/inputSearch";
import { GameProps } from "@/utils/types/game";

export default async function SearchPage({
  params,
}: {
  params: Promise<{ title: string }>;
}) {
  const { title } = await params;
  const gameSearch = await getSearchGames(title);
  console.log(gameSearch);
  return (
    <Container>
      <InputSearch />
      <h2 className="font-bold text-base mt-8 mb-6">
        Veja oque encontramos na nossa base:
      </h2>
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {!gameSearch && <p>Ops! Nenhum jogo foi encontrado...</p>}
        {gameSearch.map((game: GameProps) => (
          <GameCard key={game.id} game={game} />
        ))}
      </section>
    </Container>
  );
}
