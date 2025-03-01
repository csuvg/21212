import React, {useState} from 'react'
import {styles} from './Pokemon.module.css'
import usePokeHook from '@hooks/usePokeHook'
import Searcher from '@components/Searcher/Searcher'
import PokeDetails from '@components/PokeDetails/PokeDetails'

const PokeCard = ({pokeId, pokeImg, pokeName, handleShowDetails}) => {
    return(
        <article key={pokeId} className='poke-card' onClick={handleShowDetails}>
            <img src={pokeImg} alt={pokeName} className='poke-img'/>
            <span>#{pokeId}</span>
            <h3>{pokeName}</h3>
        </article>
    )
}

const Pokemon = () => {

    const {pokemons, loadEvenMore, searching} = usePokeHook()
    const [showDetails, setShowDetails] = useState({showDetails: false, pokemon: {}})
    const [search, setSearch] = useState('')
    const handleShowDetails = (pokemon) => setShowDetails({showDetails: true, pokemon})
    const handleCloseDetails = () => setShowDetails({showDetails: false, pokemon: {}})
    const searchPokemon = async (e) => {
        e.preventDefault()
        if(!search) return
        const pokemon = await searching(search)

        setShowDetails({showDetails: true, pokemon})
    }

    return(
        <>
            <PokeDetails {...showDetails} toClose = {handleCloseDetails}/>
            <Searcher search={search} setSearch={setSearch} searchPokemon={searchPokemon}/>
            <section className={styles}>
                {
                    pokemons.map((pokemon) => (
                        <PokeCard
                            key={pokemon.id}
                            pokeId={pokemon.id}
                            pokeName={pokemon.name}
                            pokeImg={pokemon.img}
                            handleShowDetails={() => handleShowDetails(pokemon)}
                        />
                    ))
                }
                <button className='poke-button' onClick={loadEvenMore}>Mostrar más</button>
            </section>
        </>
        
    )
}

export default Pokemon
