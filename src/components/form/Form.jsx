import { useState, useRef } from "react";
import style from "./Form.module.css";

const Form = (props) => {

  const [imagen, setImagen] = useState("");
  const [nombre, setNombre] = useState("");
  const [alias, setAlias] = useState("");
  const [edad, setEdad] = useState();
  const [nacionalidad, setNacionalidad] = useState("");
  const [habilidades, setHabilidades] = useState("");
  const [personalidad, setPersonalidad] = useState("");
  const [mensajeError, setMensajeError] = useState('');
  const imagen1Ref = useRef(null);
  const imagen2Ref = useRef(null);

  const handlerSubmit = (e) => {
      e.preventDefault();
      if (nombre.trim() === '' || nombre.length <= 3 || nacionalidad.trim() === '' || nacionalidad.length<6) {
        setMensajeError('Por favor chequea que la información sea correcta')
      } else if (edad <= 0 || isNaN(edad)) {
        setMensajeError('Debe ingresar una edad mayor a 0')
      } else {
        props.onSubmit({imagen, nombre, alias, edad, nacionalidad, habilidades, personalidad })
        setImagen('')
        setNombre('')
        setEdad('')
        setAlias('')
        setNacionalidad('')
        setHabilidades('')
        setPersonalidad('')
        setMensajeError('')
        imagen1Ref.current.checked = false;
        imagen2Ref.current.checked = false;
      }
  }

  const setUrlImg = (e) => {
      setImagen(e.target.value)
  }

  return (
    <>
    <form onSubmit={handlerSubmit} class={style.form} action="">
      <h2>Elije tu avatar</h2>
      <div class="d-flex">
        <div>
          <label for="imagen1">
            <img src="src\assets\avatar-1.jpg" alt="Imagen 1" />
          </label>
          <input type="radio" id="imagen1" name="imagen" value="src\assets\avatar-1.jpg" onChange={setUrlImg} ref={imagen1Ref} required/>
        </div>
        <div>
          <label for="imagen2">
            <img src="src\assets\avatar-2.jpg" alt="Imagen 2" />
          </label>
          <input type="radio" id="imagen2" name="imagen" value="src\assets\avatar-2.jpg" onChange={setUrlImg}  ref={imagen2Ref} required/>
        </div>
      </div>
      <br />
      <div class="d-flex">
        <input class="mr-20" type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
        <br />
        <input type="text" placeholder="Alias" value={alias} onChange={(e) => setAlias(e.target.value)}/>
        <br />
      </div>
      <div class="d-flex">
        <input class="mr-20" type="number" placeholder="Edad" min="1" value={edad} onChange={(e) => setEdad(e.target.value)}/>
        <br />
        <input type="text" placeholder="Nacionalidad" value={nacionalidad} onChange={(e) => setNacionalidad(e.target.value)}/>
        <br />
      </div>
      <textarea type="text" placeholder="Habilidades excepcionales" value={habilidades} onChange={(e) => setHabilidades(e.target.value)} required/>
      <br />
      <textarea type="text" placeholder="Descripción de personalidad" value={personalidad} onChange={(e) => setPersonalidad(e.target.value)} required/>
      <br />
      <button type="submit">Generar tarjeta</button>
      <br />
    </form>
    {mensajeError && <p className={style.error}>{mensajeError}</p>}
    </>
  );
};

export default Form;
