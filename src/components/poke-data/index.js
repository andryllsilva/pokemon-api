import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemon, capitalizeFirstLetter } from "../../services";
import { DivCard, ImgPoke, Section, DivInfo, UlMoves, UlAbilities, TitleMoves, TitleAbilities, PokeType, DivTypes, DivPoke, PokeTitle, DivAbilities, PokeballImg } from "./styled";
import Pokeball from '../../assets/pokeball.png'



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

    console.log(poke.moves)

    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

    return (
        <Section>
            <DivCard>
                <PokeballImg src={Pokeball}></PokeballImg>
                <PokeTitle>{capitalizeFirstLetter(poke.name)}</PokeTitle>
                <DivPoke>
                    <DivTypes>
                        {poke.types?.map((item, typeIndex) => {
                            return <PokeType key={typeIndex} id={item.type.name}>{capitalizeFirstLetter(item.type.name.toString())}</PokeType>
                        })}
                    </DivTypes>
                    <ImgPoke src={imgUrl}></ImgPoke>
                </DivPoke>
                <DivInfo>
                    <div>
                        <TitleMoves>Moves</TitleMoves>
                        <UlMoves>
                            {poke.moves?.map((item, index) => {
                                return <li key={index}>{item.move.name}</li>
                            })}
                        </UlMoves>
                    </div>
                    <DivAbilities>
                        <TitleAbilities>Abilities</TitleAbilities>
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