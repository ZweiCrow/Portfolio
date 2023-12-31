import React, { useEffect, useRef } from "react";
import "../Utils/Sass/intro.scss";

const Intro = (props) => {
  const section = useRef()

  useEffect(()=>{
    const observer = new IntersectionObserver((entries)=>{
      const entry = entries[0]
        props.nav(entry.isIntersecting)
    })
    observer.observe(section.current)
  },[])

  
  return (
    <div id="Intro" ref={section}>
      <div id="IntroAnchor">
        <svg
          width="20"
          height="17"
          viewBox="0 0 20 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 2.69L15 7.19V15H13V9H7V15H5V7.19L10 2.69ZM10 0L0 9H3V17H9V11H11V17H17V9H20L10 0Z"
            fill="#F0F8FF"
          />
        </svg>
        <p>INTRODUCTION</p>
      </div>
      <p>Christopher Emidof</p>
      <p>Développeur web - Front-end</p>
      <div id="ToAbout" onClick={props.about}>Qui-suis je?</div>
    </div>
  );
};

export default Intro;
