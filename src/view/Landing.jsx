import "../App.css";
import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "animate.css";
import Image1 from "../components/images/codeBoot.jpg";

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

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const validado = validate(formValues);
    setFormErrors(validate(formValues));
    if (Object.keys(validado).length === 0) {
      setIsSubmit(true);
      setFormValues(initialValues);
      emailjs
        .sendForm(
          "service_y9u7mue",
          "template_su57y4p",
          e.target,
          "akdtLzf1d6j7P_zz1"
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
    setFormValues(initialValues);
    setFormErrors("");
  }

  return (
    <div className="App">
      <div>
        <a href="https://www.releevant.com" target="_blank" rel="noreferrer">
          <img src="../../LogoDef.png" alt="logo releevant" width={"30%"}/>
        </a>
        <h1 className="h1-land animate__animated animate__fadeInLeft">
          Bootcamp de <br />
          Desarrollo Web
        </h1>
        <h5 className="animate__animated animate__fadeInUp heading5">
          Cambia tu futuro en 5 meses
        </h5>
        <h4 className="animate__animated animate__fadeInUp heading4">
          Comenzamos el 16 de Septiembre!
        </h4>
        <h4 className="animate__animated animate__fadeInUp heading4">
          PRESENCIAL & LIVE STREAMING!
        </h4>
        <div className="buttons container">
          
              <div className="head">
                <button onClick={toggle} className="button-dos">
                  {" "}
                  QUIERO MAS INFO!!{" "}
                </button>
              </div>
            </div>
      </div>
       <div className="etapas-boot">
        <h2 className="title-h2-cursoweb text-center module">
          ¿QUÉ APRENDERÉ EN EL BOOTCAMP?
        </h2>
        <div className="etapas module">
          <div className="row">
            <div className="etapas-col col-4">
              <div className="list-group" id="list-tab" role="tablist">
                <a
                  className="title-cursow list-group-item list-group-item-action active btn-secondary"
                  id="list-home-list"
                  data-bs-toggle="list"
                  href="#list-home"
                  role="tab"
                  aria-controls="list-home"
                >
                  ETAPA 1
                </a>
                <a
                  className="title-cursow list-group-item list-group-item-action btn-secondary"
                  id="list-profile-list"
                  data-bs-toggle="list"
                  href="#list-profile"
                  role="tab"
                  aria-controls="list-profile"
                >
                  ETAPA 2
                </a>
                <a
                  className="title-cursow list-group-item list-group-item-action btn-secondary"
                  id="list-messages-list"
                  data-bs-toggle="list"
                  href="#list-messages"
                  role="tab"
                  aria-controls="list-messages"
                >
                  ETAPA 3
                </a>
                <a
                  className="title-cursow list-group-item list-group-item-action btn-secondary"
                  id="list-settings-list"
                  data-bs-toggle="list"
                  href="#list-settings"
                  role="tab"
                  aria-controls="list-settings"
                >
                  ETAPA 4
                </a>
              </div>
            </div>
            <div className="col-lg-8 col-sm-12">
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="list-home"
                  role="tabpanel"
                  aria-labelledby="list-home-list"
                >
                  <h3 className="h3-web">
                    MAQUETACIÓN Y BASES DE PROGRAMACIÓN
                  </h3>
                  <div className="progress my-3">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated  bg-info"
                      role="progressbar"
                      style={{ width: "25%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p className="p-web">
                    En esta etapa aprenderás los conceptos más básicos de la
                    programación web. Empezaremos con{" "}
                    <b>HTML, CSS, SASS y SCSS</b>, junto con{" "}
                    <b>diseños responsive, Flexbox y Bootstrap</b>. Todo ello
                    para tener unas bases sólidas de maquetación web. Una vez
                    tengamos el “esqueleto” de la web hecho, habrá que darle
                    funcionalidades. Es ahí cuando entra <b>Javascript</b>.
                    Aprenderemos a manipular el DOM, es decir, darle vida a las
                    webs en todos los sentidos. Asentaremos los conceptos
                    iniciales que iremos completando en el resto de etapas.
                    También te familiarizarás con el <b>control de versiones</b>
                    .
                  </p>
                  <p className="p-web">
                    Para finalizar, harás tu <b>primer proyecto</b>, para
                    asegurar y afianzar los conocimientos de los lenguajes que
                    has aprendido. Pero eso no es todo, ¡hay más! →
                  </p>
                </div>
                <div
                  className="tab-pane fade"
                  id="list-profile"
                  role="tabpanel"
                  aria-labelledby="list-profile-list"
                >
                  <h3 className="h3-web">BACK-END Y PROGRAMACIÓN AVANZADA</h3>
                  <div className="progress my-3">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated bg-info"
                      role="progressbar"
                      style={{ width: "50%" }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p className="p-web">
                    En la segunda etapa de este bootcamp nos metemos de lleno en
                    la parte más abstracta de la programación: el{" "}
                    <b>back-end</b>. Aprenderás conceptos como <b>MVC</b>{" "}
                    (modelo-vista-controlador) y crearás tu propio servidor de
                    la mano de <b>Node.js y ExpressJS</b>. Empezarás a tratar y
                    manejar bases de datos de la mano de
                    <b> MySQL</b> y <b>MongoDB</b>, aprenderás las diferencias
                    entre ellas y te meterás de lleno en el mundo de las
                    solicitudes <b> HTTP</b> y las
                    <b> API</b>. También entrarás en el mundo de algunas de las
                    tecnologías más punteras actualmente, como{" "}
                    <b>AWS y Docker</b>.
                  </p>
                  <p className="p-web">
                    Para finalizar, harás tu <b>segundo proyecto</b>, esta vez
                    para combinar todo lo que has aprendido en las dos etapas.
                    Podrás
                    <b> crear una </b>web básica, tanto con su <b>front-end</b>{" "}
                    como con su
                    <b> back-end</b>, en la que podrás guardar, enviar,
                    modificar y eliminar datos. Además, te ayudará a afianzar
                    todavía más tus conocimientos para avanzar hacia tu último
                    reto. →
                  </p>
                </div>
                <div
                  className="tab-pane fade"
                  id="list-messages"
                  role="tabpanel"
                  aria-labelledby="list-messages-list"
                >
                  <h3 className="h3-web">FRONT-END: REACT</h3>
                  <div className="progress my-3">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated bg-info"
                      role="progressbar"
                      style={{ width: "75%" }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p className="p-web">
                    Esta va a ser la etapa del bootcamp más intensa. Pondrás a
                    prueba todos los conocimientos adquiridos hasta ahora, y
                    aprenderás la{" "}
                    <b>librería de front-end más potente del mercado: React</b>.
                    Desarrollado por <b>Facebook</b>, es uno de los lenguajes
                    más demandados actualmente en el sector tecnológico.
                    Aprenderás conceptos como <b>SPA</b> (Single Page
                    Application) y la arquitectura basada en componentes se
                    convertirá en algo habitual para ti.
                  </p>
                  <p className="p-web">
                    Aparte de esto, aprenderás conocimientos de <b>SCRUM</b>,
                    para saber cómo organizan y estructuran los proyectos las
                    mejores empresas; sabrás todos los pasos para{" "}
                    <b>organizar y crear un proyecto real</b>, y lograrás tener
                    una base sólida de los conceptos de <b>UI</b> (User
                    Interface) y <b>UX</b> (User Experience).
                  </p>
                  <p className="p-web">
                    En este momento ya estarás listo para… ¡enfrentarte al
                    <b> proyecto final</b>! Unirás todo lo aprendido en estas
                    etapas, y como resultado{" "}
                    <b>crearás una auténtica aplicación full-stack</b>. Pondrás
                    a prueba tus conocimientos en front-end con React y la
                    maquetación, y tus conocimientos en back-end con las bases
                    de datos y Node.js. Además,{" "}
                    <b>
                      este proyecto final será expuesto a las empresas que te
                      contratarán
                    </b>
                    . Pero… ¡eso te lo contamos en la siguiente etapa! →
                  </p>
                </div>
                <div
                  className="tab-pane fade"
                  id="list-settings"
                  role="tabpanel"
                  aria-labelledby="list-settings-list"
                >
                  <h3 className="h3-web">¡HIRING DAY!</h3>
                  <div className="progress my-3">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                      role="progressbar"
                      style={{ width: "100%" }}
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p className="p-web">
                    Esta es la última etapa del bootcamp de desarrollo web.
                    ¡Aquí ya serás todo un{" "}
                    <b>
                      <i>Full Stack Web Developer</i>
                    </b>
                    ! En ella tendrás charlas de empresas y profesionales que
                    vendrán a <b>reclutar</b> a los alumnos del bootcamp.
                    También habrá <b>visitas a empresas</b>, para que conozcas
                    de primera mano cómo funcionan por dentro. Por último,
                    presentarás tu proyecto final ante{" "}
                    <b>múltiples empresas del sector tecnológico</b>. ¡El
                    trabajo estará hecho! En este momento estarás listo para
                    optar a muchos puestos de trabajo en el sector.
                  </p>
                  <p className="p-web">
                    <b>Releevant te acompañará y asesorará</b> sobre cómo hacer
                    las entrevistas, información relevante sobre ellas, y
                    mediará para que los procesos para que encuentres trabajo
                    sean los mas cortos posibles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
       <div className="section-dos d-flex justify-content-evenly">
        <div className="sec-uno d-flex justify-content flex-column">
          
            <h2
              className="h2-cursoweb-sec-dos text-center module"
              id="precencialidad"
            >
              ¿POR QUÉ ESTUDIAR ESTE BOOTCAMP?
            </h2>
         
          <div>
            <img className="image-bo" src={Image1} alt="coding" width={"70%"} />
          </div>
          <div>
            <p className="p-formacion-why">
              Releevant es mucho más que un sitio para formarte
            </p>
          </div>
        </div>
        <div className="d-flex justify-content flex-column">
          <div className="sec-why">
            <h3 className="why">
              <span>01</span> Aprenderás las últimas tecnologías
            </h3>
            <p className="p-formacion-sec-dos">
              Hemos diseñado un temario para que aprendas desde cero las
              tecnologías que más demandan las empresas. Recuerda, en el sector
              IT hay una enorme demanda.
            </p>
          </div>
          <div className="sec-why">
            <h3 className="why">
              <span>02</span> La mejor metodología para aprender
            </h3>
            <p className="p-formacion-sec-dos">
              Desde nuestra experiencia, la mejor forma de aprender programación
              es... programando. Parece evidente, pero no suele ser como se
              hacen las cosas. En Releevant presentamos una experiencia muy
              práctica con este bootcamp de programación, haciendo que el alumno
              realice proyectos por él mismo, sin olvidar el justo equilibrio
              con las bases de la teoría y los fundamentos de la programación.
            </p>
          </div>
          <div className="sec-why">
            <h3 className="why">
              <span>03</span> Desarrollarás tus soft-skills
            </h3>
            <p className="p-formacion-sec-dos">
              Te ayudamos a desarrollar tu trabajo en equipo, tu comunicación en
              un entorno de trabajo, tu capacidad para realizar proyectos
              complejos en tiempo y de la forma más adecuada.
            </p>
          </div>
          <div className="sec-why">
            <h3 className="why">
              <span>04</span> Pertenecerás a #releevantpeople
            </h3>
            <p className="p-formacion-sec-dos">
              Formamos una gran comunidad de desarrolladores dispuestos a
              acogerte con los brazos abiertos. Tendrás acceso a los meetups,
              masterclass y eventos. Releevant es mucho más que un sitio
              para formarte. Te sentirás desde el primer día dentro del sector
              tecnológico.
            </p>
          </div>
        </div>
      </div> 
      <div className={`${toggleButton ? "form-box-visible" : "form-box"}`}>
        <button onClick={toggle} className="close">
          +
        </button>
        <h2 className="animate__animated animate__fadeInDown form-h2">
          COMENZAMOS EL 16 DE SEPTIEMBRE
        </h2>
        <h4 className="animate__animated animate__fadeInDown form-h4">
          Quiero info sobre Becas, Financiación y Temario del Bootcamp
        </h4>
        {Object.keys(formErrors).length === 0 && isSubmit && (
          <div className="animate__animated animate__fadeInRight correct">
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
          z
          <div className="animate__animated animate__fadeInRight info">
            <button type="submit">Quiero Info</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Landing;
