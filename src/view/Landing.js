import "../App.css";
import { useState, useEffect } from "react";
import emailjs from "emailjs-com";

function Landing() {
  const [toggleButton, setToggleButton] = useState(false);
  const initialValues = { nombre: "", apellido: "", email: "", telefono: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validado = validate(formValues);
    setFormErrors(validate(formValues));
    if (Object.keys(validado).length === 0) {
      setIsSubmit(true);
      setFormValues(initialValues);
      emailjs
        .sendForm(
          "service_miiwiqw",
          "template_m5k9cvi",
          e.target,
          "KzzPds4TVC6qE0l-e"
        )
        .then((res) => {
          alert("Se ha enviado correctamente");
          console.log(res);
        });
    } else {
      setFormErrors(validate(formValues));
    }
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors, formValues, isSubmit]);

  const validate = (values) => {
    const errors = {};
    const regexPhone =
      /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
    const regex = /^[^\s@]+@[^\s@].[^\s@]{2,}$/i;
    if (!values.nombre) {
      errors.nombre = "Introducir un nombre!";
    }
    if (!values.apellido) {
      errors.apellido = "Introducir un appellido!";
    }
    if (!values.email) {
      errors.email = "Introducir un correo eletrónico!";
    } else if (!regex.test(values.email)) {
      errors.email = "Introducir un correo eletrónico!";
    }
    if (!values.telefono) {
      errors.telefono = "Introducir un numero de telefono!";
    } else if (
      !regexPhone.test(values.telefono) ||
      values.telefono.length < 9
    ) {
      errors.telefono = "Introducir un numero de telefono valido!";
    }
    return errors;
  };

  function toggle() {
    setToggleButton(function (oldMode) {
      if (oldMode) {
        return false;
      } else {
        return true;
      }
    });
  }

  return (
    <div className="App">
      <div>
        <a href="https://www.releevant.com" target="_blank" rel="noreferrer">
          <img src="../../LogoDef.png" alt="logo releevant" width={"25%"} />
        </a>
        <h1>¡Tu trabajo te está  esperando!</h1>
        <h2>
          Bootcamp de
          Desarrollo Web
        </h2>
        <h5 className="heading5">Cambia tu futuro en 5 meses</h5>
        <div className="head">
          <button onClick={toggle} className="button">
            {" "}
            QUIERO MÁS INFO{" "}
          </button>
        </div>
      </div>
      <div className={`${toggleButton ? "form-box-visible" : "form-box"}`}>
        <button onClick={toggle} className="close">
          +
        </button>
        <h2 className="form-h2">COMENZAMOS EL 20 DE MAYO</h2>
        <h4 className="form-h4">
          Quiero info sobre Becas, Financiación y Temario del Bootcamp
        </h4>
        {Object.keys(formErrors).length === 0 && isSubmit && (
          <div className="correct">
            Su formulario se ha envíado correctamente!
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input
              autoComplete="off"
              onChange={handleChange}
              type="text"
              name="nombre"
              value={formValues.nombre}
              required
            />
            <label name="name">Nombre</label>
            <p>{formErrors.nombre}</p>
          </div>
          <div className="user-box">
            <input
              autoComplete="off"
              onChange={handleChange}
              type="text"
              name="apellido"
              value={formValues.apellido}
              required
            />
            <label name="surname">Apellido</label>
            <p>{formErrors.apellido}</p>
          </div>
          <div className="user-box">
            <input
              autoComplete="off"
              onChange={handleChange}
              type="text"
              name="email"
              value={formValues.email}
              required
            />
            <label name="email">Correo eletrónico</label>
            <p>{formErrors.email}</p>
          </div>
          <div className="user-box">
            <input
              autoComplete="off"
              onChange={handleChange}
              type="phone"
              name="telefono"
              value={formValues.telefono}
              required
            />
            <label name="tel">Teléfono</label>
            <p>{formErrors.telefono}</p>
          </div>
          <div className="info">
            <button type="submit">Quiero Info</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Landing;
