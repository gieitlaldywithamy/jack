import { usePokemonContext } from "../PokemonContext";

export const PokemonInfo = () => {
  const {
    state: { selectedPokemon },
  } = usePokemonContext();

  if (!selectedPokemon) {
    return null;
  }
  const {
    name: { english },
    type,
    base,
  } = selectedPokemon;
  return (
    <div className="col-span-1">
      <h1 className="font-semibold text-xxl">{english}</h1>
      <h3>{type.join(", ")}</h3>
      <table>
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
