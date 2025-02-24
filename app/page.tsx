"use client";
import { Provider } from "react-redux";
import store from "./redux/pokemonStore";
import { PokemonInfo } from "./components/PokemonInfo";
import { PokemonTable } from "./components/PokemonTable";
import { PokemonFilter } from "./components/PokemonFilter";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <header className="bg-white shadow-md p-4 mb-4">
        <h1 className="title mb-2 font-extrabold text-xl">Pokemon Search</h1>
      </header>
      <main className="grid grid-cols-3 gap-4">
        <Provider store={store}>
          <div className="col-span-2">
            <PokemonFilter />
            <div className="grid grid-cols-3">
              <PokemonTable />
              <PokemonInfo />
            </div>
          </div>
        </Provider>
      </main>
    </div>
  );
}
