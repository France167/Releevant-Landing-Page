import React from "react";
import "./Form.css"


function Form() {
  return (
    <div className="form-box">
      <h2>COMENZAMOS EL 20 DE MAYO</h2>
      <h4>Quiero info sobre Becas, Financiación y Temario del Bootcamp</h4>
      <form method="post">
        <div className="user-box">
          <input type="text" name="name" required />
          <label name="name">Nombre</label>
        </div>
        <div className="user-box">
          <input type="text" name="surname" required />
          <label name="surname">Apellido</label>
        </div>
        <div className="user-box">
          <input type="email" name="email" required />
          <label name="email">Correo eletrónico</label>
        </div>
        <div className="user-box">
          <input type="text" name="tel" required />
          <label name="tel">Teléfono</label>
        </div>
        <button type="submit">Quiero Info</button>
      </form>
    </div>
  );
}

export default Form;
