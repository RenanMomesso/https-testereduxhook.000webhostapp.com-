import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { connect, useSelector, useDispatch } from "react-redux";
import "./Login.css";

function Login() {
  //   let history = useHistory();

  const dispatch = useDispatch();
  const { mais10, name, sobrenome } = useSelector((state) => state.usuario);
  const contador = useSelector((state) => state.usuario.contador);

  const [nome, setNome] = useState("");
  const [sobreName, setSobreName] = useState("");

  const mudarNomeFelipe = () => {
    dispatch({
      type: "SET_SOBRENOME",
      payload: { sobrenome: sobreName }
    })
    dispatch({
      
      type: "SET_NAME",
      payload: { name: nome },
    })
  };

  return (
    <div className="menu">
      <div className="cor_de_fundo">
        <div className="form">
          <div>
            <h1 className="h1h1h1">Login</h1>
            <div className="avatar"></div>
          </div>

          <div className="formulario">
            <input
              onChange={(e) => setNome(e.target.value)}
              value={nome}
              placeholder="Nome"
            />

            <input
              onChange={(e) => setSobreName(e.target.value)}
              value={sobreName}
              placeholder="Sobrenome"
            />
          </div>
          <p style={{fontSize:25}}>Estes valores serão gravados em todas as paginas, mesmo atualizando a página, tanto nome qnto sobrenome</p>
          <p className="redux">Nome: {name} </p>
          <p className="redux">Sobrenome: {sobrenome}</p>
          <div className="botoes_form">
            <button onClick={mudarNomeFelipe}>
              {" "}
              <Link to="/">Enviar</Link>
            </button>
            <a className="esqueci" href="#">
              Esqueci senha...
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
