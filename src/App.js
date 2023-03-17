import React from "react";
import NavBar from "./Components/Navbar.js";
import Main from "./Components/Main.js"
import Footer from "./Components/Footer.js"
import { Route,routes } from "react-router-dom";

import './Styles/Main.css'
function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <Main/>
      <Footer/>
    </React.Fragment>

  )
}

export default App;
