import { css } from "styled-components";

export const getPokemons = async (value) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=30&offset=${value}`)
    const dataResponse = await response.json()
    return await dataResponse.results
}

export const getPokeData = async (url) => {
    const response = await fetch(`${url}`)
    return await response.json()
}

export const getPokemon = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    return await response.json()
}

export const fetchData = async (setPoke, value, setLoad, poke) => {
    const data = await getPokemons(value)
    const urlPokes = data.map((item) => item.url)
    const dataPokePromises = urlPokes.map(async (url) => {
        return await getPokeData(url);
    })
    const dataPoke = await Promise.all(dataPokePromises);
    setPoke({
        pokes: [...poke.pokes, ...dataPoke]
    });
    setLoad(false)
}

export const capitalizeFirstLetter = (str) => {
    if (typeof str === 'undefined') {
        return '';
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}


export const switchColorTypes = (props) => {
    return props.id === 'poison' ? css`background: #b97fc9;` :
      props.id === 'grass' ? css`background: #9bcc50;` :
      props.id === 'fire' ? css`background: #fd7d24;` :
      props.id === 'ground' ? css`background: #e0c068;` :
      props.id === 'flying' ? css`background: #a890f0;` :
      props.id === 'water' ? css`background: #6890f0;` :
      props.id === 'bug' ? css`background: #a8b820;` :
      props.id === 'normal' ? css`background: #cece8e;` :
      props.id === 'electric' ? css`background: #f8d030;` :
      props.id === 'steel' ? css`background: #a4acaf;` :
      props.id === 'fairy' ? css`background: #fdb9e9;` :
      props.id === 'ice' ? css`background: #3dc7ef;` :
      props.id === 'psychic' ? css`background: #f366b9;` :
      props.id === 'fighting' ? css`background: #c02038;` :
      props.id === 'ghost' ? css`background: #705898;` :
      props.id === 'rock' ? css`background: #ab9842;` :
      props.id === 'dragon' ? css`background: #7038f8;` :
      props.id === 'dark' ? css`background: #705848;` : '';
  };
