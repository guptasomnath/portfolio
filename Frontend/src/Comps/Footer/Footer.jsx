import React from "react";
import "./Footer.css";

import { Icon } from '@iconify/react';

function Footer() {
 
  const onSocialIconClicked = (iconName) => {
      if(iconName === "linkdin"){
        window.open("https://www.linkedin.com/in/somnath-gupta-b8b844264");
      }else if(iconName === "github"){
        window.open("https://github.com/guptasomnath/");
      }
  }

  return (
    <div className="footerDiv">
          <div className="socialIcons">
            <Icon onClick={()=> onSocialIconClicked("linkdin")} className="fIcons" icon="ant-design:linkedin-filled" width="25" height="25" />
            <Icon onClick={()=> onSocialIconClicked("github")} className="fIcons" icon="mdi:github" width="25" height="25" />
          </div>
    </div>
  );
}

export default Footer;
