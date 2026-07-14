import Header from "./components/Header";
import { Container } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokemonList from "./pages/PokemonList";
import PokemonForm from "./components/PokemonForm";
import LoginPage from "./pages/LoginPage";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PokemonList />} />
            <Route path="/add" element={<PokemonForm />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
