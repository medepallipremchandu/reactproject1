import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';

import "./skills.css"
function Skill(){
    return(
        <>
        <br/><br/><br/>
        <center><h3>Competencies</h3></center>
        <div id="content1">
        <center><h1>Technical Competencies</h1></center>
        <center><p className="ol">These are technical skills that I have aquired thus far in my computer science career.
                    I am not claiming to be a master in all of these skills, that would be amazing, but it is simply not true.
                    With that said, I am confident that I can hold a position that utilizes any of the following competencies 
                    and increase my mastery in any of these skills if needed.
        </p></center>
        <br/>
        <p   class="gradient-underline1"></p>
        <br/>
        <div class="row gy-4">
            <div class="col-sm-6 col-lg-4 s1">
              <div class="feature-box-01 media">
                  <div class="icon"><i class="bi bi-phone"></i></div>
                    <div class="feature-content col">
                    <h5 class="card-title ho">Languages</h5>
                    <br/>
                    <p class="card-text">ReactJs, NextJs, C++, Python, Java, C, JavaScript, MySQL, HTML, CSS</p>
                            </div>
                    </div>
            </div>
        {/* <div class="col-sm-6 col-lg-4">
                        <div class="feature-box-01 media">
                            <div class="icon"><i class="bi bi-laptop"></i></div>
                            <div class="feature-content col">
                            <h5 class="card-title ho">Coding Methodologies</h5>
                            <br/>
                            <p class="card-text"></p>
                            </div>
                        </div>
                    </div> */}
                    <div class="col-sm-6 col-lg-4 s1">
                        <div class="feature-box-01 media">
                            <div class="icon"><i class="bi bi-triangle"></i></div>
                            <div class="feature-content col">
                            <h5 class="card-title ho">Project Management</h5>
                            <br/>
                            <p class="card-text">Maven, GitHub, Jupyter Notebooks, Presentation Skills, Team Leadership/Management, Great Sense of Humor</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-4 s1">
                        <div class="feature-box-01 media">
                            <div class="icon"><i class="bi bi-columns"></i></div>
                            <div class="feature-content col">
                            <h5 class="card-title ho">Interests</h5>
                            <br/>
                            <p class="card-text">Software Engineering, Cyber-Security, Machine Learning, Artificial Intelligence</p>
                            </div>
                        </div>
                    </div>
                    {/* <div class="col-sm-6 col-lg-4">
                        <div class="feature-box-01 media">
                            <div class="icon"><i class="bi bi-globe2"></i></div>
                            <div class="feature-content col">
                            <h5 class="card-title ho">Relevant Courses</h5>
                            <br/>
                            <p class="card-text">Courses done</p>
                                    
                            </div>
                        </div>
                    </div> */}
                    <div class="col-sm-6 col-lg-4 s1">
                        <div class="feature-box-01 media">
                            <div class="icon"><i class="bi bi-distribute-vertical"></i></div>
                            <div class="feature-content col">
                            <h5 class="card-title ho">Development</h5>
                            <br/>
                            <p class="card-text">Linux, Windows, Virtual Machines, React, Bootstrap, Numpy, MatPlotLib, Pandas, SparkAr</p>
                            </div>
                        </div>
                        </div>
                        </div> 
                        <br/><br/><br/><br/><br/>
                        </div>                                              
        </>
    );
}
export default Skill;