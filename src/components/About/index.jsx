import React from 'react'
import { AiFillHtml5 } from 'react-icons/ai'
import { 
    IoLogoJavascript, 
    IoLogoReact, 
    IoLogoNodejs,
    IoLogoCss3,
 } from 'react-icons/io5'


function About() {

    return (
        <section id="aboutme">
            <div className="about-container">
                <div className="title-header">About Me</div>
                <div className="about-section">
                    <div className="img-container">
                        <div className="about-image"></div>
                    </div>
                    <div className="about-text">
                        My name is Kelley Worthington. I am based out of Salt Lake City, Utah. I'm a brand new junior developer who is very eager to learn and understand. I have always had a love for tech and found a love for HTML/CSS as a young teenager and decided to make the leap and do my best to dive into a bootcamp and learn as much as I can.
                        <br />
                        <div id="skills">
                        <AiFillHtml5 style={{fontSize: '2em'}} /> <IoLogoReact style={{fontSize: '2em'}} /> <IoLogoJavascript style={{fontSize: '2em'}} /> <IoLogoCss3 style={{fontSize: '2em'}} />
                        <IoLogoNodejs style={{fontSize: '2em'}} />
                        </div>
                    </div>
                
                </div>
            </div>
        </section>
    )
}

export default About;