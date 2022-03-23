import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';

import Header from "./components/header/header-component";
import Home from "./pages/home/home-component";
import Skills from "./pages/skills/skills-component";
import Projects from "./pages/projects/projects-component";
import Contact from "./pages/contact/contact-component";
import FourZeroFour from "./pages/fourZeroFour/fourZeroFour-component";

import { library } from "@fortawesome/fontawesome-svg-core";

import {fab} from '@fortawesome/free-brands-svg-icons'
import { faCoffee,faHome, faMusic, faBiking, faBookReader } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faCoffee, faHome, faMusic, faBiking, faBookReader)
function App() {
 

  return (
    <Router>
     <Header />
     <Routes>
       <Route path="/" element={<Home />}></Route>
       <Route path="/skills" element={<Skills />}></Route>
       <Route path="/projects" element={<Projects />}></Route>
       <Route path="/contact" element={<Contact />}></Route>
       <Route element={<FourZeroFour />}></Route>
     </Routes>
    
    </Router>
  );
}

export default App;
