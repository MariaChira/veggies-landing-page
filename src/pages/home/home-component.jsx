import "./home-styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faBiking, faBookReader, faSmile, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  return (
    <div className="home-container">
      <h1>About me</h1>
      <div className="wrapper-container">
      <div className="text-container"></div>
      <div className="image-container"></div>
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
