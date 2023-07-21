import React, { useRef, useState } from "react";
import "./ShowProject.css";
import close from "./close.png";

function ShowProject({ dialog, setDialog }) {
  const descriptionRef = useRef();
  if (descriptionRef.current != undefined) {
    descriptionRef.current.innerHTML = dialog.projectDetails.description;
  }
  return (
    <div
      style={{ display: dialog.visiablity == false ? "none" : "flex" }}
      className="showProjectDialog"
    >
      <div className="showProjectCardView">
        <div className="showProjectNavBar">
          <img
            onClick={() =>
              setDialog({
                visiablity: false,
                projectDetails: dialog.projectDetails,
              })
            }
            src={close}
          />
        </div>
        <div className="showProjectContent">
          <h1>{dialog.projectDetails.title}</h1>
          <div ref={descriptionRef} className="descriptionText">
            Project Description
          </div>
        </div>
       <div className="showProjectFooter"></div>
      </div>
    </div>
  );
}

export default ShowProject;
