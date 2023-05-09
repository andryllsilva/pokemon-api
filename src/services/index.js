
export const getPokemons = async (value) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=30&offset=${value}`)
    const dataResponse = await response.json()
    return await dataResponse.results
}

export const getPokeData = async (url) => {
    const response = await fetch(`${url}`)
    return await response.json()

}



export const fetchData = async (setPoke, value) => {
    const data = await getPokemons(value)
    const urlPokes = data.map((item) => item.url)
    const dataPokePromises = urlPokes.map(async (url) => {
        return await getPokeData(url);
    })
    const dataPoke = await Promise.all(dataPokePromises);
    setPoke(prevState => ({
        ...prevState,
        pokes: [...prevState.pokes, ...dataPoke]
    }));
}

export const capitalizeFirstLetter = (str) => {
    if (typeof str === 'undefined') {
        return '';
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}

