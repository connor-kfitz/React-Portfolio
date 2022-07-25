import React from "react";
import Footer from "../Footer.js"
import "../../styles/Project.css";

function Project() {

    return (
        <div>
        <div id="view">
        <div id="mainProject" className="flex">
            <div id="projectContainer" className="flex">

                    <div id="projectOne" className="projectCard">  
                            <h4 className="lightGreen"> <span className="blue">class</span> Project <span className="yellow">&#123;</span></h4> 
                            <h4 className="projectIndent">name: <span className="lightGreen">weatherApp;</span></h4>
                            <h4 className="projectIndent">type: <span className="lightGreen">frontEnd</span></h4>
                            <h4 className="projectIndent">collaboration: <span className="blue">false;</span></h4>
                            <h4 className="yellow aboveDep">&#125;</h4> 
                            <a className="deployedLink" href="https://connor-kfitz.github.io/purple-orangutan/" target="blank">Deployed Application Link</a>
                            <a href="https://github.com/connor-kfitz/purple-orangutan" target="blank" className ="projectAnchor">Github Link</a>


                        </div> 

                    <div id="projectTwo" className="projectCard">  
                            <h4 className="lightGreen"> <span className="blue">class</span> Project <span className="yellow">&#123;</span></h4> 
                            <h4 className="projectIndent">name: <span className="lightGreen">breweryNearMe;</span></h4>
                            <h4 className="projectIndent">type: <span className="lightGreen">frontEnd</span></h4>
                            <h4 className="projectIndent">collaboration: <span className="blue">true;</span></h4>
                            <h4 className="yellow aboveDep">&#125;</h4>
                            <a className="deployedLink" href="https://tyomoto.github.io/potential-meme/" target="blank">Deployed Application Link</a>
                            <a href="https://github.com/tyomoto/potential-meme" target="blank" className ="projectAnchor">Github Link</a>


                        </div>

                    <div id="projectThree" className="projectCard">  
                            <h4 className="lightGreen"> <span className="blue">class</span> Project <span className="yellow">&#123;</span></h4> 
                            <h4 className="projectIndent">name: <span className="lightGreen">teamProfileGenerator;</span></h4>
                            <h4 className="projectIndent">type: <span className="lightGreen">backEnd</span></h4>
                            <h4 className="projectIndent">collaboration: <span className="blue">false;</span></h4>
                            <h4 className="yellow aboveDep">&#125;</h4>
                            <a className="deployedLink" href="https://drive.google.com/file/d/1l1xIeEsJvLpnWYvqGxA7xMza6YuagLu2/view" target="blank">Deployed Application Link</a>
                            <a href="https://github.com/connor-kfitz/purple-monkey" target="blank" className ="projectAnchor">Github Link</a>


                        </div>

                    <div id="projectFour" className="projectCard">  
                            <h4 className="lightGreen"> <span className="blue">class</span> Project <span className="yellow">&#123;</span></h4> 
                            <h4 className="projectIndent">name: <span className="lightGreen">techBlog;</span></h4>
                            <h4 className="projectIndent">type: <span className="lightGreen">fullStack</span></h4>
                            <h4 className="projectIndent">collaboration: <span className="blue">false;</span></h4>
                            <h4 className="yellow aboveDep">&#125;</h4>
                            <a className="deployedLink" href="https://vast-shore-46783.herokuapp.com/" target="blank">Deployed Application Link</a>
                            <a href="https://github.com/connor-kfitz/maroon-monkey" target="blank" className ="projectAnchor">Github Link</a>
                        </div>

                    <div id="projectFive" className="projectCard">  
                            <h4 className="lightGreen"> <span className="blue">class</span> Project <span className="yellow">&#123;</span></h4> 
                            <h4 className="projectIndent">name: <span className="lightGreen">reactPortfolio;</span></h4>
                            <h4 className="projectIndent">type: <span className="lightGreen">frontEnd</span></h4>
                            <h4 className="projectIndent">collaboration: <span className="blue">false;</span></h4>
                            <h4 className="yellow aboveDep">&#125;</h4>
                            <a className="deployedLink" href="https://vast-shore-46783.herokuapp.com/" target="blank">Deployed Application Link</a>
                            <a href="https://github.com/connor-kfitz/purple-frog" target="blank" className ="projectAnchor">Github Link</a>

                        </div>

                    <div id="projectSix" className="projectCard">  
                            <h4 className="lightGreen"> <span className="blue">class</span> Project <span className="yellow">&#123;</span></h4> 
                            <h4 className="projectIndent">name: <span className="lightGreen">projectThreePlaceHolder;</span></h4>
                            <h4 className="projectIndent">type: <span className="lightGreen">fullStackMERN</span></h4>
                            <h4 className="projectIndent">collaboration: <span className="blue">true;</span></h4>
                            <h4 className="yellow aboveDep">&#125;</h4>
                            <a className="deployedLink" href="https://vast-shore-46783.herokuapp.com/" target="blank">Deployed Application Link</a>
                            <a href="https://vast-shore-46783.herokuapp.com/" target="blank" className ="projectAnchor">Github Link</a>
                        </div>

            </div>
        </div>
        </div>
        <Footer/>
        </div>
    )
}

export default Project;



