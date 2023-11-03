import { useState } from 'react'

import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import CardItem from './components/CardItem/CardItem'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavBar/>
     <ItemListContainer greeting='Saludos desde el Home, Bienvenidos!'/>
     <div className='card-container'>
     <CardItem></CardItem>
     <CardItem></CardItem>
     <CardItem></CardItem>
     <CardItem></CardItem>
     </div>
    </>
  )
}

export default App
