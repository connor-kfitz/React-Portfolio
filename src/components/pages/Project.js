import React from "react";
import Footer from "../Footer.js"
import "../../styles/Project.css";
import oddJobsPicture from "../../images/OddJobsPicture.png"
import techBlogHomepage from "../../images/Tech-Blog-Homepage.png"
import breweryNearMeHomepage from "../../images/Brewery-Near-Me-Homepage.png"
import socialNetworkInsomnia from "../../images/Social-Network-Insomnia.JPG"
import reactPortfolioHomepage from "../../images/React-Portfolio-Homepage.png"
import employeeTrackerHomepage from "../../images/Employee-Tracker-Homepage.JPG"



function Project() {

    return (
        <div>
        <div id="view">
            <div id="mainProject" className="flex">
                <div id="projectOne" className="projectCard flex">
                    <h1>Odd Jobs</h1>
                    <p>Full-stack MERN application that allows users to post and search for small jobs</p>
                    <img src={oddJobsPicture} className="projectImage" alt="Odd Jobs Homepage"></img>
                    <h2>React | JavaScript | Node.JS | Express.JS | MongoDB | Apollo GraphQL | JSON Web Tokens | Bcrypt | Heroku</h2>
                    <div className="projectLinkContainer flex">
                        <a href="https://project3-oddjobs.herokuapp.com/"><button>Deployed Application</button></a>
                        <a href="https://github.com/JoelCronin/OddJobs"><button>Github Repository</button></a>
                    </div>
                </div>
                <div id="projectTwo" className="projectCard flex">
                    <h1>Tech Blog Forum</h1>
                    <p>Full-stack application where users can post and comment on tech related thoughts</p>
                    <img src={techBlogHomepage} className="projectImage" alt="Tech Blog Forum Homepage"></img>
                    <h2>HTML | CSS | JavaScript | Node.JS | Express.JS | mySql | Handlebars | Express Session | Sequelize | Bcrypt | Dotenv</h2>
                    <div className="projectLinkContainer flex">
                        <a href="https://vast-shore-46783.herokuapp.com"><button>Deployed Application</button></a>
                        <a href="https://github.com/connor-kfitz/Tech-Blog-Forum"><button>Github Repository</button></a>
                    </div>
                </div>
                <div id="projectThree" className="projectCard flex">
                    <h1>Brewery Near Me</h1>
                    <p>Front-end application that utilizes Map Quest and Open Brewery DB APIs so that users can locate five breweries near their desired location</p>
                    <img src={breweryNearMeHomepage} className="projectImage" alt="Tech Blog Forum Homepage"></img>
                    <h2>HTML | CSS | Bulma | JavaScript | jQuery | Third Party APIs </h2>
                    <div className="projectLinkContainer flex">
                        <a href="https://tyomoto.github.io/potential-meme/"><button>Deployed Application</button></a>
                        <a href="https://github.com/tyomoto/potential-meme"><button>Github Repository</button></a>
                    </div>
                </div>
                    
                <div id="projectFour" className="projectCard flex">
                    <h1>Social Network API</h1>
                    <p>NoSQL social network back-end application tested using Insomnia</p>
                    <img src={socialNetworkInsomnia} className="projectImage" alt="Tech Blog Forum Homepage"></img>
                    <h2>JavaScript | Node.JS | Express.JS | MongoDB | Mongoose | Insomia </h2>
                    <div className="projectLinkContainer flex">
                        <a href="https://github.com/connor-kfitz/Social-Network-API"><button>Github Repository</button></a>
                    </div>
                </div>

                <div id="projectFive" className="projectCard flex">
                    <h1>React Portfolio</h1>
                    <p>Personal portfolio developed using React</p>
                    <img src={reactPortfolioHomepage} className="projectImage" alt="Tech Blog Forum Homepage"></img>
                    <h2>JavaScript | React | CSS | Framer Motion | Email JS | GH Pages </h2>
                    <div className="projectLinkContainer flex">
                        <a href="https://connor-kfitz.github.io/React-Portfolio/"><button>Deployed Application</button></a>
                        <a href="https://github.com/connor-kfitz/React-Portfolio"><button>Github Repository</button></a>
                    </div>
                </div>

                <div id="projectSix" className="projectCard flex">
                    <h1>Employee Tracker</h1>
                    <p>Node application that utilizes a SQL database to track employees at a company</p>
                    <img src={employeeTrackerHomepage} className="projectImage" alt="Tech Blog Forum Homepage"></img>
                    <h2>JavaScript | Node.JS | Inquirer | mySql </h2>
                    <div className="projectLinkContainer flex">
                        <a href="https://github.com/connor-kfitz/Employee-Tracker"><button>Github Repository</button></a>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
    )
}

export default Project;

           