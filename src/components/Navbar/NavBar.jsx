import CartWidget from "../CartWidget/CartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from "react-router-dom";
import ItemListContainer from "../ItemListContainer/ItemListContainer";


function NavBar (){
    return (
        <>
       <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Unika Indumentaria</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink className={({isActive}) => isActive ? 'btn btn-primary' : 'btn' } to="/">Inicio</NavLink>
            <NavLink className={({isActive}) => isActive ? 'btn btn-primary' : 'btn' } to="/category/remera">Remeras</NavLink>
            <NavLink className={({isActive}) => isActive ? 'btn btn-primary' : 'btn' } to="/category/camperas">Camperas</NavLink>
            <NavLink className={({isActive}) => isActive ? 'btn btn-primary' : 'btn' } to="/category/medias">Medias</NavLink>
            <NavLink className={({isActive}) => isActive ? 'btn btn-primary' : 'btn' } to="/category/shorts">Shorts</NavLink>
            <NavLink className={({isActive}) => isActive ? 'btn btn-primary' : 'btn' } to="/category/pantalones">Pantalones</NavLink>
          </Nav>
          <Nav>
            <CartWidget />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    )
}

export default NavBar;