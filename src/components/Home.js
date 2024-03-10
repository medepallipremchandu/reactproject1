import React from "react";
import "./Home.css";
// import mearn from "../images/mearnportfolio2.jpg";
import cartoon from "../images/sysadmin_03-removebg-preview.png";
// import prem from "../images/premnew.png"

function Home() {
    return(
        <>
        <div className="gradient-background">
        <div class="container1 " id="content1">
        {/* <img src={mearn} alt="darkimg" width="100%" height="750"></img> */}
        <img src={cartoon} alt="prem" class="prem" width="500" height="500"></img>
        <div class="righted">
        <right><h3>INTRODUCTION</h3>
        <h1>Hi I'm Medepalli Prem Chandu, a</h1>
        <h1>Computer Science Student</h1>
        <p className="pr">" I'm a student working towards my B.Tech in computer science having just finished my 4th year 1st semister at K L University. Throught my studies, I have focusing on machine learning, artificial intelligence, cybersecurity, ar&vr, and web developement "</p></right>
        <div class="hstack gap-3">
        <div class="bg-lightms-auto">
            <h2 className="em">1+</h2>
            <h4>PROJECTS COMPLETED</h4>
        </div>
        <div class="vr"></div>
        <div class="bg-lightms-auto">
            <h2 className="em">1+</h2>
            <h4>PUBLICATIONS COMPLETED</h4>
        </div>
        <div class="vr"></div>
        <div class="bg-lightms-auto">
            <h2 className="em">4+</h2>
            <h4>GLOBAL CERTIFICATES ACHEIVED</h4>
        </div>
        </div>        
        </div> <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <div>
        <h2 className="mm">Use Demo Credentials Username: <ua className="orange">prem</ua> && Password: <ua className="orange">prem</ua> to login</h2>
        </div>               
        </div>        
        </div>
        </>
    );
} 
export default Home;