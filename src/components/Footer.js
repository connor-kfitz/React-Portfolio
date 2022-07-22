import React from "react";
import mail from "../images/mail.png"
import mailc from "../images/mailc.png"
import linked from "../images/linked.png"
import linkedc from "../images/linkedc.png"
import git from "../images/git.png"
import gitc from "../images/gitc.png"
import "../styles/Footer.css";



function Footer() {

    return (
        <footer>
        <div id="footer" className="flex">
            <ul className="flex">
                <li>
                    <a href="mailto:connorkfitzsimmons@gmail.com" className="navItem ">
                    <img 
                    src={mail}
                    onMouseOver={e => e.currentTarget.src = mailc}
                    onMouseOut={e => e.currentTarget.src = mail}
                    alt="Email Icon"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/connor-fitzsimmons-70158abb/" className="navItem">
                    <img 
                    src={linked}
                    onMouseOver={e => e.currentTarget.src = linkedc}
                    onMouseOut={e => e.currentTarget.src = linked}
                    alt="LinkedIn Icon"/>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/connor-kfitz" className="navItem">
                    <img 
                    src={git}
                    onMouseOver={e => e.currentTarget.src = gitc}
                    onMouseOut={e => e.currentTarget.src = git}
                    alt="Github Icon"/>
                    </a>
                </li>
            </ul>
            <div id="footerInfo" className="flex">
                <h4>Connor Fitzsimmons</h4>
                <h4>Full-Stack Developer</h4>
            </div>
        </div>
    </footer>
    )
}

export default Footer;