import React, { useState, useEffect } from "react";
import axios from "axios";
import Producto from "./Producto";
import logo from "../Imagenes/imagenNotFound.jpg";
function Productos() {
  const [prod, setProductos] = useState();
  const [isLoading, setLoading] = useState(true);
  const [inputValue, setBusqueda] = useState("");
  const [prodBuscar, setBuscar] = useState("iphone");
  const actualizarBusqueda = (e) => {
    setBusqueda(e.currentTarget.value);
  };
  const buscar = () => {
    try {
      fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${prodBuscar}`)
        .then((res) => res.json())
        .then((responseData) => {
          console.log(responseData.results,'resultados');
          setProductos(responseData.results);
        });
    } catch (e) {
      setProductos({
        title: "Producto no encontrado",
        thumbnail: { logo },
      });
      console.log(e);
    }
  };
  useEffect(() => {
    buscar();
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [prodBuscar]);

  function handleSubmit() {
    setBuscar(inputValue.replaceAll(/\s/g, "+"));
    console.log(prodBuscar);
  }

  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <div className="formBusqueda">
          <h5 className="nombreBusqueda" >Buscar en base de datos de MercadoLibre:</h5>
          <input
            type="text"
            placeholder="Producto"
            value={inputValue}
            onChange={actualizarBusqueda}
            
          />
          <button onClick={handleSubmit} id="btnBuscar" >Buscar</button>
        </div>
        <h6 className="nombreBusqueda">Resultados de <span className="spanBusqueda">"{prodBuscar.replaceAll("+"," ")}"</span>:</h6>
        {prod.map((producto) => (
          <Producto
            titulo={producto.title}
            cantidad={producto.available_quantity}
            src={producto.thumbnail}
            precio={producto.price}
            id={producto.id}
          />
        ))}
      </div>
    );
  }
}

export default Productos;
//  setProductos(datos.data.results)
