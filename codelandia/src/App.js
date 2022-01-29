import React from 'react'
import Home from './pages/Home'
import { GlobalStyles } from './styles/GlobalStyles'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './constants/themes'

const App = () => {

  const [theme, setTheme] = useState('light')

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <button onClick={() => themeToggler()}>Change theme</button>
      <Home />
    </ThemeProvider>
  )
}

export default App