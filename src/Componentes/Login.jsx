import React from "react";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="divLogin">
        <div>
        Inicie sesion
        </div>
      <div className="divInputsLogin">
      <input type="text" placeholder="Usuario"></input>
      <input type="text" placeholder="Contraseña"></input>
      </div>
      <div>
        <button>Logear</button>
      </div>
    </div>
  );
}

export default Login;
