import React, { useState } from "react";
import Nav from "./Nav";
// import Footer from "./Footer";
import About from "./pages/About";
import Project from "./pages/Project";
import Stack from "./pages/Stack";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact"

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Project') {
            return <Project />;
        }
        if (currentPage === 'Stack') {
            return <Stack />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
    };

    const changePage = (page) => setCurrentPage(page);

    return (
        <div>
            <Nav currentPage={currentPage} changePage={changePage}/>
            {renderPage()}
        </div>
    );
}