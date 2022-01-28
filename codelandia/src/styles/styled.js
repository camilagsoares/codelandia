import styled from 'styled-components'

export const Header = styled.div`
height: 250px;
width: 100%;
background-image: linear-gradient(to right, #574AE8, #3EA1DB);
/* display: flex;
justify-content: space-between; */
/* button{
    font-family: 'Lexend Deca';
    font-size: 24px;
    background-color: transparent;
    border: none;
    color: white;
    cursor: pointer;
    font-weight: 300;
:hover{
    color: pink
}
} */
`

export const CardWhite = styled.div`
div{ 
background-color: white;
box-shadow:  1px 1px 1px 1px #DDDFDE;
width: 900px;
height: 195px;
margin: 10px;
border-radius: 9px;
position: relative;
top: 5vw;
font-family: 'Lexend Deca';
color: #1A202C;
font-size: 26px;

p{
    margin: 15px;

&.description{
    font-size: 18px;
    color: #717171;
    font-weight: 300;
}

::selection{
    background-color: #448EDE;
    color: white;
}
}

}
display: flex;
align-items: center;
justify-content: center;
`