import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    const getPokemons = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon')
      const data = await response.json()
      const {results} = data

      const newPokemons = results.map(async pokemon => {
        const response = await fetch(pokemon.url)
        const specie = await response.json()

        return {
          id: specie.id,
          name: specie.name,
          img: specie.sprites.other.dream_world.front_default
        }
      }, [])

      setPokemons(await Promise.all(newPokemons))
    }
    getPokemons()
  })

  return (
    <section>
      <h1>Pokedex Web</h1>
      {
        pokemons.map((pokemon, id) => (
          <article key={id}>
            <img src={pokemon.img} alt={pokemon.name} />
            <span>{pokemon.id}</span>
            <h3>{pokemon.name}</h3>
          </article>
        ))
      }
    </section>
  )
}

export default App
