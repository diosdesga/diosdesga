import React, {useEffect, useState} from 'react'
import styled from "styled-components";
import { useParams, useNavigate, Link } from "react-router-dom";
import { actrices } from "./Modelos";
import logo from "../assets/PERFIL.jpg";




function Perfil () {
    const {id} = useParams()
console.log(id);
    const navigate = useNavigate();

   const [perfil, setPerfil] = useState({})

    useEffect( () => {
        const validar = () =>{

            const filtrar = actrices.filter( modelo => modelo.id == id)
            
            if(filtrar.length == 0){
            navigate('/diosdesga')
            }else{
                setPerfil(filtrar[0])
            }
        }
        validar();
    }, [])
// console.log(perfil);
  return (
    <Contenedor>
        <Tittle>
        <Link to="/">
          <img src={logo} alt="Diosdesga" />
        </Link>
        <h1>DIOSDESGA</h1>
      </Tittle>
        <Foto>
            <img className='img-perfil' src={perfil.photo} alt="" />
        </Foto>
        
        <Informacion>
            <label htmlFor=""><b>Nombre:</b> {perfil.nombre}</label>
            <label htmlFor=""><b>Edad:</b> {perfil.edad}</label>
            <a href={perfil.enlace} >Ver Video</a>
        </Informacion>
    </Contenedor>
  )
}

export default Perfil 
const Contenedor = styled.div`
  margin-left: 15%;
  margin-right: 15%;
  background: #eaeaea;
  min-height: 100vh;
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
}
`;

const Foto = styled.div`
display: flex;
height: 250px;
justify-content: center;
align-items: center;

.img-perfil{
    width: 200px;
    height: 210px;
}
`;

const Informacion = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

a{
    padding: 6px;
    color: #fff;
    background: #0C0342;
    border-radius: 5px;
    text-decoration: none;
    margin-top: 20px;
    
}

`;