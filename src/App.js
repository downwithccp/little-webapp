import React from "react";
import NavBar from "./Components/Navbar.js";
import Footer from "./Components/Footer.js"
import Home from "./Components/Pages/Home.js"
import About from "./Components/Pages/About.js"
import Menu from "./Components/Pages/Menu.js"
import Book from "./Components/Pages/Book.js"
import ConfirmedBooking from "./Components/ConfirmedBooking.js";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import './Styles/Main.css'
function App() {

  return (
    <BrowserRouter>
    <React.Fragment>
      <NavBar/>
    <main>
    <Routes>
      <Route index element= {<Home/>}/>
      <Route path="Home" element= {<Home/>}/>
      <Route path ="About"  element= {<About/>}/>
      <Route path ="Book"  element= {<Book/>}/>
      <Route path ="Menu"  element= {<Menu/>}/>
      <Route path ="ConfirmedBooking"  element= {<ConfirmedBooking/>}/>

      </Routes>
    </main>
      <Footer/>
    </React.Fragment>
    </BrowserRouter>

  )

  }

export default App;


