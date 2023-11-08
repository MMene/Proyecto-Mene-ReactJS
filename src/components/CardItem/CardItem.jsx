import React from 'react';
import '../../styles/cardItem.css'
import ButtonDetails from './ButtonDetails';
import ButtonAddCart from './ButtonAddCart';
import Image from './Image';
import Description from './Description';


function CardItem(props) {
  return (
      <div className='cardItem'>
           <Image imagen = {props.imagen}/>
           <Description 
           title = {props.title}
           cantidad = {props.cantidad}
           price = {props.price}
           />
           <div className='buttons'>
            <ButtonDetails></ButtonDetails>
            <ButtonAddCart></ButtonAddCart>
           </div>


      </div>
  );
}

export default CardItem;