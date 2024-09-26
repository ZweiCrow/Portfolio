import React, { useEffect, useRef, useState } from "react";
import "../Utils/Sass/projets.scss";
import { Link } from "react-router-dom";

const Projets = (props) => {
  const [visibility,setVisibility] = useState(false)
  const section = useRef()

  useEffect(()=>{
    const observer = new IntersectionObserver((entries)=>{
      const entry = entries[0]
        props.nav(entry.isIntersecting)
        if(entry.isIntersecting === true){
          setVisibility(entry.isIntersecting)
        }
    })
    observer.observe(section.current)
  },[])

  return (
    <div id="Projets" ref={section} className={(visibility)? "visible" : "invisible"}>
      <div id="ProjetsAnchor">
        <svg
          width="26"
          height="25"
          viewBox="0 0 26 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 0L12.625 0.156L6.625 2.563L6 2.813V9.531L0.594 11.875L0 12.156V20.219L0.5 20.531L6.5 23.875L6.969 24.125L7.438 23.906L13 21.125L18.563 23.906L19.031 24.125L19.5 23.875L25.5 20.531L26 20.219V12.156L25.406 11.875L20 9.531V2.812L19.375 2.562L13.375 0.156L13 0ZM13 2.188L16.281 3.468L13 4.75L9.719 3.469L13 2.188ZM8 4.938L12 6.468V11.344L8 9.563V4.938ZM18 4.938V9.562L14 11.344V6.469L18 4.938ZM7 11.312L10.625 12.906L7 14.688L3.375 12.875L7 11.312ZM19 11.312L22.625 12.875L19 14.688L15.375 12.906L16.5 12.406L19 11.312ZM2 14.407L6 16.407V21.314L2 19.064V14.407ZM24 14.407V19.064L20 21.314V16.407L24 14.407ZM12 14.47V19.376L8 21.376V16.407L12 14.47ZM14 14.47L18 16.407V21.376L14 19.376V14.47Z"
            fill="#F0F8FF"
          />
        </svg>

        <p>MES PROJETS</p>
      </div>

      <div className="ProjetsTitle">
        <p>Les <span>projets</span> sur lesquels j'ai travaillé</p>
      </div>

      <ul id="ListContain">

        <Link className="full" to={"/"}>
          <div className="container">
            <img src="/Photos/Portfolio.png" alt="Portfolio" />
            <div className="tan"></div>
            <div className="tags">
              <p>From Scratch</p>
              <p>React JS</p>
            </div>
          </div>
          <p className="legend">Mon Porfolio</p>
          <p className="desc">Mon CV en ligne qui liste mes formations, mes experiences et mes compétences.</p>
        </Link>

        <Link className="half" to={"https://cozycooks.onrender.com"} target="_blank">
          <div className="container">
            <img src="/Photos/CozyCook.png" alt="CozyCook" />
            <div className="tan"></div>
            <div className="tags">
              <p>Figma</p>
              <p>React JS</p>
              <p>Node JS</p>
              <p>NoSql</p>
            </div>
          </div>
          <p className="legend">Cozy Cooks</p>
          <p className="desc">Un site pour contenir et trier des recettes de cuisine à la manière d’un recueil.<br/> Avec une fonctionnalité de "Carnet" qui permet de créer ses propres fiches et de les consulter.</p>
        </Link>

        <Link className="half" to={"https://jukebox-76pp.onrender.com"} target="_blank">
          <div className="container">
            <img src="/Photos/Jukebox.png" alt="Jukebox" />
            <div className="tan"></div>
            <div className="tags">
              <p>Figma</p>
              <p>React JS</p>
              <p>Node JS</p>
              <p>NoSql</p>
            </div>
          </div>
          <p className="legend">Jukebox</p>
          <p className="desc">Un lecteur de musique, qui répertorie des artistes et leurs discographie, des albums.</p>
        </Link>

        <Link className="full" to={"https://portesdelabrie.org"} target="_blank">
          <div className="container">
            <img src="/Photos/MLPDLB.png" alt="MLPDLB" />
            <div className="tan"></div>
            <div className="tags">
              <p>Wordpress</p>
              <p>HTML</p>
              <p>CSS</p>
            </div>
          </div>
          <p className="legend">Mission Locale des Portes de la Brie</p>
          <p className="desc">Site informatif de la Mission Locale des Portes de la Brie qui répertorie des informations, des aides et propose des accompagnements aux jeunes ainsi qu'aux employeurs.</p>
        </Link>

      </ul>
    </div>
  );
};

export default Projets;
