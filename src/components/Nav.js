import React from "react";
import "../styles/Navbar.css";

function Nav({ currentPage, changePage}) {
    return (
        <nav>
            <div id="nav" className="flex">
                <ul className="navTabs" >
                    <li><a href="#about" onClick={() => changePage('About')} class="navItem">About</a></li>
                    <li><a href="#project" onClick={() => changePage('Project')} className="navItem">Projects</a></li>
                    <li><a href="#resume" onClick={() => changePage('Resume')} className="navItem">Resume</a></li>
                </ul>
                <a href="">Contact</a>
            </div>
        </nav>
    )
}

export default Nav;