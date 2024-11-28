import { useState } from "react";

function App() {

  const [mensaje, setMensaje] = useState([]);

  const clickBoton = () => {
    setMensaje((prevMensaje) => [
      ...prevMensaje,
      'Boton CLikeado'
    ]);
    console.log('Click en el boton');
  }

  return (
    <>
      <div>
        <p>Hola Mundo</p>
        <button className="btn-primary" onClick={clickBoton}>Enviar</button>
        {mensaje.map((mensaje, index) => (
          <p >{mensaje}</p>
        ))}
      </div>
    </>
  );
}

export default App;
