import React from "react"
import './header-styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faAppleWhole, faMugHot, faHome, faCarrot, faBook, faLeaf, faPhone } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
 
    return (
      <div>
         <nav className="navbar">
        <ul className="navbar-nav">
          <li className="logo">
            <a href="#" className="nav-link">
            <FontAwesomeIcon className="icons" icon={faLeaf} />
             <span className="link-text">Veggies</span>
            </a>
          </li>
          <li className="nav-item">
           <a href="#" className="nav-link">
           <FontAwesomeIcon className="icons" icon={faHome} />
            <span className="link-text">Home</span>
           </a>
         </li> <li className="nav-item">
           <a href="#" className="nav-link">
           <FontAwesomeIcon className="icons" icon={faBook} />
            <span className="link-text">Menu</span>
           </a>
         </li> <li className="nav-item">
           <a href="#" className="nav-link">
           <FontAwesomeIcon className="icons" icon={faCarrot} />
            <span className="link-text">Ingredients</span>
           </a>
         </li> <li className="nav-item">
           <a href="#" className="nav-link">
           <FontAwesomeIcon className="icons" icon={faPhone} />
            <span className="link-text">Contact</span>
           </a>
         </li>
        </ul>
      </nav>
      <main>
      <h1>Random Text for Test Purposes</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium perspiciatis beatae fugit? Soluta quis tempora culpa ut iusto maxime sed quasi et cupiditate voluptate voluptas autem, exercitationem, ipsum consectetur laborum.</p>
    </main>
      </div>
       
    )
}
export default Header