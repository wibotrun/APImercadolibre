import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
function Detalle() {
  const { id } = useParams();
  const [producto, setProducto] = useState({});
  const [isLoading, setLoading] = useState(true);
  async function getProductoById() {
    const res = await axios.get(`https://api.mercadolibre.com/items/${id}`);
    setProducto(res.data);
  }
  useEffect(() => {
    getProductoById();
    setTimeout(() => {
      setLoading(false);
    }, 1500);
    console.log(producto)
  }, []);
  function mensaje(){
    alert(`Añadido al carrito: "${producto.title}"`)
  }
  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
       
       <div className="ProdItem">
        <h3>{producto.title}</h3>
        <img src={producto.thumbnail} id="imgProd"></img>
        <h5>Cantidad disponible: {producto.available_quantity}</h5>
        <h5>${producto.price} (ARS)</h5>
        <h6>{producto.warranty}</h6>
        <button onClick={mensaje}>Comprar</button>
      </div>
      
    )
  }
}

export default Detalle;
