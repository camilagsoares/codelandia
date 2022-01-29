import React from 'react'
import Home from './pages/Home'
import { GlobalStyles } from './styles/GlobalStyles'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './constants/themes'
import { ContainerBttnToggle } from './styles/styled'

const App = () => {

  const [theme, setTheme] = useState('light')

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />

    
      <Home />
      {/* <ContainerBttnToggle>
      <button onClick={() => themeToggler()}>Change theme</button>
      </ContainerBttnToggle> */}
    </ThemeProvider>
  )
}

export default App