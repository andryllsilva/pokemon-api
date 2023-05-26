import styled, {css} from "styled-components"


export const Ball = styled.div`
background-color: black;
position: absolute;
border-radius: 50%;
top: 2px;
left: 2px;
height: 22px;
width: 22px;
transform: translateX(0);
transition: transform 0.2s linear;

${props => props.active && css`
transform: translateX(34px);`}
`;




export const SwitchTheme = styled.div`
display: flex;
background-color: #f1f1f1;
border-radius: 50px;
cursor: pointer;
align-items: center;
justify-content: space-between;
gap: 5px;
padding: 5px;
position: relative;
height: 16px;
width: 50px;
transform: scale(1.2);

&:checked .ball{
  transform: translateX(24px);
}
`

export const DivSwitch = styled.div`
opacity: 1;

&:checked{
  .ball{
    transform: translateX(34px);
  }
}
`