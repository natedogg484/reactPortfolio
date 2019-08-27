import React from "react";
import './index.css'

const ProjectCard = props => (
    <div className="card text-center" id="project-card">
       <div className="card-title">
           <h5>{props.title}</h5>
       </div>
       <div className='card-body'>
           <p>{props.description}</p>
       </div>
       <a href={props.link} target='_blank'>Check out the Site!</a>
    </div>
);

export default ProjectCard;