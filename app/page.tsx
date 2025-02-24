"use client";
import { PokemonInfo } from "./components/PokemonInfo";
import { PokemonTable } from "./components/PokemonTable";
import { PokemonFilter } from "./components/PokemonFilter";
import { PokemonContextProvider } from "./PokemonContext";

export default function Home() {
  return (
    <div
      style={{
        margin: "auto",
        width: 800,
        paddingTop: "1em",
      }}
    >
      <h1 className="title mb-2 font-extrabold text-xl">Pokemon Search</h1>
      <PokemonContextProvider>
        <PokemonFilter />
        <div className="grid grid-cols-3">
          <PokemonTable />
          <PokemonInfo />
        </div>
      </PokemonContextProvider>
    </div>
  );
}
