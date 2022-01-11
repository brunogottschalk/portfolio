import React from "react";
import readmeGif from "../images/readmeGif.gif";

function ProjectCard() {
  return (
    <div className="project-item">
      <a href="https://lol-search-for-players.netlify.app">
        <div className="project-link-to-application">
          <h2 className="project-title">League of legends Search for Users</h2>
          <div className="project-image">
            <img src={readmeGif} alt="application" />
          </div>
        </div>
      </a>
      <div className="line-break"></div>
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
      <a href="https://github.com/brunogottschalk/lol-search-for-players">
        <p className="project-link">Link para o repositório Github.</p>
      </a>
    </div>
  );
}

export default ProjectCard;
