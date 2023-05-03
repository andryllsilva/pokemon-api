import { useEffect, useState } from "react";
import { HeaderTag, ImgLogo, UlHeader, HeaderContainer } from "./styled"
import Logo from "../../assets/poke-logo.png"

export const Header = () => {

    return (
        <HeaderTag>
            <HeaderContainer>
                <ImgLogo src={Logo} />
                <nav>
                    <UlHeader>
                        <li><a><p>PokeAPI</p></a></li>
                        <li><input type="checkbox"></input></li>
                    </UlHeader>
                </nav>
            </HeaderContainer>
        </HeaderTag>
    )
}