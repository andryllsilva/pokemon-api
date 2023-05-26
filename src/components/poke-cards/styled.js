import styled from "styled-components";
import { switchColorTypes } from "../../services";

export const LiCard = styled.li`
max-width: 250px;
max-height: 320px;
background-color: #F2F2F2;
padding: 15px 15px 23px 15px;
border-radius: 10px;
transition: 0.4s;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;



&:hover{
    transform: scale(107%);
    cursor: pointer;
    
    img{
        filter: drop-shadow(15px 10px 5px rgba(0,0,0,.5));
        transition: 0.4s ease-in-out;
    }      
}
`


export const Section = styled.section`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;`

export const CardContainer = styled.ul`
a{color: black;}
display: grid;
grid-template-columns: repeat(6,1fr);
padding: 50px;
gap: 25px;
`
export const ImgPoke = styled.img`
width: 70%;
`


export const PokeName = styled.p`
font-size: 20px;
margin-top: 20px;
margin-bottom: 35px;
`
export const DivType = styled.div`
display: flex;
gap: 7px;
`
export const PokeType = styled.p`
${(props) => switchColorTypes(props)} 

border-radius: 5px;
padding: 7px;
font-size: 20px;
color: #fff;
`