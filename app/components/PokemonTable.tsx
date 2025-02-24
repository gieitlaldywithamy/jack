import { PokemonRow } from "./PokemonRow";
import { usePokemonContext } from "../PokemonContext";
import { useMemo } from "react";

export const PokemonTable = () => {
  const {
    pokemons: unfilteredPokemons,
    state: { filter },
  } = usePokemonContext();

  const pokemons = useMemo(() => {
    if (filter?.length === 0) {
      return unfilteredPokemons;
    }
    const filterIgnoreCase = filter.toLowerCase();
    return unfilteredPokemons?.filter(({ name }) => {
      const nameLowerCase = name.english.toLowerCase();
      return (
        nameLowerCase === filterIgnoreCase ||
        nameLowerCase.includes(filterIgnoreCase)
      );
    });
  }, [filter, unfilteredPokemons]);

  if (!pokemons) {
    return null;
  }
  return (
    <table className="col-span-2 border rounded-sm">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {pokemons?.slice(0, 20).map((pokemon) => (
          <PokemonRow key={pokemon.id} {...pokemon} />
        ))}
      </tbody>
    </table>
  );
};
