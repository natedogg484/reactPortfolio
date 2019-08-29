import React, { Component } from 'react';
// React Router
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// components
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
// stylesheet
import './App.css';
// Routes
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';


class App extends Component {
  render() {
    return (
      <Router>
        <Wrapper>
          <div className='container'>
            <Navbar />
            <div className='jumbotron bg-dark text-center'>
              <h1>Nathan Schmidt</h1>
              <p>Fullstack Developer || Falls Church, VA || nathangschmidt@gmail.com</p>
            </div>
            <Route path='/' exact component={Home} />
            <Route path='/About' exact component={About} />
            <Route path='/Contact' exact component={Contact} />
            {/* footer */}
            <div className="row" id="footer">
              <div className='col-md-3'></div>
              <div className='col-md-6 text-center' id='foot-content'>
                <p><a href='/Contact'>Contact</a> || <a href="/About">About</a> || <a href="/">Home</a></p>
                <p>Approved by Nathan G Schmidt</p>
              </div>
              <div className='col-md-3'></div>
            </div>
          </div>
        </Wrapper >
      </Router>
    );
  }
}
export default App;
