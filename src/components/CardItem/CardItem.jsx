import ButtonDetails from './ButtonDetails';
import ButtonAddCart from './ButtonAddCart';
import Description from './Description';
import Card from 'react-bootstrap/Card';
import Image from './Image';



function CardItem(props) {
  return (
    <Card className ="card">
      <Card.Img variant="top" src={Image}/>
      <Card.Body>
        <Card.Title>{Description.title="Campera"}</Card.Title>
        <Card.Text>{`Precio: $${props.price}`}</Card.Text>
        <Card.Text>{`Cantidad: ${props.cant}`}</Card.Text>
        <ButtonDetails></ButtonDetails>
        <ButtonAddCart></ButtonAddCart>
      </Card.Body>
    </Card>
  );
}

export default CardItem;