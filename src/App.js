import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';

import Header from "./components/header/header-component";
import Home from "./pages/home/home-component";
import Menu from "./pages/menu/menu-component";
import Ingredients from "./pages/ingredients/ingredients-component";
import Contact from "./pages/contact/contact-component";
import FourZeroFour from "./pages/fourZeroFour/fourZeroFour-component";


function App() {
  const links = [
    {
      key: "1",
      path: "/",
      label: "Home",
      element: () => <Home />,
    },
    {
      key: "2",
      path: "/menu",
      label: "Menu",
      element: () => <Menu />,
    },
    {
      key: "3",
      path: "/ingredients",
      label: "Ingredients",
      element: () => <Ingredients />,
    },
    {
      key: "4",
      path: "/contact",
      label: "Contact",
      element: () => <Contact />,
    },
  ];

  return (
    <div className="App">
     <Header />
     <Home />
    
    </div>
  );
}

export default App;
