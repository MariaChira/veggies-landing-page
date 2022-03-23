import React from "react"
import { Link } from "react-router-dom"
import './header-styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faProjectDiagram, faBook, faPerson, faPhone } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
 
    return (
      <div>
         <nav className="navbar">
        <ul className="navbar-nav">
          <li className="logo">
            <Link to="/" className="nav-link">
            <FontAwesomeIcon className="icons" icon={faPerson} />
             <span className="link-title">Maria Chira</span>
            </Link>
          </li>
          <li className="nav-item">
          <Link to="/" className="nav-link">
           <FontAwesomeIcon className="icons" icon={faHome} />
            <span className="link-text">About</span>
          </Link>
         </li> <li className="nav-item">
           <Link to="/skills" className="nav-link">
           <FontAwesomeIcon className="icons" icon={faBook} />
            <span className="link-text">Skills</span>
           </Link>
         </li> <li className="nav-item">
           <Link to="projects" className="nav-link">
           <FontAwesomeIcon className="icons" icon={faProjectDiagram} />
            <span className="link-text">Projects</span>
           </Link>
         </li> <li className="nav-item">
           <Link to="/contact" className="nav-link">
           <FontAwesomeIcon className="icons" icon={faPhone} />
            <span className="link-text">Contact</span>
           </Link>
         </li>
        </ul>
      </nav>
      </div>
       
    )
}
export default Header