import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Box, Button, TextField, Typography, Alert } from "@mui/material";
import { addPokemon } from "../services/pokemonService";
import "./PokemonForm.css";
import Spinner from "./Spinner";

export default function PokemonForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [pokemonData, setPokemonData] = useState({
    name: "",
    type: "",
    weight: "",
    height: "",
    picture: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "picture") {
      setPokemonData({ ...pokemonData, picture: files[0] });
    } else {
      setPokemonData({ ...pokemonData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    addPokemon(pokemonData)
      .then(() => {
        alert("Pokémon agregado exitosamente!");
        navigate("/");
      })
      .catch((error) => {
        console.error("Error al agregar Pokémon: ", error);
        setErrorMsg(
          "Ocurrió un error al agregar el Pokémon. Por favor, inténtalo de nuevo.",
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Formulario de Pokémon
      </Typography>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          label="Nombre"
          name="name"
          value={pokemonData.name}
          onChange={handleChange}
          variant="outlined"
        />
        <TextField
          label="Tipo"
          name="type"
          value={pokemonData.type}
          onChange={handleChange}
          variant="outlined"
        />
        <TextField
          label="Peso"
          name="weight"
          value={pokemonData.weight}
          onChange={handleChange}
          variant="outlined"
          type="number"
        />
        <TextField
          label="Altura"
          name="height"
          value={pokemonData.height}
          onChange={handleChange}
          variant="outlined"
          type="number"
        />
        <input
          type="file"
          name="picture"
          accept="image/*"
          onChange={handleChange}
        />

        {errorMsg && (
          <Alert severity="error">{errorMsg}</Alert>
        )}

        <Button variant="contained" color="primary" type="submit">
          Guardar
        </Button>
      </Box>
    </>
  );
}
