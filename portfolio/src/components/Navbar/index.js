import React, { Component } from 'react';
import './index.css'


export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navigator">
                <a className="navbar-brand" href="https://docs.google.com/document/d/1VMtq_k8sHVKxWfwsh741hllx3c1lx86M1CUhcx3mYrI/edit?usp=sharing" target="_blank">Resume</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.linkedin.com/in/nathan-schmidt-6a294a114/" target="_blank">LinkedIn</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://github.com/natedogg484" target="_blank">Github</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}