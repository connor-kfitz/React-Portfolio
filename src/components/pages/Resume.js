import React from "react";
import "../../styles/Resume.css";
import resume from "../../downloadable-files/Resume-Connor-Fitzsimmons.docx"

function Resume() {
    return (
        <div id="main">
            <a id="resumeDownload" href={resume} download>Resume Download</a>
            <div id="profContainer">
                <h2>Proficiencies</h2>
                    <div>
                        <h3>Technical</h3>
                        
                        <h3>Soft</h3>
                    </div>
            </div>
        </div>
    )
}

export default Resume;