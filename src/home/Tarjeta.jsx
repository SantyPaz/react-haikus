import React from "react";
import "./Tarjeta.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";

const Tarjeta = ({haiku,autor}) => {
    return (
      <div className="Tarjeta">
        <div className="ImagenTarjeta">
          <img src={`https://picsum.photos/500/300`} alt="ImagenHaiku" />
        </div>
        <div className="CuerpoTarjeta">
          <div className="InfoTarjeta">
            <img className= "ImagenPerfil" src={`https://picsum.photos/32/32`} alt="PerfilHaiku" />
            <h4 className="H4">Titulo del Haiku</h4>
          </div>
          <FontAwesomeIcon icon={faShareAlt} className="IconoCompartirTarjeta" />
        </div>
      </div>
    );
  };

  export default Tarjeta