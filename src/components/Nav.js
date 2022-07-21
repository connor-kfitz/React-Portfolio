import React from "react";
import "../styles/Navbar.css";

function Nav({ currentPage, changePage}) {
    return (
        <nav>
            <div id="nav" className="flex">
                <ul className="navTabs" >
                    <li><a href="#about" onClick={() => changePage('About')} className="navItem">About</a></li>
                    <li><a href="#project" onClick={() => changePage('Project')} className="navItem">Projects</a></li>
                    <li><a href="#resume" onClick={() => changePage('Stack')} className="navItem">Stack</a></li>
                </ul>
                <a href="">Contact</a>
            </div>
        </nav>
    )
}

export default Nav;