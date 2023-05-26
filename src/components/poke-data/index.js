import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemon, capitalizeFirstLetter } from "../../services";
import { DivCard, Section, DivInfo, UlInfo, UlAbilities, PokeType, DivTypes, DivPoke, PokeTitle, DivAbilities, PokeballImg, StyledLink } from "./styled";
import Pokeball from '../../assets/pokeball.png'
import { FaArrowLeft } from "react-icons/fa";
import { ThemeContext} from "../theme-context/theme-context";


export const PokeData = () => {
    const [poke, setPoke] = useState({})
    const { id } = useParams()

    const { theme } = useContext(ThemeContext)

    useEffect(() => {
        async function fetchData() {
            const pokeData = await getPokemon(id)
            setPoke(pokeData)
        }
        fetchData()
    }, [])


    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

    return (
        <Section style={{backgroundImage: `url(${theme.backgroundImage})`}}>
            <DivCard>
                <StyledLink to={'/'}>
                    <FaArrowLeft style={{ fontSize: '30px', color: 'black' }} />
                </StyledLink>
                <PokeballImg src={Pokeball}></PokeballImg>
                <PokeTitle>{capitalizeFirstLetter(poke.name)}</PokeTitle>
                <DivPoke>
                    <DivTypes>
                        {poke.types?.map((item, typeIndex) => {
                            return <PokeType key={typeIndex} id={item.type.name}>{capitalizeFirstLetter(item.type.name.toString())}</PokeType>
                        })}
                    </DivTypes>
                    <div>
                        <img alt={poke.name} style={{ width: '400px' }} src={imgUrl}></img>
                    </div>

                </DivPoke>
                <DivInfo>
                    <h2>Moves</h2>
                    <UlInfo>
                        {poke.moves?.map((item, index) => {
                            return <li key={index}>{item.move.name}</li>
                        })}
                    </UlInfo>
                    <DivAbilities>
                        <h2>Abilities</h2>
                        <UlAbilities>
                            {poke.abilities?.map((item, index) => {
                                return <li key={index}>{item.ability.name}</li>
                            })}
                        </UlAbilities>
                    </DivAbilities>
                </DivInfo>
            </DivCard>
        </Section>
    )
}