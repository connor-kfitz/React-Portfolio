import React from "react";
import "../styles/Footer.css";


function Footer() {
    return (
        <footer>
        <div id="footer" class="flex">
            <ul class="flex">
                <li><a href="" class="navItem "><img src="./mail.png" alt=""></img></a></li>
                <li><a href="" class="navItem image"><img src="./linked.png" alt=""></img></a></li>
                <li><a href="" class="navItem"><img src="./git.png" alt=""></img></a></li>
            </ul>
            <div id="footerInfo" class="flex">
                <h4>Connor Fitzsimmons</h4>
                <h4>Full-Stack Developer</h4>
            </div>
        </div>
    </footer>
    )
}

export default Footer;