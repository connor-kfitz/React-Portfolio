import React from "react";
import "../../styles/Resume.css";
import Footer from "../Footer.js";
import resume from "../../downloadable-files/Resume-Connor-Fitzsimmons.pdf"

function Resume() {
    return (
        <div>
            <div id="mainResume" className="flex">
                <div id="resumeContainer">
                    <a id="resumeDownload" href={resume} download>Resume Download</a>
                    <div id="profContainer">
                        <h1 id="profHeader">Proficiencies</h1>
                            <div>
                                <ul>
                                    <li className="profListItem">Problem Solving</li>
                                    <li className="profListItem">Leadership</li>
                                    <li className="profListItem">Interpersonal & Communication</li>
                                    <li className="profListItem">Time Management</li>
                                    <li className="profListItem">Creative</li>
                                    <li className="profListItem">Teamwork</li>
                                </ul>
                            </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Resume;