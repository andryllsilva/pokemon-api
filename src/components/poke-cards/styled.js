import styled, { css } from "styled-components";

export const Card = styled.li`
max-width: 250px;
max-height: 340px;
background-color: #F2F2F2;
padding: 10px;
border-radius: 10px;
transition: 0.4s;
box-shadow: 0px 1px 5px rgb(157, 156, 156);

&:hover{
    transform: scale(110%);
    cursor: pointer;
}
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
justify-content: center;
flex-direction: column;
align-items: center;`

export const CardContainer = styled.ul`
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
${(props) => 
    props.id == 'poison' ? css`background: #b97fc9;` : false ||
    props.id == 'grass' ? css`background: #9bcc50;`: false ||
    props.id == 'fire' ? css`background: #fd7d24;`: false ||
    props.id == 'ground' ? css`background: linear-gradient(180deg, #f7de3f 50%, #ab9842 50%);` : false ||
    props.id == 'flying' ? css`background: linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);` : false ||
    props.id == 'water' ? css`background: #6890f0;` : false ||
    props.id == 'bug' ? css`background: #a8b820;` : false ||
    props.id == 'normal' ? css`background: #3dc7ef;` : false ||
    props.id == 'electric' ? css`background: #f8d030;` : false


} 

border-radius: 5px;
padding: 7px;
font-size: 20px;
`