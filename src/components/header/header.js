import { CheckTheme } from "../buttons/btn-theme/btn-theme"
import { HeaderTag, ImgLogo, UlHeader, HeaderContainer } from "./styled"
import Logo from "../../assets/poke-logo.png"
import { useContext } from "react"
import { ThemeContext } from "../theme-context/theme-context"

export const Header = () => {

    const { theme } = useContext(ThemeContext)
    
    return (
        <HeaderTag style={{background: theme.background}}>
            <HeaderContainer>
                <ImgLogo src={Logo} />
                <nav>
                    <UlHeader>
                        <li><a><p>PokeAPI</p></a></li>
                        <CheckTheme/>
                    </UlHeader>
                </nav>
            </HeaderContainer>
        </HeaderTag>
    )
}