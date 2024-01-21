import React, { useRef, useState } from "react";
import Card from "./Card";
import NavBar from "./NavBar";
import "../Utils/Sass/home.scss"
import Intro from "./Intro";
import About from "./About";
import Resume from "./Resume";
import Skills from "./Skills";
import Contact from "./Contact";
import Projets from "./Projets";

const Home = () => {
  const about = useRef()
  const resume = useRef()
  const skills = useRef()
  const projects = useRef()
  const contact = useRef()

  const [AnchorIntro,setAnchorIntro] = useState(false)
  const [AnchorAbout,setAnchorAbout] = useState(false)
  const [AnchorResume,setAnchorResume] = useState(false)
  const [AnchorSkills,setAnchorSkills] = useState(false)
  const [AnchorProjets,setAnchorProjets] = useState(false)
  const [AnchorContact,setAnchorContact] = useState(false)

  const scrollToIntro = ()=>{
    window.scrollTo(0, 0);
  }
  const scrollToAbout = ()=>{
    about.current.scrollIntoView()
  }
  const scrollToResume = ()=>{
    resume.current.scrollIntoView()
  }
  const scrollToSkills = ()=>{
    skills.current.scrollIntoView()
  }
  const scrollToProjects = ()=>{
    projects.current.scrollIntoView()
  }
  const scrollToContact = ()=>{
    contact.current.scrollIntoView()
  }

  return (
    <>
      <Card contact={scrollToContact} />
      <div id="Middle">
        <Intro about={scrollToAbout} nav={(x)=>{setAnchorIntro(x)}}/>
        <div ref={about} style={{height: "200px"}}></div>
        <About nav={(x)=>{setAnchorAbout(x)}}/>
        <div ref={resume} style={{height: "200px"}}></div>
        <Resume nav={(x)=>{setAnchorResume(x)}} />
        <div ref={skills} style={{height: "200px"}}></div>
        <Skills nav={(x)=>{setAnchorSkills(x)}} />
        <div ref={projects} style={{height: "200px"}}></div>
        <Projets nav={(x)=>{setAnchorProjets(x)}} />
        <div ref={contact} style={{height: "200px"}}></div>
        <Contact nav={(x)=>{setAnchorContact(x)}} />
      </div>
      <NavBar
        intro={scrollToIntro}
        about={scrollToAbout}
        resume={scrollToResume}
        skills={scrollToSkills}
        projects={scrollToProjects}
        contact={scrollToContact}
        anchorIntro={AnchorIntro}
        anchorAbout={AnchorAbout}
        anchorResume={AnchorResume}
        anchorSkills={AnchorSkills}
        anchorProjets={AnchorProjets}
        anchorContact={AnchorContact}
      />
    </>
  );
};

export default Home;
