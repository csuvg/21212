import React from 'react'
import {styles} from './Pokemon.module.css'
import usePokeHook from '@hooks/usePokeHook'

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

    const {pokemons, loadEvenMore} = usePokeHook()

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
            <button className='poke-button' onClick={loadEvenMore}>Mostrar más</button>
        </section>
    )
}

export default Pokemon
