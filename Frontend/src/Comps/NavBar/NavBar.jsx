import React, { useEffect, useState } from "react";
import "./NavBar.css";
import menu from "./menu.png";
import home from "./home.png";
import projects from "./projects.png";
import skills from "./skills.png";
import about from "./about.png";
import close from "./close.png";
import { Link, useLocation } from "react-router-dom";
import { baseUrl } from "../../App";



function NavBar() {
  const routeLocation = useLocation();

  const pageNames = [baseUrl, baseUrl + "/", `${baseUrl}/projects`, `${baseUrl}/skills`, `${baseUrl}/about`];
  let colorArray = ["#000", "#000", "#000", "#000", "#000"];
  const pageLoaction = routeLocation.pathname;
  const setColorIndex = pageNames.indexOf(pageLoaction);

  if(setColorIndex == 0 || setColorIndex == 1){
    colorArray[0] = "#a3a5a4";
  }else{
    colorArray[setColorIndex] = "#a3a5a4";
  }
  

  const [animation, setAnimation] = useState();
  const [icon, setIcon] = useState({ iconSrc : menu, iconName : "menu" });
  const [changeColor, setChangeColor] = useState(colorArray);

  const onMenuImageClicked = () => {
    if (icon.iconName == "menu") {
      setIcon({iconSrc : close,iconName : "close"});
      setAnimation({ animation: "slideDown 0.5s forwards" });
    } else {
      setIcon({ iconSrc : menu, iconName : "menu" });
      setAnimation({ animation: "slideUp 0.5s forwards" });
    }
  };

  const onMenuOptionClicked = (option, index) => {
    const colorIndex = pageNames.indexOf(pageLoaction);
    
    if(colorIndex == 0 || colorIndex == 1){
      colorArray[0] = "#000";
    }else{
      colorArray[colorIndex] = "#000";
    }
    
    colorArray[index] = "#a3a5a4";
    setChangeColor(colorArray);
    setIcon({ iconSrc : menu, iconName : "menu" });
    setAnimation({ animation: "slideUp 0.5s forwards" });
  };

  return (
    <div className="navBar">
      <div className="logoDiv">
        <img className="menuIconAndCloseIcon" onClick={onMenuImageClicked} src={icon.iconSrc} />
        <label>Somnath</label>
      </div>
      <div style={animation} className="menuItemsDiv">
        <div className="menuItems">
          <img src={home} />
          <Link
            to={baseUrl}
            style={{ color: changeColor[0] }}
            onClick={() => onMenuOptionClicked("Home", 0)}
          >
            Home
          </Link>
        </div>
        <div className="menuItems">
          <img src={projects} />
          <Link
            to={baseUrl + "/projects"}
            style={{ color: changeColor[2] }}
            onClick={() => onMenuOptionClicked("Projects", 2)}
          >
            Projects
          </Link>
        </div>
        <div className="menuItems">
          <img src={skills} />
          <Link
            to={baseUrl + "/skills"}
            style={{ color: changeColor[3] }}
            onClick={() => onMenuOptionClicked("Skills", 3)}
          >
            Skills
          </Link>
        </div>
        <div className="menuItems">
          <img src={about} />
          <Link
            to = {baseUrl + "/about"}
            style={{ color: changeColor[4] }}
            onClick={() => onMenuOptionClicked("About", 4)}
          >
            About
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
