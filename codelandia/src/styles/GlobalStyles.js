import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
}

body{
    background-color: ${props => props.theme.body};
}

&.accent {
    background-color: ${props => props.theme.accent};
    color: ${props => props.theme.text};
    height: 430px;
    }

`