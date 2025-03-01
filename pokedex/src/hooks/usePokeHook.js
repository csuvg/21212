import { useEffect, useState } from 'react'

const URL_DEFAULT = 'https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0'

const usePokeHook = () => {
    const [pokemons, setPokemons] = useState([])
    const [nextPage, setNextPage] = useState('')

    const getPokemons = async (url = URL_DEFAULT) => {
        const response = await fetch(url)
        const data = await response.json()
        const {next, results} = data

        const pokeList = await Promise.all(
            results.map(async pokemon => {
                const response = await fetch(pokemon.url)
                const specie = await response.json()

                return {
                    id: specie.id,
                    name: specie.name,
                    img: specie.sprites.other.dream_world.front_default
                }
            }, [])
        )   

        return {next, pokeList}
    }

    const loadMore = async () => {
        const {next, pokeList} = await getPokemons()
        setPokemons(pokeList)
        setNextPage(next)
    }

    const loadEvenMore = async () => {
        const {next, pokeList} = await getPokemons(nextPage)
        setPokemons(prev => [...prev, ...pokeList])
        setNextPage(next)
    } 

    useEffect(() => {
        loadMore()
    }, [])

    return {pokemons, loadEvenMore}
}

export default usePokeHook