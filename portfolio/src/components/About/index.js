import React, { Component } from 'react';


export default class About extends Component {
    render() {
        return (
            <div className='row'>
                <div className='col-md-1'></div>
                <div className='col-md-12 text-center' id='aboutMe'>
                    <div className="card">
                        <div class="card-body">
                            <h5 className="card-title">Getting to Know Me</h5>
                            <p className="card-text">I am a JavaScript/React fullstack developer, specializing in MERN fullstack development. I am begin to round out my skills with Python and Docker to focus more on Data Science and DevOps. I currently work for Booz Allen Hamilton as a Technologist.  </p>
                            <br></br>
                            <p className="card-text">Outside of work I enjoy rock climbing, snowboarding, playing video games, and Dungeons and Dragons. I am an avid player of D&D as well as League of Legends, and a plethora of RPGs. I rock climb at a local gym with my lovely girlfriend, and go snowboarding whenever weather and time permit.  </p>
                            <a href="/" className="card-link">Check out my projects!!</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-1'></div>
            </div>
        )
    }
}