import React from "react";
import NavBar from "./Components/Navbar.js";
import Footer from "./Components/Footer.js"
import Home from "./Pages/Home.js"
import About from "./Pages/About.js"
import Menu from "./Pages/Menu.js"
import Book from "./Pages/Book.js"

import { Route, Routes, BrowserRouter } from "react-router-dom";

import './Styles/Main.css'
function App() {
  return (
    <BrowserRouter>
    <React.Fragment>
      <NavBar/>
    <main>
    <Routes>

      <Route path ="Home" element= {<Home/>}/>
      <Route path ="About"  element= {<About/>}/>
      <Route path ="Book"  element= {<Book/>}/>
      <Route path ="Menu"  element= {<Menu/>}/>

      </Routes>
    </main>
      <Footer/>
    </React.Fragment>
    </BrowserRouter>

  )
}

export default App;
