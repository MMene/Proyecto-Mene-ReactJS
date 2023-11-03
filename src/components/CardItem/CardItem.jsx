import Button from 'react-bootstrap/Button';
import ButtonDetails from './ButtonDetails';
import ButtonAddCart from './ButtonAddCart';
import Description from './Description';
import Card from 'react-bootstrap/Card';
// import Image from './Image';
import ImgCampera from '../../assets/image/campera.jpg'


function CardItem() {
  return (
    <Card className ="card">
      <Card.Img variant="top" src={ImgCampera}/>
      <Card.Body>
        <Card.Title>{Description.title="Campera"}</Card.Title>
        <Card.Text>{Description.price="$7500"}</Card.Text>
        <Card.Text>{Description.cant="10"}</Card.Text>
        <ButtonDetails></ButtonDetails>
        <ButtonAddCart></ButtonAddCart>
      </Card.Body>
    </Card>
  );
}

export default CardItem;