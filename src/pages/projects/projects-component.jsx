import'./projects-styles.css';
import { Link } from 'react-router-dom';

const Projects = () => {
    return(
        <div className="projects-container">
            <h1 className='projects-title'>Projects</h1>
            <div className="projects-wrapper">
                <div className="project one">
                    <img className='project-image' src='assets/images/pic1.jpg' alt='portofolio'></img>
                    <h3 className='project-name'>Portofolio</h3>
                    <p className='project-text'>This is the first version of my personal website which contains a portofolio, a resume and links for contact. I built it with cool <strong>React</strong> features like <strong>react-router-dom</strong> and I plan to constantly improve it by adding CSS animations and more.</p>
                    <a href="https://github.com/MariaChira/web-portofolio" target="blank" rel='noreferrer'><button class="project-code">View code</button></a>
                </div>
                <div className="project two">
                <img className='project-image' src='assets/images/beauty-products.jpg' alt='beauty-products'></img>
                    <h3 className='project-name'>Le-Beauty</h3>
                    <p className='project-text'>For this project I had to follow the design and requirements on <strong>Zeplin</strong>. I had fun doing this project and the resposiveness took most of the developing time. I use only <strong>HTML</strong> and <strong>CSS with Bootstrap</strong> for this project.</p>
                    <a href="https://github.com/MariaChira/Medical-website" target="blank" rel='noreferrer'><button class="project-code">View code</button></a></div>
                <div className="project three">
                <img className='project-image' src='assets/images/eth.png' alt='ethereum'></img>
                    <h3 className='project-name'>Gecko App</h3>
                    <p className='project-text'>When I first learned React concepts I was studying in SDAcademy and we developed this application that uses <strong>Gecko's free API</strong> to list all the crypto currencies in a table.</p>
                    <a href="https://github.com/MariaChira/Gecko-app" target="_blank" rel='noreferrer'><button class="project-code">View code</button></a>
                </div>
                <div className="project four">
                <img className='project-image' src='assets/images/math.jpg' alt='mathematics'></img>
                    <h3 className='project-name'>Math Game</h3>
                    <p className='project-text'>I love this math-game app because it is the first real working app that I developed when I took a Udemy class and I added features like sounds for right or wrong answers. I used HTML, CSS, <strong>JavaScript</strong> and <strong> jQuery.</strong></p>
                    <a href="https://github.com/MariaChira/Math-Game" target="_blank" rel='noreferrer'><button class="project-code">View code</button></a>
                </div>
                <div className="project five">
                <img className='project-image' src='assets/images/currency.png' alt='money'></img>
                    <h3 className='project-name'>Buget App</h3>
                    <p className='project-text'>As a part of final exam I took at the academy, I had to do a project with <strong>React library</strong>. Since I love financial education, I developed an app in this area. I used <strong>functional components</strong>, <strong>session storage</strong> and <strong>Bootstrap </strong>. </p>
                    <a href="https://github.com/MariaChira/Budget--app" target="_blank" rel='noreferrer'><button class="project-code">View code</button></a>
                </div>
            </div>
        </div>
    )
}
export default Projects;