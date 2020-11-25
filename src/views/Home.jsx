import React, { useState, useEffect } from 'react'


export default function Home() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    async function fetchData(){
      const response = await fetch('https://rickandmortyapi.com/api/character/')
      const data = await response.json()

    setCharacters(data)
    }
    fetchData()
  }, [setCharacters])
 
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
    </div>
  )
}