import {useState, useEffect} from "react";
import { AppBar, Button, Container, Toolbar } from "@mui/material";
import { useLocation } from "react-router-dom";
import { isLoggedIn, logout } from "../services/authService";
import pokedexLogo from "../assets/pokedex-logo.png"
import './Header.css'

export default function Header () {

    const [loggedIn, setLoggedIn] = useState(false);
    const location = useLocation();
    
    useEffect(() => {
        setLoggedIn(isLoggedIn());
    }, [location.pathname]);

    const handleLogout = async () => {
        await logout();
        window.location.href = "/";
    };

    return(
        <Container>
            <div className="pokedex-navbar">
                <AppBar position="static">
                    <Toolbar>
                        <div className="image-container">
                            <img src={pokedexLogo} alt="Logo" height={150}/>
                        </div>
                    </Toolbar>
                    <Toolbar>
                        <Button color="inherit" href="/">Inicio</Button>
                        {loggedIn ? (
                            <>
                                <Button color="inherit" href="/add">Agregar Pokémon</Button>
                                <Button color="inherit" onClick={handleLogout}>
                                    Cerrar sesión
                                </Button>
                            </>
                        ) : (
                            <Button color="inherit" href="/login">Iniciar sesión</Button>
                        )}
                    </Toolbar>
                </AppBar>
            </div>
        </Container>
    )
}