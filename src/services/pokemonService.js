import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const getPokemonList = async () => {
    try {
        const response = await apiClient.get('/pokemons/');
        return response.data;
    } catch (error) {
        console.error("Error obteniendo lista pokemons:", error);
        throw error;
    }
}


function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      // reader.result ya incluye el encabezado, lo usamos completo
      resolve(reader.result);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export const addPokemon = async (pokemonData) => {
    let pictureBase64 = "";
    if (pokemonData.picture) {
        pictureBase64 = await fileToBase64(pokemonData.picture);
    }
    const payload = { ...pokemonData, picture: pictureBase64 };
    try {
        const response = await apiClient.post('/pokemons/', payload);
        return response.data;
    } catch (error) {
        console.error("Error agregando Pokémon:", error);
        throw error;
    }
}