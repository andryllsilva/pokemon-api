import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemon, capitalizeFirstLetter } from "../../services";
import { DivCard, ImgPoke, Section, DivInfo, DivUlInfo, UlAbilities, TitleMoves, TitleAbilities, PokeType, DivTypes, DivPoke, PokeTitle, DivAbilities, PokeballImg, DivUl, StyledLink } from "./styled";
import Pokeball from '../../assets/pokeball.png'
import { FaArrowLeft } from "react-icons/fa";


export const PokeData = () => {
    const [poke, setPoke] = useState({})
    const { id } = useParams()

    useEffect(() => {
        async function fetchData() {
            const pokeData = await getPokemon(id)
            setPoke(pokeData)
        }
        fetchData()
    }, [])


    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

    return (
        <Section>
            <DivCard>
                <StyledLink to={'/'}>
                    <FaArrowLeft style={{fontSize: '30px', color: 'black'}}/>
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
                        <img style={{width: '400px'}} src={imgUrl}></img>
                    </div>

                </DivPoke>
                <DivInfo>
                    <h2>Moves</h2>
                    <DivUlInfo>
                        <ul>
                            {poke.moves?.map((item, index) => {
                                return <li key={index}>{item.move.name}</li>
                            })}
                        </ul>
                    </DivUlInfo>
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