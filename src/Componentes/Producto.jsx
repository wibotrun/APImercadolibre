import React from "react";
import { Link } from "react-router-dom";
function Producto({ id, titulo, src, cantidad, precio }) {
  return (
    <>
    
      <div className="ProdItem">
        <div>
          <h3>{titulo}</h3>
          <img src={src} id="imgProd"></img>
        </div>
        <button>
          <Link to={`/Items/${id}`}>Ver detalle</Link>
        </button>
      </div>
    </>
  );
}

export default Producto;
