import React, {useState} from 'react'
import {styles} from './Pokemon.module.css'
import usePokeHook from '@hooks/usePokeHook'
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

    const {pokemons, loadEvenMore} = usePokeHook()
    const [showDetails, setShowDetails] = useState({showDetails: false, pokemon: {}})
    const handleShowDetails = (pokemon) => setShowDetails({showDetails: true, pokemon})
    const handleCloseDetails = () => setShowDetails({showDetails: false, pokemon: {}})
    
    return(
        <>
            <PokeDetails {...showDetails} toClose = {handleCloseDetails}/>
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
