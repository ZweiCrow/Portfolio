import React, { useEffect, useRef, useState } from "react";
import "../Utils/Sass/resume.scss";
import { Link } from "react-router-dom";
import CVPDF from "../Utils/EMIDOF Christopher - CV.pdf";

const Resume = (props) => {
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
    <div id="Resume" ref={section} className={(visibility)? "visible" : "invisible"}>
      <div id="ResumeAnchor">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 4V1C5 0.734784 5.10536 0.48043 5.29289 0.292893C5.48043 0.105357 5.73478 0 6 0H14C14.2652 0 14.5196 0.105357 14.7071 0.292893C14.8946 0.48043 15 0.734784 15 1V4H19C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5V19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H1C0.734784 20 0.48043 19.8946 0.292893 19.7071C0.105357 19.5196 0 19.2652 0 19V5C0 4.73478 0.105357 4.48043 0.292893 4.29289C0.48043 4.10536 0.734784 4 1 4H5ZM2 15V18H18V15H2ZM2 13H18V6H2V13ZM7 2V4H13V2H7ZM9 10H11V12H9V10Z"
            fill="#F0F8FF"
          />
        </svg>
        <p>MON PARCOUR</p>
      </div>
      <div id="ResumeTitle">
        <p>
          Etudes & <span>Experiences</span>
        </p>
        <Link id="DLButton" to={CVPDF} download="EMIDOF Christopher - CV" target="_blank" rel="noreferrer">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 6.641L9.121 5.521C9.30947 5.3387 9.562 5.23773 9.82421 5.23982C10.0864 5.24191 10.3373 5.3469 10.5228 5.53218C10.7084 5.71746 10.8137 5.9682 10.8162 6.2304C10.8186 6.49259 10.718 6.74527 10.536 6.934L7.707 9.763C7.61435 9.85618 7.50419 9.93013 7.38285 9.9806C7.26152 10.0311 7.13141 10.057 7 10.057C6.86859 10.057 6.73848 10.0311 6.61715 9.9806C6.49581 9.93013 6.38565 9.85618 6.293 9.763L3.464 6.934C3.37116 6.84102 3.29753 6.73067 3.24734 6.60924C3.19714 6.48781 3.17135 6.35769 3.17144 6.22629C3.17154 6.0949 3.19751 5.96481 3.24788 5.84345C3.29825 5.72209 3.37202 5.61184 3.465 5.519C3.55798 5.42616 3.66833 5.35253 3.78976 5.30234C3.91119 5.25214 4.04131 5.22635 4.17271 5.22644C4.3041 5.22654 4.43419 5.25251 4.55555 5.30288C4.67691 5.35325 4.78716 5.42702 4.88 5.52L6 6.641V1C6 0.734784 6.10536 0.48043 6.29289 0.292893C6.48043 0.105357 6.73478 0 7 0C7.26522 0 7.51957 0.105357 7.70711 0.292893C7.89464 0.48043 8 0.734784 8 1V6.641ZM1 12H13C13.2652 12 13.5196 12.1054 13.7071 12.2929C13.8946 12.4804 14 12.7348 14 13C14 13.2652 13.8946 13.5196 13.7071 13.7071C13.5196 13.8946 13.2652 14 13 14H1C0.734784 14 0.48043 13.8946 0.292893 13.7071C0.105357 13.5196 0 13.2652 0 13C0 12.7348 0.105357 12.4804 0.292893 12.2929C0.48043 12.1054 0.734784 12 1 12Z"
              fill="#1B1B19"
            />
          </svg>
          CV
        </Link>
      </div>
      <div className="Timestamp">
        <div className="TimestampDate">
          <p></p>31/05/2023 - 26/07/2023
        </div>
        <div className="TimestampTitle">
          <p className="exp">Développeur lead Front-end</p>
        </div>
        <div className="TimestampCorp">
          <p>Théâtre du Palais Royal / Th﻿éâtre Michel</p>
        </div>
      </div>
      
      <div className="Timestamp">
        <div className="TimestampDate">
          <p></p>09/12/2022 - 26/06/2023
        </div>
        <div className="TimestampTitle">
          <p>
            Développeur web et web mobile <span>(RNCP niv.5)</span>
          </p>
        </div>
        <div className="TimestampCorp">
          <p>Sieli</p>
        </div>
      </div>

      <div className="Timestamp">
        <div className="TimestampDate">
          <p></p>Sept-Oct 2021
        </div>
        <div className="TimestampTitle">
          <p>
            Ingénierie Web/Média, Alternance <span>(RNCP niv.7)</span>
          </p>
        </div>
        <div className="TimestampCorp">
          <p>Institut G4</p>
        </div>
      </div>

      <div className="Timestamp">
        <div className="TimestampDate">
          <p></p>23/11/2020 - 18/12/2020
        </div>
        <div className="TimestampTitle">
          <p className="exp">Technicien informatique</p>
        </div>
        <div className="TimestampCorp">
          <p>Gobelins, l’école de l’image</p>
        </div>
      </div>

      <div className="Timestamp">
        <div className="TimestampDate">
          <p></p>2019 - 2021
        </div>
        <div className="TimestampTitle">
          <p>
            BTS - Systèmes Numériques Informatique et Réseaux (SNIR){" "}
            <span>(RNCP niv.5)</span>
          </p>
        </div>
        <div className="TimestampCorp">
          <p>Lycée Langevin Wallon</p>
        </div>
      </div>

      <div className="Timestamp">
        <div className="TimestampDate">
          <p></p>2017 - 2019
        </div>
        <div className="TimestampTitle">
          <p>
            Bac STI2D - Systèmes D’information et Numérique (SIN){" "}
            <span>(RNCP niv.4)</span>
          </p>
        </div>
        <div className="TimestampCorp">
          <p>Lycée Langevin Wallon</p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
