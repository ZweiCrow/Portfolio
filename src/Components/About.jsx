import React, { useEffect, useRef, useState } from "react";
import "../Utils/Sass/about.scss";

const About = (props) => {
  const section = useRef();
  const [visibility, setVisibility] = useState(false);
  const [year, setYear] = useState(2001);
  const d = new Date()

  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      props.nav(entry.isIntersecting);
      if (entry.isIntersecting === true) {
        setVisibility(entry.isIntersecting);
      }
    });
    observer.observe(section.current);
    if (d.getMonth()+1 <= 5 ) {
      setYear(2002)
    } else if (d.getMonth()+1 >= 5) {
      setYear(2001)
    }
  }, []);


  return (
    <div
      id="About"
      ref={section}
      className={visibility ? "visible" : "invisible"}
    >
      <div id="AboutAnchor">
        <svg
          width="100"
          height="97"
          viewBox="0 0 100 97"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M99.3425 87.9809C92.9948 76.8401 83.0829 68.1595 71.2023 63.3363C77.1104 58.9052 81.4745 52.7276 83.6765 45.6784C85.8785 38.6292 85.8067 31.0659 83.4714 24.0598C81.136 17.0536 76.6554 10.9599 70.6643 6.64179C64.6732 2.32364 57.4753 0 50.0902 0C42.7051 0 35.5072 2.32364 29.5161 6.64179C23.525 10.9599 19.0445 17.0536 16.7091 24.0598C14.3737 31.0659 14.3019 38.6292 16.5039 45.6784C18.7059 52.7276 23.0701 58.9052 28.9781 63.3363C17.0976 68.1595 7.18567 76.8401 0.837953 87.9809C0.444626 88.6134 0.182475 89.3185 0.0670849 90.0542C-0.0483048 90.79 -0.014578 91.5415 0.166261 92.264C0.3471 92.9865 0.671359 93.6653 1.11976 94.2599C1.56816 94.8546 2.13155 95.353 2.77644 95.7256C3.42133 96.0982 4.13454 96.3373 4.87369 96.4288C5.61284 96.5202 6.36283 96.4621 7.07907 96.2579C7.79531 96.0537 8.46319 95.7076 9.04299 95.2401C9.62279 94.7726 10.1027 94.1934 10.4541 93.5367C18.8434 79.0361 33.6589 70.3875 50.0902 70.3875C66.5215 70.3875 81.337 79.0407 89.7263 93.5367C90.488 94.7615 91.6961 95.642 93.0952 95.9922C94.4943 96.3424 95.9747 96.1348 97.2235 95.4133C98.4724 94.6918 99.3917 93.5129 99.7871 92.1259C100.183 90.7389 100.023 89.2525 99.3425 87.9809ZM26.015 35.2007C26.015 30.4391 27.427 25.7844 30.0724 21.8252C32.7179 17.8661 36.4779 14.7803 40.8771 12.9581C45.2762 11.1359 50.1169 10.6592 54.7871 11.5881C59.4572 12.5171 63.747 14.81 67.114 18.177C70.4809 21.5439 72.7739 25.8337 73.7028 30.5039C74.6318 35.174 74.155 40.0147 72.3328 44.4139C70.5106 48.813 67.4248 52.5731 63.4657 55.2185C59.5065 57.8639 54.8519 59.2759 50.0902 59.2759C43.7073 59.2685 37.588 56.7297 33.0746 52.2163C28.5612 47.7029 26.0224 41.5836 26.015 35.2007Z"
            fill="#F0F8FF"
          />
        </svg>
        <p>A PROPOS DE MOI</p>
      </div>
      <p id="AboutText">
        Je suis âgé de {d.getFullYear()-year} ans et j'ai pour but de travailler au sein d’une
        équipe de création numérique. Je suis actuellement à la recherche d'un
        poste de développeur web.
        <br />
        <br />
        Je baigne dans le graphisme et dans les technologies depuis mon enfance, ce sont des domaines qui ont forgé ma personnalité et qui encore aujourd’hui me passionnent.
        <br />
        <br />
        Le développement web rassemble deux de mes passions qui sont le graphisme et la programmation, c’est ce qui m’a poussé à me lancer sur cette voie et plus particulièrement le côté front qui approfondit l’aspect graphique à l'instar du développement UI/UX.

      </p>
    </div>
  );
};

export default About;
