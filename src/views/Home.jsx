import React, { useState, useEffect } from 'react'

import Button from '../components/Button/Button'

import API from '../services/API'

export default function Home() {
  const [characters, setCharacters] = useState([])
    useEffect(() => {
      async function loadCharacters() {
        const response = await API.get('/')
        //console.log(response.data)
        setCharacters(response.data)
    }
    loadCharacters()
  }, [])
 
  return (
    <div>
      <h1>Personagens de Rick and Morty:</h1>
      <ul>
        {console.log(characters)}
        {characters?.results?.map(character => (
          <li key={character.id}>
            <h2>
              {character.name}
            </h2>
            <p>
              {character.status}
            </p>
          </li>
        ))}
      </ul>
      <Button text="Carregar"/>
    </div>
  )
}