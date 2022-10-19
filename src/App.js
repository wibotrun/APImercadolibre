import logo from "./logo.svg";
import "./App.css";
import Producto from "./Componentes/Productos";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import Registro from "./Componentes/Registro";
import NavBar from "./Componentes/NavBar";
import Login from "./Componentes/Login";
import Detalle from "./Componentes/Detalle";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Producto />} />
            <Route path="/Registro" element={<Registro />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Items/:id" element={<Detalle />} />
          </Routes>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
