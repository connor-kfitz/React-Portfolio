import React from "react";
import "../../styles/Resume.css";
import resume from "../../downloadable-files/Resume-Connor-Fitzsimmons.docx"

function Resume() {
    return (
        <main>
            <a href={resume} download>Click to Download</a>
        </main>
    )
}

export default Resume;