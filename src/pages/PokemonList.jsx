import { useState, useEffect } from "react";
import { Grid, Alert } from "@mui/material";
import { fetchPokemons } from "../services/pokemonService";
import PokemonCard from "../components/PokemonCard";
import Spinner from "../components/Spinner";

export default function PokemonList() {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetchPokemons().then((data) => {
            setPokemons(data);
        }).catch((error) => {
            setErrorMsg("Error obteniendo pokemons. Por favor, inténtelo de nuevo más tarde.");
            console.error("Error obteniendo pokemons:", error);
        }).finally(() => {
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <Spinner />;
    }

    if (errorMsg) {
        return <Alert severity="error">{errorMsg}</Alert>;
    }

    return(
        <Grid container spacing={2}>
            {pokemons.map(
                (pokemonItem) => (
                    <Grid key={pokemonItem.id} size={{ xs: 12, sm: 6, md: 4}}>
                        <PokemonCard pokemon={pokemonItem}/>
                    </Grid>
                )
            )}
        </Grid>    
    )
}