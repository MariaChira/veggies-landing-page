import "./home-styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faBiking, faBookReader, faSmile, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  return (
    <div className="home-container">
      <h1>About me</h1>
      <div className="wrapper-container">
      <div className="text-container">
        <p className="title">Hi, I'm Maria | Javascript Web Developer</p>
        <p className="description">I am energetic and kind,<br />
         I love creating and exploring, <br />
        I am a lifelong learner and maybe I listen too much music.</p>
        <a href="CV-Chira-Maria.pdf" download='Maria-Chira'><button className="download">Download Resume</button></a>
      </div>
      <div className="image-container">
        <img src="assets/images/pic1.jpg" alt="woman-laptop" />
      </div>
      </div>
     <div className="icons-container">
     <FontAwesomeIcon className="hobby-icon" icon={faMusic} />
     <FontAwesomeIcon className="hobby-icon" icon={faBiking} />
     <FontAwesomeIcon className="hobby-icon" icon={faBookReader} />
     <FontAwesomeIcon className="hobby-icon" icon={faSmile} />
     <FontAwesomeIcon className="hobby-icon" icon={faPeopleGroup} />
     </div>
    </div>
  );
};
export default Home;
