import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import useMediaQuery from '@mui/material/useMediaQuery'
import { darkThemeOptions, themeOptions } from './theme/theme.js'
import App from './App.jsx'

export function RootApp() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const activeTheme = prefersDarkMode ? darkThemeOptions : themeOptions

  return (
    <ThemeProvider theme={activeTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RootApp />
  </StrictMode>,
)
