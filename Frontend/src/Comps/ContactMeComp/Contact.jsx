import React, { useState } from "react";
import "./Contact.css";

import { Icon } from '@iconify/react';

function Contact({ text, isVisiable, toggleDialog, setToggleDialgo}) {

  const onAnyImgClicked = () => {
    setToggleDialgo(!toggleDialog);
  };

  return (
    <div className="contactMeDiv">
        {isVisiable === "true" ? <label>{text}</label> : ""}
        <Icon onClick={onAnyImgClicked} className="icons" icon="material-symbols:phone-in-talk" width="23" height="23" color="#44474a" />
        <Icon onClick={onAnyImgClicked} className="icons" icon="mdi:whatsapp" width="23" height="23" color="#44474a"/>
        <Icon onClick={onAnyImgClicked} className="icons" icon="mdi:gmail" width="23" height="23" color="#44474a"/>
    </div>
  );
}

export default Contact;
