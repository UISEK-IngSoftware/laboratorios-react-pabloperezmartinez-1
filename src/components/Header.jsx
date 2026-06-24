import { Container, AppBar, Toolbar } from "@mui/material";
import pokedexLogo from "../assets/pokedex-logo.png";
import "./Header.css";

export default function Header() {
    return (
        <header className="pokedex-header">
            <Container>
                <AppBar position="static">
                    <Toolbar>
                        <div className="image-container">
                            <img src={pokedexLogo} alt="Pokedex Logo" height={100} />
                        </div>
                    </Toolbar>
                </AppBar>
            </Container>
        </header>
    )
}