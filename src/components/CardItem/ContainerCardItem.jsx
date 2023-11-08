import CardItem from "./CardItem"
import FetchSimulation from "../../utils/promises";
import productos from "../../utils/products";
import React, { useState, useEffect } from 'react';
import '../../styles/containerCards.css'

const ContainerCardItem = () => {
    const  [ datos, setDatos ] = useState ([]);

    useEffect(() => {
        FetchSimulation(productos, 2000)
    .then(resp => setDatos(resp))
    .catch(error => console.log(error))
    }, [])

    return (
       <div className="containerCards">
        {
        datos.map( product => (
            <CardItem
            key={product.id}
            imagen={product.imageProduct.firstImage}
            title={product.title}
            cantidad={product.stock}
            price={product.price}
            />
        ))
       }
       </div>
     )
}

export default ContainerCardItem;