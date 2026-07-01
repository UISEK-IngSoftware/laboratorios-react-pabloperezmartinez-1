import { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import PokemonCard from "../components/PokemonCard";
import "./PokemonList.css";
import { getPokemonList } from "../services/pokemonService";

export default function PokemonList() {
    const [pokemons, setPokemons] = useState([]);
    const [errorMsg, setErrorMsg] = useState("");


    useEffect( () => {
        getPokemonList().then((pokemonsData) => {
            setPokemons(pokemonsData);
        }).catch((error) => {
            setErrorMsg("Error obteniendo lista pokemons.");
            alert("Error obteniendo lista pokemons:", error);
        })
    }, []);

    return (
        <Grid container spacing={2}>
            { pokemons.map((pokemon) => (
                <Grid item key={pokemon.id} size={{ xs: 12, sm: 6, md: 4 }}>
                    <PokemonCard pokemon={pokemon} />
                </Grid>
            ))}
            { errorMsg !== "" && (
                <Grid item xs={12}>
                    <Typography color="error">
                        {errorMsg}
                    </Typography>
                </Grid>
            )}
        </Grid>
    );
}