import { usePokemonStore } from "../pokemonZustandStore";

export const PokemonInfo = () => {
  const { selectedPokemon } = usePokemonStore();

  if (!selectedPokemon) {
    return null;
  }
  const {
    name: { english },
    type,
    base,
  } = selectedPokemon;
  return (
    <div className="col-span-1 bg-white shadow-md rounded p-4">
      <h2 className="text-lg font-semibold mb-2">{english}</h2>
      <h3>{type.join(", ")}</h3>
      <table className="text-gray-700">
        <tbody>
          {Object.keys(base).map((ability) => (
            <tr key={ability}>
              <td>{ability}</td>
              <td>{base[ability]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
