import React from 'react';
import "./SkillsListView.css";

function SkillsListView({image, title}) {
  return (
    <div className='skillCardView'>
        <img src = {image} />
        <p>{title}</p>
    </div>
  )
}

export default SkillsListView