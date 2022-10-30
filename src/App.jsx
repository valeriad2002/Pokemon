import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [pokemon, setPokemon] = useState({})
  const [isDecimeter, setIsdecimeter] = useState(true)
  
  useEffect(() => {
    chagePokemon()

  }, [])
  console.log(pokemon);
  const chagePokemon = () => {
    const randomId = Math.floor(Math.random() * 600) + 1;
    axios.get(`https://pokeapi.co/api/v2/pokemon/${randomId}/`)
      .then((res) => setPokemon(res.data))
  }
  



  return (
    <div className="App">
      <div className='card'>
      

        <h2>{pokemon.name}</h2>
        <img src={pokemon.sprites?.other.dream_world.front_default} alt="" />

        <ul>
          <li>
            weight: {isDecimeter ? pokemon.weight : pokemon.weight / 10} {isDecimeter ?
              "Hectograms" : "Kilograms"}

          </li>
          <li>
            height:  {isDecimeter ? pokemon.height : pokemon.height / 10} {isDecimeter ? "Decimetros" : "Metros"}

          </li>
          <li>
            type : {pokemon.types?.[0].type?.name}
          </li>
        </ul>


        <p>
          Ability: {pokemon.abilities?.[0].ability.name}
        </p>
        <button onClick={() => setIsdecimeter(!isDecimeter)}>
          Change meight</button>
        
      </div>
      <br />
      <button onClick={chagePokemon}>Change pokemon</button>

    </div>
  )
}

export default App
