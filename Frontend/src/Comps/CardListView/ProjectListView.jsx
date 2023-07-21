import React, { useRef, useState } from "react";
import "./ProjectListView.css";

function Projects({
  ImageURL,
  ProjectTitle,
  ProjectDescription,
  Time,
  RedirectURL,
  dialog,
  setDialog 
}) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const descriptionRef = useRef();

  if(descriptionRef.current != undefined){
    descriptionRef.current.innerHTML = ProjectDescription.length > 80 ? ProjectDescription.substring(0,80) + "..." : ProjectDescription;
  }

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    // handle error loading image
  };

  const onCardViewClicked = () => {
     setDialog({
      visiablity: !dialog.visiablity,
      projectDetails: {
        imgUrl: ImageURL,
        title: ProjectTitle,
        description: ProjectDescription,
        redirectURl: RedirectURL
      }
     });
  };

  return (
      <div onClick={onCardViewClicked} className="cardViewDiv">
        <div
          style={{
            display: imageLoaded === false ? "block" : "none", 
            aspectRatio: imageLoaded === false ? "16 / 9" : "0 / 0",
          }}
          className="placeholder-image"
        ></div>
        <img
          className="cardViewThumnails"
          src={ImageURL}
          loading="lazy"
          onLoad={handleImageLoad}
          onError={handleImageError}
          style={{
            height: imageLoaded === false ? "0" : "auto",
            aspectRatio: imageLoaded === false ? "0 / 0" : "16 / 9",
            position: imageLoaded === false ? "fixed" : "static",
          }}
        />

        <div className="videoDetails">
          <div className="titleSubtitleDiv">
            <h1>{ProjectTitle}</h1>
            <label ref={descriptionRef}>{ProjectDescription.length > 80 ? ProjectDescription.substring(0,80) + "..." : ProjectDescription}</label>
          </div>
          <div className="cardViewFooter">
            <label>{Time}</label>
            <div>
              <button
                onClick={() => window.open(RedirectURL)}
                className="watchBtn"
              >
                View
              </button>
              {/*<button className="bookmarkBtn">Download</button>*/}
            </div>
          </div>
        </div>
      </div>
  );
}

export default Projects;
