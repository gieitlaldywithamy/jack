import { usePokemonContext } from "../PokemonContext";
import { Pokemon } from "../PokemonType";

export const PokemonRow = (pokemon: Pokemon) => {
  const { dispatch } = usePokemonContext();
  const {
    id,
    name: { english },
    type,
  } = pokemon;

  const handleOnClick = () => {
    dispatch({ type: "SET_SELECTED_POKEMON", payload: pokemon });
  };
  return (
    <tr key={id} className="border-b">
      <td className="text-center">{english}</td>
      <td className="text-center">{type.join(", ")}</td>
      <td>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleOnClick}
        >
          Select
        </button>
      </td>
    </tr>
  );
};
