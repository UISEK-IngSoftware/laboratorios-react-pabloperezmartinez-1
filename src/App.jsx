import { Container } from '@mui/material'
import './App.css'
import Header from './components/Header'
import PokemonForm from './components/PokemonForm'
import LoginForm from './pages/LoginForm'
import PokemonList from './pages/PokemonList'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Container>
          <Routes>
            <Route path="/" element={<PokemonList />} />
            <Route path="/add" element={<PokemonForm />} />
            <Route path="/login" element={<LoginForm />} />
          </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App
