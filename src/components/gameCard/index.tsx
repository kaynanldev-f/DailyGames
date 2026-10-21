import { GameProps } from "@/utils/types/game";
import Image from "next/image";
import Link from "next/link";
import { BiRightArrowCircle } from "react-icons/bi";
export default function GameCard({ game }: { game: GameProps }) {
  return (
    <Link
      href={`/game/details/${game.id}`}
      className="w-full bg-slate-200 p-3 rounded-lg hover:scale-105 transition-transform duration-300"
    >
      <div className="w-full relative h-58  rounded-lg">
        <Image
          src={game.image_url}
          alt={game.title}
          fill
          quality={100}
          className="object-cover rounded-lg"
        />
      </div>
      <div className="flex items-center justify-between mt-4">
        <p className="font-bold text-sm truncate ">{game.title}</p>
        <BiRightArrowCircle size={16} color="#000" />
      </div>
    </Link>
  );
}
