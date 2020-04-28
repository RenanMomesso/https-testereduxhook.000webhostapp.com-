import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect, useSelector, useDispatch } from "react-redux";
import Image from '../Images/redux_image.png'
import Image2 from '../Images/redux_image2.png'

function Home() {
  //   let history = useHistory();

  const { mais10, contador, name,sobrenome } = useSelector((state) => state.usuario);
  const dispatch = useDispatch();

  const [nome, setNome] = useState("");
  const [sobreName, setSobreName] = useState("");

  const mudarNome = () => {
    dispatch({
      type: "SET_NAME",
      payload: { name: nome },
    });
    setNome("")
  };

  const mudarSobrenome =()=>{
    dispatch({
      type:"SET_SOBRENOME",
      payload:{sobrenome:sobreName}
    })
  }

  const aumentarUm = () => {
    dispatch({
      type: "INCREMENT_CONTADOR",
    });
  };

  const aumentarEm10 = () => {
    dispatch({
      type: "INCREMENT_MAISDEZ",
    });
  };

  return (
    <div className="container">
      <div className="titulo_pagina">
        <div className="pagina_dupla">
          <div className="pagina_dupla_esquerda">
            <h1>Pagina Home</h1>
            <p>Usando redux com hooks</p>
            <p>Neste pequeno projeto, será utilizado o redux com hooks</p>
            <p>
              Ao invés de usarmos{" "}
              <strong style={{ color: "red" }}>
                const mapStateToProps = state => ({});
              </strong>
            </p>
            <p>Usaremos useSelector e useDispatch</p>
            <br />
            <img src={Image2} alt="image2_redux" className="img"/>
          </div>
          <div className="pagina_dupla_direita">
            <p>
              Primeiro, criamos nosso arquivo com o reducer contendo algum reducer, como por exemplo eu coloquei o meu usuarioreducer, que nele contem nome, sobrenome, somar 1 e somar mais 10 como ação incial
            </p>
            <p>
              Se você não sabe como fazer, tem na documentação, mas também tem
              um rapaz que eu gosto muito e é em inglês:
              <a
                href="https://kaloraat.com/articles/react-hooks-with-redux"
                target="blank"
              >
                {" "}
                clickando aqui{" "}
              </a>
            </p>
            <p>ENTÃO, ao invés de mapstatoProps, usamos, const {"{ mais10, contador, name }"} = useSelector((state) => state.usuario);</p>
            <p>Mais10, contador e name foram as variaveis que eu inventei no usuarioReducer, pode ser qualquer nome como initialState</p>
            <img src={Image}  className="img" alt="image1_redux"/>
          </div>
        </div>

        <h4>Tudo que vc escrever aqui para baixo será gravado em sua tela, com o redux, sem precisar usar props,
          <br/>
          tente fazer login e mudar de pagina (entre login/home/about) e verá que a informação fica gravada, de uma forma mto simples
        </h4>

        <p  className="redux-contador">Nome: {name}</p>
        <input onChange={(e) => setNome(e.target.value)} value={nome} />
        <br/>
        <button onClick={mudarNome}>Mudar nome com REDUX!!</button>
        <br />
        <p className="redux-contador">sobrenome:{sobrenome}</p>
        <br/>
        <input onChange={e=>setSobreName(e.target.value)}  value={sobreName}/>
        <br />
        <br />
        <button onClick={mudarSobrenome}>Mudar sobrenome com REDUX!!</button>
        <br />
        <br />
        <br />
        <h1 className="redux-contador">somar mais 10: Contando...{mais10}</h1>
        <br />
        <p className="redux-contador">Contagem: {contador}</p>
        <br />
        <button onClick={aumentarUm}> aumentar 1</button>
        <br />
        <button onClick={aumentarEm10}>Plus10</button>
      </div>
    </div>
  );
}

export default Home;
