import { useEffect, useState } from "react";
import { getPokemons, getPokeData } from "../../services";
import { Card, CardContainer, ImgPoke, Section, TagLink, PokeName, DivType, PokeType} from "./styled";

export const PokeCards = () => {

    const [poke, setPoke] = useState({
        pokes: [],
    })

    useEffect(() => {
        const fetchData = async () => {
            const data = await getPokemons()
            const urlPokes = data.map((item) => item.url)
            const dataPokePromises = urlPokes.map(async (url) => {
                return await getPokeData(url);
            })
            const dataPoke = await Promise.all(dataPokePromises);
            setPoke({
                pokes: dataPoke
            })
        }
        fetchData()
    }, [])


    console.log(poke.types)

    return (
        <Section>
            <CardContainer>
                {poke.pokes.map((item) => {
                    return (
                        <Card>
                            <TagLink>
                                <ImgPoke src={item.sprites.other['official-artwork'].front_default}></ImgPoke>
                                <PokeName>{item.name.toUpperCase()}</PokeName>
                                <DivType>
                                    {item.types.map((item) => { return <PokeType id={item.type.name}>{item.type.name}</PokeType>})}
                                </DivType>
                            </TagLink>
                        </Card>
                    )
                })}
            </CardContainer>
        </Section>
    )
}