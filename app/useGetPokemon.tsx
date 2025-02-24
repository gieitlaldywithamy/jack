import { useCallback, useEffect, useState } from "react";
import { Pokemon } from "./PokemonType";

export const useGetPokemon = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [pokemons, setPokemons] = useState<Pokemon[] | undefined>(undefined);

  const callbackMemoized = useCallback(() => {
    setLoading(true);
    setError(undefined);
    setPokemons(undefined);
    fetch("http://localhost:3000/pokemon.json")
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then(setPokemons)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    callbackMemoized();
  }, [callbackMemoized]);

  return { loading, error, pokemons };
};
