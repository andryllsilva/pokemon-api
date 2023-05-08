import { useEffect, useState } from "react";
import { getPokemons, getPokeData, capitalizeFirstLetter } from "../../services";
import { Card, CardContainer, ImgPoke, Section, TagLink, PokeName, DivType, PokeType} from "./styled";
import MeuBotao from "../btn-show-more/btn-show-more";

export const PokeCards = () => {

    const [poke, setPoke] = useState({ pokes: [] })
    const [valueOff, setOffset] = useState(30)

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

    

    return (
        <Section>
            <CardContainer>
                {poke.pokes.map((item, index) => {
                    return (
                        <Card key={index}>
                            <TagLink>
                                <ImgPoke src={item.sprites.other['official-artwork'].front_default}></ImgPoke>
                                <PokeName>{capitalizeFirstLetter(item.name.toString())}</PokeName>
                                <DivType>
                                    {item.types.map((item, typeIndex) => { return <PokeType key={typeIndex} id={item.type.name}>{capitalizeFirstLetter(item.type.name.toString())}</PokeType>})}
                                </DivType>
                            </TagLink>
                        </Card>
                    )
                })}
            </CardContainer>
                <MeuBotao />
        </Section>
    )
}