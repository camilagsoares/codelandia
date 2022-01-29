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

export const Input = styled.div`
display: flex;
align-items: center;
justify-content: center;
position: relative;
top: 10vw;
input{
margin-left: 2vw;
width: 900px;
height: 50px;
background: rgba(255, 255, 255, 0.2);
border: none;
color: white;
font-family: 'Lexend Deca';
font-size: 16px;
text-indent: 50px;
font-weight: 300;
outline: none;
border-radius: 4px;

::placeholder{
font-family: 'Lexend Deca';
color: #DDDFDE;
font-weight: 300;
font-size: 16px;
text-indent: 50px;
}
}
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

export const Pagination = styled.div`
display: flex;
align-items: center;
justify-content: center;
.paginationBttns{
    position:relative; //tirar
    top: 8vw;     //tirar
    margin: 10px;
    width: 80%;
    height: 40px;
    list-style: none;
    display: flex;
    justify-content: center;
}

.paginationBttns a{
   padding: 10px;
   margin: 8px;
   border-radius: 5px;
   border: 1px solid #5356E6;
   color: #5356E6;
   cursor: pointer;
}


.paginationBttns a:hover{
  color: white;
  background-color: #5356E6;
}

.paginationActive a{
    color: white;
  background-color: #5356E6;
}

`