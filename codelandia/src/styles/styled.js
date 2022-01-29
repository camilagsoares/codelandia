import styled from 'styled-components'

export const Header = styled.div`
height: 250px;
width: 100%;
background-image: linear-gradient(to right, #574AE8, #3EA1DB);
display: flex;
justify-content: space-around; 
 button{
    font-family: 'Lexend Deca';
    font-size: 24px;
    background-color: transparent;
    border: none;
    color: white;
    cursor: pointer;
    font-weight: 300;
    margin-top: -8vw;
:hover{
    color: #133954;
}
}

@media screen and (max-width: 800px){
    button{
        margin: -100px auto 0;
    }
}

`

export const Input = styled.div`
display: flex;
align-items: center;
justify-content: center;

input{
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
position: relative;
top: -5vw;

::placeholder{
font-family: 'Lexend Deca';
color: #DDDFDE;
font-weight: 300;
font-size: 16px;
text-indent: 50px;
}
}

@media screen and (max-width: 912px){
    input{
        width: 90%; 
        margin: -50px auto 0;
    }
}
`

export const CardWhite = styled.div`
display: flex;
align-items: center;
justify-content: center;
div{ 
background-color: white;
box-shadow:  1px 1px 1px 1px #DDDFDE;
width: 900px;
height: 195px;
margin: 10px;
border-radius: 9px;
position: relative;
top: 3vw;
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
}}

@media screen and (max-width: 600px){

    div{
        height: 394px;
    }
    p{
        font-size: 1.2rem;
    }

    p{
        &.description{
        font-size: 5.9rem;
    }
    }
}


@media screen and (max-width: 280px) and (max-width: 653px){
  div{
     height: 580px;
    
  } 
}
`

export const Pagination = styled.div`
display: flex;
align-items: center;
justify-content: center;
.paginationBttns{
    position:relative;
    top: 8vw;     
    margin: 10px;
    width: 80%;
    height: 40px;
    list-style: none;
    display: flex;
    justify-content: center;
    font-family: 'Lexend Deca';
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

