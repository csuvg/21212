import './App.css'
import React from 'react'
import {Searcher, Pokemon} from '@components'

function App() {

  return (
    <section>
      <h1 className='title'>Pokédex Web</h1>
      <Searcher/>
      <Pokemon/>
    </section>
  )
}

export default App
