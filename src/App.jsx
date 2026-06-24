import Header from "./components/Header";
import "./App.css";
import PokemonList from "./pages/PokemonList";
import { Container } from "@mui/material";

function App() {
  return (
    <>
      <Header />
      <Container>
        <PokemonList />
      </Container>
    </>
  );
}

export default App;
