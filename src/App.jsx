import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ContainerCardItem from './components/CardItem/ContainerCardItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <ItemListContainer/>
      <Routes>
        <Route path="/" element={<ContainerCardItem />} />
        <Route path="/item/:id" element={<ContainerCardItem />} />
        <Route path="/category/:idCategory" element={<ContainerCardItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


