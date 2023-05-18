import { useEffect, useState } from "react";
import { capitalizeFirstLetter, fetchData } from "../../services";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";
import { LiCard, CardContainer, ImgPoke, Section, TagLink, PokeName, DivType, PokeType } from "./styled";
import MeuBotao from "../buttons/btn-show-more/btn-show-more";

export const PokeCards = () => {

    const [poke, setPoke] = useState({ pokes: [] })
    const [valueOff, setOffset] = useState(0)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetchData(setPoke, valueOff, setLoading, poke)
    }, [])


    return (
        <Section>
            <CardContainer>
                {poke.pokes.map((item, index) => {
                    return (
                        <Link to={`pokemon/${item.id}`}>
                            <LiCard key={index}>
                                <TagLink>
                                    <ImgPoke src={item.sprites.other['official-artwork'].front_default}></ImgPoke>
                                    <PokeName>{capitalizeFirstLetter(item.name.toString())}</PokeName>
                                    <DivType>
                                        {item.types.map((item, typeIndex) => { return <PokeType key={typeIndex} id={item.type.name}>{capitalizeFirstLetter(item.type.name.toString())}</PokeType> })}
                                    </DivType>
                                </TagLink>
                            </LiCard>
                        </Link> 
                    )
                })}
            </CardContainer>
            {
                isLoading ? (
                    <div style={{ marginTop: '40px', marginBottom: '40px' }}><ClipLoader /></div>
                ) :
                    <MeuBotao valueOff={valueOff} setOffset={setOffset} setPoke={setPoke} setLoad={setLoading} poke={poke} />
            }
        </Section>
    )
}