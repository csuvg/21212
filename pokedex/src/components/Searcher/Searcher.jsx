import React from 'react'
import styles  from './Searcher.module.css'

const Searcher = ({search, setSearch, searchPokemon}) => {
    return(
        <form className = {styles} onSubmit={searchPokemon}>
            <input className = 'search-input' 
                type="text" 
                placeholder='Busca tu Pokémon por su número o nombre' 
                value={search} 
                onChange={(e) => setSearch(e.target.value)}
            />
            <button className='search-button'>
                Buscar
            </button>
        </form>
    )
}
export default Searcher