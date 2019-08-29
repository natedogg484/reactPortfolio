import React, { Component } from 'react';
// components
import Wrapper from '../Wrapper'
import Card from '../TechCard';
import ProjectCard from '../ProjectCard'
// Local Data
import tech from './tech.json';
import project from './projects.json';


export default class Home extends Component {
    state = {
        tech,
        project
    }


    render() {
        return (
            <Wrapper>
                {/* technologies */}
                <div className="row">
                    <div className='col-md-2'></div>
                    <div className='col-md-8 text-center' id="tech-box">
                        <h3>Familiar Technologies</h3>
                        {this.state.tech.map(tech => (
                            <Card
                                alt={tech.name}
                                image={tech.image}
                            />
                        ))}
                    </div>
                    <div className='col-md-2'></div>
                </div>
                {/* projects */}
                <div className="row">
                    <div className='col-md-2'></div>
                    <div className='col-md-8 text-center' id="project-box">
                        <h3>Completed Projects</h3>
                        {this.state.project.map(project => (
                            <ProjectCard
                                title={project.title}
                                description={project.description}
                                link={project.link}
                            />
                        ))}</div>
                    <div className='col-md-2'></div>
                </div>
            </Wrapper>
        )
    }
}