import React, { useState } from "react";
import Header from "./Header"
import Nav from "./Nav";
import Footer from "./Footer";
import About from "./pages/About";
import Project from "./pages/Project";

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Project') {
            return <Project />;
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