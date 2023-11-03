import { useState } from 'react'

import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

import ContainerCardItem from './components/CardItem/ContainerCardItem'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavBar/>
     <ItemListContainer greeting='Saludos desde el Home, Bienvenidos!'/>
     <div className='card-container'>
      <ContainerCardItem></ContainerCardItem>
      <ContainerCardItem></ContainerCardItem>
      <ContainerCardItem></ContainerCardItem>
      <ContainerCardItem></ContainerCardItem>
     </div>
    </>
  )
}

export default App
