import React, { useState } from "react";
import "./PopUpDialog.css";
import closeIcon from "../NavBar/close.png";

import { Icon } from '@iconify/react';

function PopUpDialog({ toggleDialog, setToggleDialgo }) {
  const onCloseBtnClicked = () => {
    setToggleDialgo(!toggleDialog);
  };
  
  return (
    <div
      style={{ display: toggleDialog === true ? "flex" : "none" }}
      className="popUpDialog"
    >
      <div className="dialogBody">
        <div className="dialogHead">
          <label>Contact Me With</label>
          <img onClick={onCloseBtnClicked} src={closeIcon} />
        </div>
        <div className="dialogContent">
          <div className="imageAndText">
           <Icon icon="material-symbols:phone-in-talk" width="23" height="23" />
            <span>+91 9382413005</span>
          </div>
          <div className="imageAndText">
            <Icon icon="mdi:whatsapp" width="23" height="23" />
            <span>+91 9382413005</span>
          </div>
          <div className="imageAndText">
            <Icon icon="mdi:gmail" width="23" height="23" />
            <span>somnathgupta112@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopUpDialog;
