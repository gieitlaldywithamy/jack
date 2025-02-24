import { usePokemonContext } from "../PokemonContext";

export const PokemonFilter = () => {
  const {
    state: { filter },
    dispatch,
  } = usePokemonContext();
  return (
    <input
      className="w-full text-lg"
      value={filter}
      onChange={(evt) =>
        dispatch({ type: "SET_FILTER", payload: evt.target.value })
      }
    />
  );
};
