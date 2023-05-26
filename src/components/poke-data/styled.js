import styled from "styled-components";
import { switchColorTypes } from "../../services";
import BackgroundPoke from '../../assets/pokedex.png'
import { Link } from 'react-router-dom';

export const Section = styled.section`
width: 100%;
height: 100%;
min-height: 100vh;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background-size: cover;
background-reapet: norepeat;
`

export const DivCard = styled.div`
background-color: rgb(151, 13, 13);
max-height: 750px;
min-width: 1200px;
display: grid;
grid-template-areas: 'PokeTitle PokeTitle'
                     'DivPoke DivInfo';
grid-template-columns: repeat(2,1fr);
padding: 60px;
border-radius: 50px;
box-shadow: 4px 2px 4px 4px rgb(1, 1, 1);
border: 4px solid black;
position: relative;
gap: 30px;
`

export const PokeTitle = styled.h1`
text-shadow: 2px 2px 2px rgba(5,5,0,0.5);
grid-area: PokeTitle;
text-align: center;
margin-bottom: 40px;
color: #fff;
font-size: 60px;
`

export const DivInfo = styled.div`
h2{
  font-size: 30px;
  text-align: center;
  margin: 10px 0 10px 0
}

grid-area: DivInfo;
display: flex;
flex-direction: column;
justify-content: space-between;
background-color: #f2f2f2;
border-radius: 30px;
border: 3px solid black;
box-shadow: 0px 1px 5px rgb(99, 97, 97);`

export const UlInfo = styled.ul`
position: relative;
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
height: max-content;
max-height: 260px;
overflow-y: auto;
text-align: center;

/* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888; 
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }


}
`

export const UlAbilities = styled.ul`
margin-top: 20px;
display: flex;
flex-direction: column;
align-items: center;
font-size: 18px`

export const PokeType = styled.p`
${(props) =>   switchColorTypes(props)} 
text-align: center;
width: 100px;
border-radius: 5px;
padding: 7px;
font-size: 20px;
color: #fff;
box-shadow: 0px 1px 5px rgb(99, 97, 97);
`

export const DivTypes = styled.div`
max-width: 300px;
gap: 15px;
display: flex;
align-items: center;
justify-content: center;`

export const DivPoke = styled.div`
background-image: url(${BackgroundPoke});
background-size: cover;
padding: 20px;
grid-area: DivPoke;
display: flex;
flex-direction: column;
align-items: center;
background-color: #fff;
border-radius: 30px;
border: 3px solid black;
box-shadow: 0px 1px 5px rgb(99, 97, 97);`

export const DivAbilities = styled.div`
min-height: 200px;
margin-bottom: 20px;
border-top: 3px solid black;
`

export const PokeballImg = styled.img`
position: absolute;
width: 220px;
top: -60px;
right: -60px;
transform: rotate(30deg)`

export const StyledLink = styled(Link)`
background-color: #f2f2f2;
width: 50px;
height: 40px;
display: flex;
align-items: center;
justify-content: center;
border: 2px solid black;
border-radius: 8px;
position: absolute;
top: 50px;
left: 50px;
box-shadow: 2px 2px 0 1px rgb(1, 1, 1);
transition: box-shadow 0.3s ease;

&:active{
  box-shadow: 0 0 0 0 rgb(1, 1, 1), inset 2px 2px 0 1px rgb(1, 1, 1);
  transform: translate(2px , 2px);
}

&:hover{
  svg{
    opacity: 0.5;
  }
}
`;