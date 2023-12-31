import React, { useEffect, useRef, useState } from "react";
import "../Utils/Sass/contact.scss";
import emailjs from '@emailjs/browser';

const Contact = (props) => {
  const [visibility,setVisibility] = useState(false)
  const [nom, setNom] = useState("");
  const [mail, setMail] = useState("");
  const [sujet, setSujet] = useState("");
  const [message, setMessage] = useState("");

  const WarningNom = useRef()
  const WarningMail = useRef()
  const WarningSujet = useRef()
  const WarningMessage = useRef()
  const ConfirmMessage = useRef()
  const section = useRef()

  const MailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

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


  const Submit = (e)=> {
    e.preventDefault();
    if(nom === ""){
      WarningNom.current.classList.add("show")
    }else{
      WarningNom.current.classList.remove("show")
    }
    if(mail === ""){
      WarningMail.current.classList.add("show")
    }else{
      WarningMail.current.classList.remove("show")
    }
    if(sujet === ""){
      WarningSujet.current.classList.add("show")
    }else{
      WarningSujet.current.classList.remove("show")
    }
    if(message === ""){
      WarningMessage.current.classList.add("show")
    }else{
      WarningMessage.current.classList.remove("show")
    }
    if (nom !== "" && mail !== "" && sujet !== "" && message !== ""){
      VerifSubmit()
    }
  }
  const VerifSubmit = ()=>{
    if (MailRegEx.test(mail)) {
      const warnMail = document.querySelector("#WarningMail")
      WarningMail.current.classList.remove("show")
      warnMail.innerHTML = "Champ Obligatoire";
    } else {
      const warnMail = document.querySelector("#WarningMail")
      warnMail.innerHTML = "Adresse mail invalide";
      WarningMail.current.classList.add("show")
    }

    const contenu = {
      nom: nom,
      mail: mail,
      sujet: sujet,
      message: message,
    }

    if(MailRegEx.test(mail) && mail !== ""){
      emailjs.send("service_eh5kqkb","template_79t7cyn",contenu,'MgUe1CbQZj3DJCFG-');
      setTimeout(()=>{
        ConfirmMessage.current.classList.add("display")
        setTimeout(()=>{
          ConfirmMessage.current.classList.add("show")
          setTimeout(()=>{
            ConfirmMessage.current.classList.remove("show")
            setNom("")
            setMail("")
            setSujet("")
            setMessage("")
            setTimeout(()=>{
              ConfirmMessage.current.classList.remove("display")
            },1000)
          },1000)
        },10)
      },500)
    }
  }

  return (
    <div id="Contact" ref={section} className={(visibility)? "visible" : "invisible"}> 
      <div id="ContactAnchor">
        <svg
          width="100"
          height="80"
          viewBox="0 0 100 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 10C100 4.5 95.5 0 90 0H10C4.5 0 0 4.5 0 10V70C0 75.5 4.5 80 10 80H90C95.5 80 100 75.5 100 70V10ZM90 10L50 35L10 10H90ZM90 70H10V20L50 45L90 20V70Z"
            fill="#F0F8FF"
          />
        </svg>
        <p>CONTACT</p>
      </div>
      <div id="Confirm" ref={ConfirmMessage}>
        <p>Message envoyé</p>
      </div>

      <div id="ContactTitle">
        <p>
          Envie de me <span>contacter</span> ?
        </p>
      </div>

      <form id="ContactForm" onSubmit={Submit}>
        <div id="Inputs">
          <div className="ContactInput">
            <label htmlFor="ContactNom" >NOM <span>&nbsp;*</span></label>
            <input id="ContactNom" value={nom} type="text" placeholder="Votre Nom" onChange={(e) => setNom(e.target.value)}/>
            <p className="Warning" ref={WarningNom}>Champ Obligatoire</p>
          </div>

          <div className="ContactInput">
            <label htmlFor="ContactMail" >EMAIL <span>&nbsp;*</span></label>
            <input id="ContactMail" value={mail} type="text" placeholder="Votre adresse mail" onChange={(e) => setMail(e.target.value)}/>
            <p className="Warning" id="WarningMail" ref={WarningMail}>Champ Obligatoire</p>
          </div>

          <div className="ContactInput Message">
            <label htmlFor="ContactSujet" >SUJET <span>&nbsp;*</span></label>
            <input id="ContactSujet" value={sujet} type="text" placeholder="Le sujet de votre message" onChange={(e) => setSujet(e.target.value)}/>
            <p className="Warning" ref={WarningSujet}>Champ Obligatoire</p>
          </div>

          <div className="ContactInput Message">
            <label htmlFor="ContactMessage" >MESSAGE <span>&nbsp;*</span></label>
            <textarea id="ContactMessage" value={message} type="text" placeholder="Votre Message" onChange={(e) => setMessage(e.target.value)}/>
            <p className="Warning" ref={WarningMessage}>Champ Obligatoire</p>
          </div>
        </div>

        <button>ENVOYER</button>
      </form>
    </div>
  );
};

export default Contact;
