import CardItem from "./CardItem";
import FetchSimulation from "../../utils/promises";
import productos from "../../utils/products";
import React, { useState, useEffect } from 'react';
import '../../styles/containerCards.css';
import { useParams } from "react-router-dom";

const ContainerCardItem = () => {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();

    useEffect(() => {
        if (idCategory !== undefined) {
            // Filtra los productos si se proporciona una categoría en la URL.
            const filteredProducts = productos.filter(product => product.type === idCategory);
            setDatos(filteredProducts);
        } else {
            // Si no se proporciona una categoría, muestra todos los productos.
            setDatos(productos);
        }
    }, [idCategory]);

    return (
        <div className="containerCards">
            {datos.map(product => (
                <CardItem
                    key={product.id}
                    imagen={product.imageProduct.firstImage}
                    title={product.title}
                    cantidad={product.stock}
                    price={product.price}
                />
            ))}
        </div>
    );
}

export default ContainerCardItem;