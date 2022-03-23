import React from "react"
import './header-styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faProjectDiagram, faBook, faPerson, faPhone } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
 
    return (
      <div>
         <nav className="navbar">
        <ul className="navbar-nav">
          <li className="logo">
            <a href="#" className="nav-link">
            <FontAwesomeIcon className="icons" icon={faPerson} />
             <span className="link-text">Maria Chira</span>
            </a>
          </li>
          <li className="nav-item">
           <a href="#" className="nav-link">
           <FontAwesomeIcon className="icons" icon={faHome} />
            <span className="link-text">About</span>
           </a>
         </li> <li className="nav-item">
           <a href="#" className="nav-link">
           <FontAwesomeIcon className="icons" icon={faBook} />
            <span className="link-text">Skills</span>
           </a>
         </li> <li className="nav-item">
           <a href="#" className="nav-link">
           <FontAwesomeIcon className="icons" icon={faProjectDiagram} />
            <span className="link-text">Projects</span>
           </a>
         </li> <li className="nav-item">
           <a href="#" className="nav-link">
           <FontAwesomeIcon className="icons" icon={faPhone} />
            <span className="link-text">Contact</span>
           </a>
         </li>
        </ul>
      </nav>
      </div>
       
    )
}
export default Header