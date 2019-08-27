import React, { Component } from 'react';
// components
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import Card from './components/TechCard';
import ProjectCard from './components/ProjectCard'
// stylesheet
import './App.css';
// tech and projects
import tech from './tech.json';
import project from './projects.json';

class App extends Component {
  state = {
    tech,
    project
  }


  render() {
    return (
      <Wrapper>
        <div className='container'>
          <Navbar />
          <div className='jumbotron bg-dark text-center'>
            <h1>Nathan Schmidt</h1>
            <p>Fullstack Developer || Falls Church, VA || nathangschmidt@gmail.com</p>
          </div>
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
          {/* footer */}
          <div className="row" id="footer">
            <div className='col-md-3'></div>
            <div className='col-md-6 text-center' id='foot-content'>
              <p><a href='#'>Contact</a> || <a href="#">About</a> || <a href="#">Home</a></p>
              <p>Approved by Nathan G Schmidt</p>
            </div>
            <div className='col-md-3'></div>
          </div>
        </div>
      </Wrapper >
    );
  }
}
export default App;
