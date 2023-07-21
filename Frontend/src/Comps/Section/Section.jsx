import React, { useState} from "react";
import "./Section.css";

import Contact from "../ContactMeComp/Contact";

import ProfileBack from "./profile_back.jpg";

function Section({toggleDialog,setToggleDialgo}) {

  const onContactBtnClicked = () => {
    setToggleDialgo(!toggleDialog);
  };

  const downloadCvOnClick = () => {
     window.open('https://drive.google.com/file/d/1E-1fktTun_Z1t9_Hn-X5ueKFSzCWkJ3I/view');
  }

  return (
    <div className="sectionDiv">
      <div className="textDiv">
        <p>
          Hi,
          <br />
          I'am <span>{"</Somnath>"}</span>
          <br />
          Full Stack Developer
        </p>
        <Contact text="" isVisiable="true" toggleDialog = {toggleDialog} setToggleDialgo = {setToggleDialgo}/>
        <div className="buttonsDiv">
          <button onClick={onContactBtnClicked} className="contactBtn">
            Contact
          </button>
          <button onClick={downloadCvOnClick} className="cvBtn">Download CV</button>
        </div>
      </div>
      <div className="profileIconDiv">
        {/*<div className="profileIcon stylishRedious">*/}
          <img className="profileIcon stylishRedious" src= {ProfileBack} />
       {/* </div>*/}
        <div className="mobilePersonDetailsDiv">
          <p>{"</Somnath Gupta>"}</p>
          <label>Full Stack Web App Developer</label>
        </div>
      </div>
    </div>
  );
}

export default Section;
