import React, { useState } from "react";
import styled from "styled-components";
import { actrices } from "./Modelos";
import logo from "../assets/PERFIL.jpg";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "reactstrap";

function Inicio() {
  // console.log(actrices);
  const [modelos, useModelos] = useState(actrices);
  // console.log(modelos);
  return (
    <Contenedor>
      <Tittle>
        <Link to="/">
          <img src={logo} alt="Diosdesga" />
        </Link>
        <h1>DIOSDESGA</h1>
      </Tittle>
      <Contenido>
        <Table>
          <thead>
            <tr>
              {/* <th>#</th> */}
              <th>Foto</th>
              <th>Nombre</th>
              <th>Edad</th>
              <th>Perfil</th>
            </tr>
          </thead>
          <tbody>
            {modelos.map((modelo) => (
              <tr>
                <td>
                  <img src={modelo.photo} />
                </td>
                <td>{modelo.nombre}</td>
                <td>{modelo.edad}</td>
                <td><Link to={modelo.id}> Ver Perfil</Link></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Contenido>
    </Contenedor>
  );
}

export default Inicio;

const Contenedor = styled.div`
  margin-left: 15%;
  margin-right: 15%;
  background: #eaeaea;
  min-height: 100vh;

  //! MEDIDA PARA PANTALLAS MAS PEQUEÑAS
@media screen and (max-width: 800px) {
  margin-left: 1%;
  margin-right: 1%;
`;

const Tittle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // background: blue;
  height: 230px;

  img {
    height: 100px;
    width: 100px;
    border-radius: 50px;
    &:hover {
      cursor: pointer;
    }
  }

  h1 {
    margin: 0;
    font-size: 3.5rem;
  }
  //! MEDIDA PARA PANTALLAS MAS PEQUEÑAS
@media screen and (max-width: 800px) {
    h1{
     font-size: 1.5rem;

    }
`;

const Contenido = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
// background: red; 

  table{
    width: 90%;    
    text-align: center;

    a{
      background: #2804F3;
      padding: 6px;
      color: #fff;
      text-decoration: none;
      border-radius: 8px;
      font-size: .8rem;
    }
  
  }
}

img{
  height: 70px;
  width: 60px;
}
//! MEDIDA PARA PANTALLAS MAS PEQUEÑAS
@media screen and (max-width: 800px) {
overflow:scroll;

    table{
     a{
      background: none;
      color: blue;
     
     }

    }
  }
`;
