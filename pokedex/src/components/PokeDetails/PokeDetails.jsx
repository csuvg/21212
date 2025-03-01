import React from 'react'
import styles from './PokeDetails.module.css'

const PokeDetails = ({showDetails, pokemon, toClose}) => {
    if (!showDetails || !pokemon || Object.keys(pokemon).length === 0) return null

    return(
        <section className={styles.modalContainer} onClick={toClose} style={{display: showDetails ? 'grid' : 'none'}} >
            <article className={styles.modalBody}>
                <img src={pokemon.img} alt={pokemon.name}/>
                <h2>{pokemon.name} #{pokemon.id}</h2>
                <section className={styles.row}>
                    <h3>Types:</h3>
                    <section className={styles.types}>
                        {
                            pokemon.types.map((type, i) => (
                                <article className={styles.article} key={i}>
                                    <h4 className={styles.h4}>{type}</h4>
                                </article>
                            ))
                        }
                    </section>
                    <h3>Stats:</h3>
                    <section className={styles.stats}>
                        {
                            pokemon.stats.map((stat, i) => (
                                <article className={styles.article} key={i}>
                                    <h4 className={styles.h4}>{stat.name}</h4>
                                    <span>{stat.value}</span>
                                </article>
                            ))
                        }
                    </section>
                </section>
            </article>
        </section>
    )
}

export default PokeDetails