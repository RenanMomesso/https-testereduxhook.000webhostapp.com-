import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const About = () => {
  const {name,sobrenome,contador,mais10} = useSelector((state) => state.usuario);

  return (
    <div className="container">
      <h1>About</h1>
      Aqui voce pode ver os dados que vc usou em outras telas:
      <h2 className="redux" >nome:{name}</h2>
      <h2 className="redux">sobrenome:{sobrenome}</h2>
      <h2 className="redux">contador:{contador}</h2>
      <h2 className="redux">Contador que soma mais 10:{mais10}</h2>
      <h4>
      </h4>
    </div>
  );
};

export default About;
