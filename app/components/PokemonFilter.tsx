import { usePokemonStore } from "../pokemonZustandStore";

export const PokemonFilter = () => {
  const { filter, setFilter } = usePokemonStore();

  return (
    <input
      className="mt-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500
      block w-full sm:text-sm border-gray-300 rounded-md"
      value={filter}
      onChange={(evt) => setFilter(evt.target.value)}
    />
  );
};
