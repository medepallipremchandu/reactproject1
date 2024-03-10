import React from "react";
import "./About.css";
import tenth from "../images/384564-PC48W3-554-removebg-preview (1).png";
function About() {
    return(
        <>
        <br/><br/><br/>
        <div >
            <center><h1>About Me</h1></center>
        </div>
        <div id="container">
        <div id="image">
            <br/><br/><br/><br/><br/><br/><br/><br/>
            <img className="img1" src={tenth} alt="tenth"></img>
        </div>
        <div id="content">
        <h2 className="p1">Biography</h2>
        <br/>
        <p className="p">****************************************************************</p>
        <br/><right> <p className="gradient-underline2"></p> </right><br/>
       
            <h2 className="p1">Education</h2>
            <br/>
            <h5 className="p2">B.Tech in Computer Science And Engineering</h5>
            <p className="p">Koneru Lakshmaiah Education Foundation</p>
            <p className="p">Expected Graduation Date: Mar 2024</p>
            <br/>
            <h5 className="p2">Board Of Intermediate Education Andhra Pradesh</h5>
            <p className="p">Narayana Junior College</p>
            <p className="p">Graduation in Jun 2020 | MPC with 9.25 CGPA.</p>
            <br/>
            <h5 className="p2">Secondary School Of Education Andhra Pradesh</h5>
            <p className="p">Montessori (EM) High School</p>
            <p className="p">Graduation in April 2018 with 9.2 CGPA.</p>
            <br/><right> <p className="gradient-underline2"></p> </right><br/>
            
            <h2 className="p1">Internships</h2>
            <br/>
            <h5 className="p2">AI ML Virtual Internship</h5>
            <p className="p">AICTE | March-2022 May-2022</p>
            <br/>
            <h5 className="p2">AWS CLOUD Virtual Internship</h5>
            <p className="p">AICTE | October-2021 December-2021</p>
            <br/><right> <p className="gradient-underline2"></p> </right><br/>
            <h2 className="p1">Experience</h2>
            <br/>
            <h5 className="p2">Director of Technology</h5>
            <p className="p">Mayavi Tech Club | K L University</p>
            <p className="p">Where we work on AR, VR Technologies, and Game Development.</p>
            <center className="p4"><a href="https://klefmayavi.tech/" class="p3 btn btn-dark ">Know More About Mayavi</a></center>
            <br/><right> <p className="gradient-underline2"></p> </right><br/>
            <h2 className="p1">Hobbies</h2>
            <br/>
            <p className="p">Watching and working on (software) tool based projects</p>
            <p className="p">Working on Projects</p>
            <p className="p">Teaching</p>
            <p className="p">Playing physical as well as online games</p>
            <p className="p">Watching movies on ott platforms</p>
            <br/><br/><br/><br/>
        </div>  
        </div>        
        </>
    );
}
export default About;