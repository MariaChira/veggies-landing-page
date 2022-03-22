import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';

import Home from "./components/home/home-component";
import Menu from "./components/menu/menu-component";
import Ingredients from "./components/ingredients/ingredients-component";
import Contact from "./components/contact/contact-component";
import Header from "./components/header/header-component";
import FourZeroFour from "./components/fourZeroFour/fourZeroFour-component";

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
     <h1>Title</h1>
     <Header />
    
    </div>
  );
}

export default App;
