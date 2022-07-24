import React from "react";
import "../../styles/About.css";
import Footer from "../Footer.js"
import bitmojiIcon from "../../images/bitmojiAvatar.png"


function Main() {
    return (
            <div>
                <div id="main">
                    <div id="aboutMeContainer" className="">
                        <img id="avatarIcon" src={bitmojiIcon}></img>
                        <div id="aboutMeText">
                            <p>Hello, my name is <span className="red">Connor Fitzsimmons</span>.  I am a <span className="blue">Toronto</span> based <span className="lightGreen">Full-Stack Developer</span>, currently enrolled in a Full-Stack Devleoper course at <span className="red">The University of Toronto</span>.</p>
                            <br></br>
                            <p>In 2015 I began my post secondary education at the <span className="red">University of Ontario</span>, enrolling in their <span className="lightGreen">Mechanical Engineering</span> program.  After completing one year there, I transferred to the <span className="red">University of Guelph</span> in their equivalent program.  In 2020 I graduated from Guelph with my <span className="yellow">Bachelors</span> in <span className="lightGreen">Mechanical Engineering</span>, specalizing in <span className="blue">Mechatronics</span>.</p>
                            <br></br>
                            <p>Following graduation, I began working as a <span className="lightGreen">Project Coordinator</span> for <span className="blue">Black & McDonald's</span> <span className="red">Toronto Service Division</span>, January 2021.  I gained lots of valuable experience working this position.  I've planned, priced, and executed jobs valued over $300,000.  This has greatly improved me technical, organizational, and interpersonal skills, as they needed to be refind to preform well in the position. </p>
                            <br></br>
                            <p>In April 2022 I decided to take my career down another path, and resigned from my position at <span className="blue">Black & McDonald</span>.  Since then I have been enrolled in a <span className="lightGreen">Full-Stack Developer</span> Course offered by <span className="blue">The University of Toronto</span>. After I graduate in August 2022, I plan on seeking a job in the development field.</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
    )
}

export default Main;