import styled from "styled-components";
import { switchColorTypes } from "../../services";
import { css } from "styled-components";
import Background from '../../assets/background.jpg'

export const Section = styled.section`
width: 100%;
height: 100%;
min-height: 100vh;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
${css`background-image: url(${Background});
background-reapet: norepeat;`}
`

export const DivCard = styled.div`
background-color: rgb(151, 13, 13);
min-width: 1000px;
display: grid;
grid-template-areas: 'PokeTitle PokeTitle'
                     'DivPoke DivInfo';
grid-template-columns: repeat(2,1fr);
padding: 60px;
border-radius: 50px;
box-shadow: 0px 1px 70px rgb(41, 16, 16);
border: 4px solid rgb(41, 16, 16);
position: relative;
gap: 30px;
`

export const PokeTitle = styled.h1`
grid-area: PokeTitle;
text-align: center;
margin-bottom: 40px;
color: #fff;
font-size: 60px;
`

export const ImgPoke = styled.img`
width: 400px;`

export const DivInfo = styled.div`
grid-area: DivInfo;
display: flex;
flex-direction: column;
background-color: white;
border-radius: 30px;
border: 3px solid black;
box-shadow: 0px 1px 5px rgb(99, 97, 97);`

export const UlMoves = styled.ul`
width: 100%;
height: 180px;
display: flex;
flex-direction: column;
align-items: center;
border-radius: 10px;
overflow-y: auto;
font-size: 17px;

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
`

export const UlAbilities = styled.ul`
margin-top: 20px;
display: flex;
flex-direction: column;
align-items: center;
font-size: 18px`

export const TitleMoves = styled.h2`
text-align: center;
margin-bottom: 10px;
font-size: 30px;
`

export const TitleAbilities = styled.h2`
text-align: center;
margin-top: 30px;
font-size: 30px;`

export const PokeType = styled.p`
${(props) =>   switchColorTypes(props)} 
text-align: center;
width: 100px;
border-radius: 5px;
padding: 7px;
font-size: 20px;
color: #fff;
`

export const DivTypes = styled.div`
max-width: 300px;
gap: 15px;
display: flex;
align-items: center;
justify-content: center;`

export const DivPoke = styled.div`
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
border-top: 3px solid black;
margin-top: 20px;`

export const PokeballImg = styled.img`
position: absolute;
width: 280px;
top: -100px;
left: -90px;
transform: rotate(-30deg)`