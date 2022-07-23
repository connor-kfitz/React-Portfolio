import React from "react";
import "../styles/Navbar.css";

function Nav({ currentPage, changePage}) {
    return (
        <nav>
            <div id="nav" className="flex">
                <ul className="navTabs" >
                    <li><a href="#about" onClick={() => changePage('About')} className={currentPage === 'About' ? "activeNavItem" : "navItem"}>About</a></li>
                    <li><a href="#project" onClick={() => changePage('Project')} className={currentPage === 'Project' ? "activeNavItem" : "navItem"}>Projects</a></li>
                    <li><a href="#stack" onClick={() => changePage('Stack')} className={currentPage === 'Stack' ? "activeNavItem" : "navItem"}>Stack</a></li>
                    <li><a href="#resume" onClick={() => changePage('Resume')} className={currentPage === 'Resume' ? "activeNavItem" : "navItem"}>Resume</a></li>

                </ul>
                <a id="contactNavItem" href="#contact" onClick={() => changePage('Contact')} className={currentPage === 'Contact' ? "activeNavItem" : "navItem"}>Contact</a>
            </div>
        </nav>
    )
}

export default Nav;