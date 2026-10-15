"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { BsSearch } from "react-icons/bs";

export default function InputSearch() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (search === "") return;
    router.push(`/search/${search}`);
  }
  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center justify-between bg-slate-200 rounded-lg p-2 my-10"
    >
      <input
        type="text"
        placeholder="Está procurando algum jogo?"
        className="outline-none w-[90%] text-base"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">
        <BsSearch size={24} color="#EA580C" />
      </button>
    </form>
  );
}
