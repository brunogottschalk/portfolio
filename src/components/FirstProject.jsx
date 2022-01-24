import React from "react";
import readmeGif from "../images/readmeGif.gif";

function FirstProject() {
  return (
    <div className="project-item">
      <h2 className="project-title">League of legends Search for Users</h2>
      <div className="line-break"></div>
      <div className="description-container">
        <a href="https://lol-search-for-players.netlify.app">
          <div className="project-image">
            <img src={readmeGif} alt="application" />
          </div>
        </a>
        <div className="project-description">
          <p>
            Esse projeto tem como função consultar tanto as partidas jogadas por
            qualquer jogador de league of legends quanto algumas informações de
            suas contas.
          </p>
          <p>
            Para fazer isso eu usei a API oficial da Riot Games para consultar
            todos os dados necessários. Neste projeto foram usados React,
            Typescript, Redux, ReactRouter.
          </p>
        </div>
      </div>
      <a href="https://github.com/brunogottschalk/lol-search-for-players">
        <p className="project-link">Link para o repositório Github.</p>
      </a>
    </div>
  );
}

export default FirstProject;
