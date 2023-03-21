import {useRef} from "react";
import {NavLink} from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa";
import logo from "./assets/Asset 16@4x.png";

function NavBar(){
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    return (
        <header>
        <button className="nav-btn" onClick={showNavbar}>
                <FaBars/>
            </button>
            <img src={logo} width = "200" height = "56" className= "App-logo" alt="logo"></img>
            <nav ref ={navRef}>
                <NavLink to ="Home"> Home </NavLink>
                <NavLink to ="Menu"> Menu </NavLink>
                <NavLink to ="About"> About </NavLink>
                <NavLink to ="Book"> Book A Table </NavLink>

            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes/>
            </button>
            </nav>

        </header>
    )
}

export default NavBar;