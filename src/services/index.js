
export const getPokemons =  () => {
    async function getData(){
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=30`)
        const dataResponse = await response.json()
        return await dataResponse.results
    }

    return getData()
}

export const getPokeData = (url) => {
    async function getPokeData(){
        const response = await fetch(`${url}`)
        return await response.json()
    }
    
    return getPokeData()
}

export const getMorePokes = (value) => {
    async function getPokes(){
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=30&offset=${value}`)
        const dataResponse = await response.json()
        return await dataResponse.results
    }
    return getMorePokes();
}



export const capitalizeFirstLetter = (str) => {
    if (typeof str === 'undefined') {
      return '';
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  }