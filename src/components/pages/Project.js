import React from "react";
import "../../styles/Project.css";

function Project() {

    return (
        <main>
            <div id="projectContainer" className="flex">

                <div id="projectOne" className="projectCard">  
                    <a href="https://github.com/connor-kfitz/purple-orangutan" target="blank" className ="projectAnchor">
                        <div>
                            <h4 className="lightGreen"> <span className="blue">class</span> Project <span className="yellow">&#123;</span></h4> 
                            <h4 className="projectIndent">name: <span className="lightGreen">weatherApp;</span></h4>
                            <h4 className="projectIndent">type: <span className="lightGreen">frontEnd</span></h4>
                            <h4 className="projectIndent">collaboration: <span className="blue">false;</span></h4>
                            <h4 className="yellow">&#125;</h4> 
                        </div> 
                    </a>
                </div>

                <div id="projectTwo" className="projectCard">  
                    <a href="https://github.com/tyomoto/potential-meme" target="blank" className ="projectAnchor">
                        <div>
                            <h4 className="lightGreen"> <span className="blue">class</span> Project <span className="yellow">&#123;</span></h4> 
                            <h4 className="projectIndent">name: <span className="lightGreen">breweryNearMe;</span></h4>
                            <h4 className="projectIndent">type: <span className="lightGreen">frontEnd</span></h4>
                            <h4 className="projectIndent">collaboration: <span className="blue">true;</span></h4>
                            <h4 className="yellow">&#125;</h4>
                        </div>
                    </a>
                </div>

                <div id="projectThree" className="projectCard">  
                    <a href="https://github.com/connor-kfitz/purple-monkey" target="blank" className ="projectAnchor">
                        <div>
                            <h4 className="lightGreen"> <span className="blue">class</span> Project <span className="yellow">&#123;</span></h4> 
                            <h4 className="projectIndent">name: <span className="lightGreen">teamProfileGenerator;</span></h4>
                            <h4 className="projectIndent">type: <span className="lightGreen">backEnd</span></h4>
                            <h4 className="projectIndent">collaboration: <span className="blue">false;</span></h4>
                            <h4 className="yellow">&#125;</h4>
                        </div>
                    </a>
                </div>

                <div id="projectFour" className="projectCard">  
                    <a href="https://github.com/connor-kfitz/maroon-monkey" target="blank" className ="projectAnchor">
                        <div>
                            <h4 className="lightGreen"> <span className="blue">class</span> Project <span className="yellow">&#123;</span></h4> 
                            <h4 className="projectIndent">name: <span className="lightGreen">techBlog;</span></h4>
                            <h4 className="projectIndent">type: <span className="lightGreen">fullStack</span></h4>
                            <h4 className="projectIndent">collaboration: <span className="blue">false;</span></h4>
                            <h4 className="yellow">&#125;</h4>
                        </div>
                    </a>
                    <div>
                        <a className="deployedLink" href="https://vast-shore-46783.herokuapp.com/" target="blank">Deployed Application Link</a>
                    </div>
                </div>


                <div id="projectFive" className="projectCard">  
                    <a href="https://github.com/connor-kfitz/purple-frog" target="blank" className ="projectAnchor">
                        <div>
                            <h4 className="lightGreen"> <span className="blue">class</span> Project <span className="yellow">&#123;</span></h4> 
                            <h4 className="projectIndent">name: <span className="lightGreen">reactPortfolio;</span></h4>
                            <h4 className="projectIndent">type: <span className="lightGreen">frontEnd</span></h4>
                            <h4 className="projectIndent">collaboration: <span className="blue">false;</span></h4>
                            <h4 className="yellow">&#125;</h4>
                        </div>
                    </a>
                </div>

                <div id="projectSix" className="projectCard">  
                    <a href="" target="blank" className ="projectAnchor">
                        <div>
                            <h4 className="lightGreen"> <span className="blue">class</span> Project <span className="yellow">&#123;</span></h4> 
                            <h4 className="projectIndent">name: <span className="lightGreen">projectThreePlaceHolder;</span></h4>
                            <h4 className="projectIndent">type: <span className="lightGreen">fullStackMERN</span></h4>
                            <h4 className="projectIndent">collaboration: <span className="blue">true;</span></h4>
                            <h4 className="yellow">&#125;</h4>
                        </div>
                    </a>
                </div>

            </div>
        </main>
    )
}

export default Project;



