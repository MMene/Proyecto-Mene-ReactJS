import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ContainerCardItem from './components/CardItem/ContainerCardItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  return (
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route>
          </Route>
        </Routes>
      </BrowserRouter>
    )
}

export default App
