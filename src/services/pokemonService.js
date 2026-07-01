import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
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