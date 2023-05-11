import styled from "styled-components";

export const BtnShow = styled.button`
background-color: red;
width:250px;
height: 50px;
color: white;
font-size: 17px;
border: none;
border-radius: 50px;
transition: 0.3s;
cursor: pointer;
margin-bottom: 4%;
box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);

&:hover{
    background-color: #f87373;
}
`