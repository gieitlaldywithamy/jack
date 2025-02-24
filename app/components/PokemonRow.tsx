import { Pokemon } from "../PokemonType";
import { usePokemonStore } from "../pokemonZustandStore";

export const PokemonRow = (pokemon: Pokemon) => {
  const { setSelectedPokemon } = usePokemonStore();
  const {
    id,
    name: { english },
    type,
  } = pokemon;

  const handleOnClick = () => {
    setSelectedPokemon(pokemon);
  };
  return (
    <tr key={id} className="hover:bg-gray-100 cursor-pointer">
      <td className="p-2">{english}</td>
      <td className="p-2">{type.join(", ")}</td>
      <td>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
          onClick={handleOnClick}
        >
          Select
        </button>
      </td>
    </tr>
  );
};
