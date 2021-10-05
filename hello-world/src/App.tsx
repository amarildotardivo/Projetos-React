import{ useState } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

const App = () => {
  const [name, setName] = useState('Amarildo')
  const [age, setAge] = useState(90)  
  const [bg, setBg] = useState('#ff0000')

  const [list, setList] = useState([
    "O rato roeu a roupa do rei de roma.",
    "Aqui vai uma frase poética.",
    "Estou sem idéia."
  ])

  const handle20 = () => {
    setAge(20)
    setBg("#00ff00")
    setName("Jovem Amarildo")
  }
  const handle90 = () => {
    setAge(90)
    setBg("#ff0000")
    setName("Vovô Amarildo")
  }

  return (
    <div style= { {background: bg} }>
      <Header name={name} age={age}/>
      {age === 90 && 
        <button onClick={handle20}> Tenho 20 Anos </button>
      }

      {age === 20 && 
        <button onClick={handle90}> Tenho 90 Anos </button>
      }
      
      <hr />
      
      <ul>
        {list.map((frase, index)=>(
          <li key={index}> {frase} </li>
        ))}
      </ul>

      <Footer />
      
    </div>
  )
}

export default App;