import React from "react";
import "../../styles/Stack.css";
import Footer from "../Footer.js";
import reactIcon from "../../images/stack-images/react-logo.png";
import nodeIcon from "../../images/stack-images/node-js.webp"
import mongoIcon from "../../images/stack-images/mongo_db.webp"
import expressIcon from "../../images/stack-images/express.png"
import htmlIcon from "../../images/stack-images/html5.png"
import cssIcon from "../../images/stack-images/css.png"
import javaIcon from "../../images/stack-images/JavaScript-logo.png"
import bootStrapIcon from "../../images/stack-images/bootstrap5-logo.jpeg"
import mySqlIcon from "../../images/stack-images/mySql-logo.png"
import handlebarsIcon from "../../images/stack-images/handlebar.png"

import { motion } from 'framer-motion'


function Stack() {
    return (
    <div>

        <div id="mainStack" className="flex">
            <div id="stackContainer">

                <h1 className="stackTitle">MERN</h1>
                <div className="stackIconOuterContainer flex"> 
                    <div className="flex stackIconSingleContainer">
                        <h4>React</h4>
                        <motion.img src={reactIcon} alt="React Icon" className="iconImage" whileHover={{ rotate: 360, transition: { repeat: Infinity, repeatType: 'loop', duration: 5 } }}/>
                    </div>
                    <div className="flex stackIconSingleContainer">
                        <h4>Node.Js</h4>
                        <motion.img src={nodeIcon} alt="Node.Js Icon" className="iconImage" whileHover={{ rotate: [0, 30, 90, 150, 210, 270, 330, 360], transition: { repeat: Infinity, repeatType: 'loop', duration: 6 } }}/>
                    </div>
                    <div className="flex stackIconSingleContainer">
                        <h4>MongoDB</h4>
                        <motion.img src={mongoIcon} alt="MongoDB Icon" className="iconImage" whileHover={{ rotate: [0, 45, -45], transition: { yoyo: Infinity, repeatType: 'loop', duration: 4 } }}/>
                    </div>
                    <div className="flex stackIconSingleContainer lastItemAlign">
                        <h4>Express.Js</h4>
                        <motion.img src={expressIcon} alt="Express.Js Icon" className="iconImage" whileHover={{ scale: 1.2, transition: {duration: 1, yoyo: Infinity} }}/>
                    </div>
                </div>

                <h1 className="stackTitle">Front-End</h1>
                <div className="stackIconOuterContainer flex">
                    <div className="flex stackIconSingleContainer">
                        <h4>HTML 5</h4>
                        <motion.img src={htmlIcon} alt="HTML5 Icon" className="iconImage" whileHover={{ x:[0, 15, -15, 0], transition: {duration: 2, yoyo: Infinity}}}/>
                    </div>
                    <div className="flex stackIconSingleContainer">
                        <h4>CSS 3</h4>
                        <motion.img src={cssIcon} alt="CSS3 Icon" className="iconImage" whileHover={{ y:[0, -10, 10, 0], transition: {duration: 2, yoyo: Infinity}}}/>
                    </div>
                    <div className="flex stackIconSingleContainer">
                        <h4>JavaScript</h4>
                        <motion.img src={javaIcon} alt="JavaScript Icon" className="iconImage" whileHover={{ rotate: [0, 90, 180, 270, 360], transition: { repeat: Infinity, repeatType: 'loop', duration: 6 } }}/>
                    </div>
                    <div className="flex stackIconSingleContainer">
                        <h4>Bootstrap</h4>
                        <motion.img src={bootStrapIcon} alt="BootStrap Icon" className="iconImage" whileHover={{ x:[0, -10, 10, 10, -10, -10, 0], y:[0, -10, -10, 10, 10, -10, 0], transition: {duration: 3, repeatType: "loop", repeat: Infinity}}}/>
                    </div>
                </div>

                <h1 className="stackTitle">Back-End</h1>
                <div className="stackIconOuterContainer flex">  
                    <div className="flex stackIconSingleContainer test">
                        <h4>mySql</h4>
                        <motion.img src={mySqlIcon} alt="mySql Icon" className="iconImage" whileHover={{ rotate:[0, 0, -10, 0, 0,], x:[0, -10, -10, -10, 20, 0], y:[0, -10, -10, 10, 10, 0], transition: {duration: 2, repeatType: "loop", repeat: Infinity} }}/>
                    </div>
                    <div className="flex stackIconSingleContainer">
                        <h4>Handlebars</h4>
                        <motion.img src={handlebarsIcon} alt="Handlebars Icon" className="iconImage"whileHover={{ x:[0, -10, 0, 10, 0, 10, 0, -10, 0], y:[0, -10, 0, -10, 0, 10, 0, 10, 0], transition: {duration: 7, repeatType: "loop", repeat: Infinity} }}/>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
    );
}

export default Stack;