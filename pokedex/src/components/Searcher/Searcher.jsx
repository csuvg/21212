import React from 'react'
import styles  from './Searcher.module.css'

const Searcher = () => {
    return(
        <section className = {styles}>
            <input className = 'search-input' type="text" placeholder='Busca tu Pokémon por su número o nombre' />
            <button className='search-button'>
                Buscar
            </button>
        </section>
    )
}
export default Searcher