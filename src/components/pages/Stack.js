import React from "react";
import "../../styles/Stack.css";
import reactIcon from "../../images/stack-images/react-logo.png";
import nodeIcon from "../../images/stack-images/node-js.webp"
import mongoIcon from "../../images/stack-images/mongo_db.webp"
import expressIcon from "../../images/stack-images/express.png"
import htmlIcon from "../../images/stack-images/html5.svg"
import cssIcon from "../../images/stack-images/css3-logo.png"
import javaIcon from "../../images/stack-images/JavaScript-logo.png"
import bootStrapIcon from "../../images/stack-images/bootstrap5-logo.jpeg"
import mySqlIcon from "../../images/stack-images/mySql-logo.png"
import handlebarsIcon from "../../images/stack-images/handlebars-logo.png"


function Stack() {
    return (
        <div id="main">
            <h1 className="stackTitle">MERN</h1>
            <div className="stackIconOuterContainer flex">
                
                <div className="flex stackIconSingleContainer">
                    <h4>React</h4>
                    <img src={reactIcon} className="iconImage"/>
                </div>

                <div className="flex stackIconSingleContainer">
                    <h4>Node.Js</h4>
                    <img src={nodeIcon} className="iconImage"/>
                </div>

                <div className="flex stackIconSingleContainer">
                    <h4>MongoDB</h4>
                    <img src={mongoIcon} className="iconImage"/>
                </div>

                <div className="flex stackIconSingleContainer lastItemAlign">
                    <h4>Express.Js</h4>
                    <img src={expressIcon} className="iconImage"/>
                </div>
            </div>

        <h1 className="stackTitle">Front-End</h1>
        <div className="stackIconOuterContainer flex">
                
                <div className="flex stackIconSingleContainer">
                    <h4>HTML 5</h4>
                    <img src={htmlIcon} className="iconImage"/>
                </div>

                <div className="flex stackIconSingleContainer">
                    <h4>CSS 3</h4>
                    <img src={cssIcon} className="iconImage"/>
                </div>

                <div className="flex stackIconSingleContainer">
                    <h4>JavaScript</h4>
                    <img src={javaIcon} className="iconImage"/>
                </div>

                <div className="flex stackIconSingleContainer">
                    <h4>Bootstrap</h4>
                    <img src={bootStrapIcon} className="iconImage"/>
                </div>
            </div>

        <h1 className="stackTitle">Back-End</h1>
        <div className="stackIconOuterContainer flex">
                
                <div className="flex stackIconSingleContainer test">
                    <h4>mySql</h4>
                    <img src={mySqlIcon} className="iconImage"/>
                </div>

                <div className="flex stackIconSingleContainer">
                    <h4>Handlebars</h4>
                    <img src={handlebarsIcon} className="iconImage"/>
                </div>
            </div>
        </div>
    )
}

export default Stack;