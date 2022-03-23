import "./skills-styles.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Skills = () => {
    return(
        <div className="skills-container">
            
            <div className="technologies-container">
            <h2 className="tech-title">Technologies:</h2>
                <div className="tech-icons-container">
                <p className="name-of-icons"><FontAwesomeIcon className="tech-icons" icon="fa-brands fa-html5" /><br />HTML5</p>
                <p className="name-of-icons"><FontAwesomeIcon className="tech-icons" icon="fa-brands fa-js" /><br />JavaScript</p>
                <p className="name-of-icons"><FontAwesomeIcon className="tech-icons" icon="fa-brands fa-css3" /><br />CSS3</p>
                <p className="name-of-icons"><FontAwesomeIcon className="tech-icons" icon="fa-brands fa-react" /><br />React.JS</p>
                <p className="name-of-icons"><FontAwesomeIcon className="tech-icons" icon="fa-brands fa-npm" /><br />NPM</p>
                <p className="name-of-icons"><FontAwesomeIcon className="tech-icons" icon="fa-brands fa-github" /><br />GitHub</p>
                <p className="name-of-icons"><FontAwesomeIcon className="tech-icons" icon="fa-brands fa-git-alt" /><br />GIT</p>
                <p className="name-of-icons"><FontAwesomeIcon className="tech-icons" icon="fa-brands fa-stack-overflow" />StackOverflow</p>
                <p className="name-of-icons"><FontAwesomeIcon className="tech-icons" icon="fa-brands fa-sass" />SASS</p>
                <p className="name-of-icons"><FontAwesomeIcon className="tech-icons" icon="fa-brands fa-bootstrap" />Bootstrap</p>
                </div>
            </div>
            <div className="soft-skills-container">
            <h2 className="soft-title">Soft skills:</h2>
            <div className="skills">
            <span className="button-type-skill">teacheable</span>
            <span className="button-type-skill">creativity</span>
            <span className="button-type-skill">reliability</span>
            <span className="button-type-skill">problem solving</span>
            <span className="button-type-skill">communication</span>
            <span className="button-type-skill">easily adaptable</span>
            <span className="button-type-skill">sociable</span>
            <span className="button-type-skill">team player</span>
            <span className="button-type-skill">good researcher</span>
            </div>
           
            </div>
        </div>
    )
}
export default Skills;