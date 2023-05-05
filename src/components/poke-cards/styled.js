import styled from "styled-components";

export const Card = styled.li`
width: 240px;
height: 300px;
background-color: gray;
padding: 10px
`

export const TagLink = styled.a`
display: flex;
align-items: center;
justify-content: center;
padding: 10px;
flex-direction: column;
`

export const Section = styled.section`
display: flex;
justify-content: center;`

export const CardContainer = styled.ul`
display: grid;
grid-template-columns: repeat(6,1fr);
padding: 50px;
gap: 20px;
`
export const ImgPoke = styled.img`
width: 60%`

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
border-radius: 5px;
padding: 7px;
font-size: 20px;
background-color: red;`