import { useEffect, useState } from "react";
import { capitalizeFirstLetter, fetchData} from "../../services";
import { Card, CardContainer, ImgPoke, Section, TagLink, PokeName, DivType, PokeType} from "./styled";
import MeuBotao from "../btn-show-more/btn-show-more";

export const PokeCards = () => {

    const [poke, setPoke] = useState({ pokes: [] })
    const [valueOff, setOffset] = useState(0)

    useEffect(() => {
        fetchData(setPoke, valueOff)
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
                <MeuBotao valueOff= {valueOff} setOffset={setOffset} setPoke={setPoke}/>
        </Section>
    )
}