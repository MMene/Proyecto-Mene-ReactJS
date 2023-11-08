import CardItem from "./CardItem";
import FetchSimulation from "../../utils/promises";
import productos from "../../utils/products";
import { useState, useEffect } from "react";


const ContainerCardItem = () => {

    const  [ datos, setDatos ] = useState ([]);

    useEffect(() => {
        FetchSimulation(productos, 3000)
    .then(resp => console.log(resp))
    .catch(error => console.log(error))
    }, [])

    return (
     <>
       {
        datos.map( product => (
            <CardItem
                 key={product.id}
                 imagen={product.imageProduct.firstImage}
                 title={product.title}
                 cant={product.stock} 
                 price={product.price}
            />
        ))
       }
     </>
 )
}

export default ContainerCardItem;