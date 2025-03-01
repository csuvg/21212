import React from 'react'
import { useEffect, useState } from 'react'
import {styles} from './Pokemon.module.css'

const PokeCard = ({pokeId, pokeImg, pokeName}) => {
    return(
        <article key={pokeId} className='poke-card'>
            <img src={pokeImg} alt={pokeName} className='poke-img'/>
            <span>#{pokeId}</span>
            <h3>{pokeName}</h3>
        </article>
    )
}

const Pokemon = () => {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        const getPokemons = async () => {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=100&offset=0')
            const data = await response.json()
            const {results} = data

            const pokeList = results.map(async pokemon => {
                const response = await fetch(pokemon.url)
                const specie = await response.json()

                return {
                    id: specie.id,
                    name: specie.name,
                    img: specie.sprites.other.dream_world.front_default
                }
            }, [])

            setPokemons(await Promise.all(pokeList))
        }
        getPokemons()
    })

    return(
        <section className={styles}>
            {
                pokemons.map((pokemon) => (
                    <PokeCard
                        key={pokemon.id}
                        pokeId={pokemon.id}
                        pokeName={pokemon.name}
                        pokeImg={pokemon.img}
                    />
                ))
            }
        </section>
    )
}

export default Pokemon
