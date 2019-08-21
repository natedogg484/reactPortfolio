import React from 'react';
// components
import Wrapper from './components/Wrapper'
// stylesheet
import './App.css';

function App() {
  return (
    <Wrapper>
      <div className='container'>
        <div className='jumbotron bg-dark text-center'>
          <h1>Nathan Schmidt</h1>
        </div>
        <div className="row">
          <div className='col-md-4'></div>
          <div className='col-md-4'></div>
          <div className='col-md-4'></div>
        </div>
      </div>
    </Wrapper>
  );
}

export default App;
