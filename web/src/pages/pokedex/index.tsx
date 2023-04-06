import { NextPage } from "next";
import localFont from "next/font/local";
import { useState } from "react";
const pokemonHollowFont = localFont({
  src: "../../../public/fonts/pokemon_hollow.ttf",
});

const pokemonSolidFont = localFont({
  src: "../../../public/fonts/pokemon_solid.ttf",
});

interface Pokemon {
  name: string;
  height: number;
  weight: number;
  types: { slot: number; type: { name: string; url: string } }[];
}

const Page: NextPage = () => {
  const [currPokemon, setCurrPokemon] = useState<Pokemon | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <main
      className={
        "flex min-h-screen flex-col items-center justify-center gap-4 bg-white"
      }
    >
      <h1
        className={`text-6xl text-red-500 ${pokemonSolidFont.className} tracking-widest`}
      >
        Pokedex
      </h1>
      <div className="flex h-full min-h-[500px] min-w-[500px] rounded-md bg-red-500 p-[15px]">
        <div className="h-full w-full bg-white"></div>
      </div>
    </main>
  );
};

export default Page;
