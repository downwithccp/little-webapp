import {useRef} from "react";
import {FaBars, FaTimes} from "react-icons/fa";

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
            <h3 className="logo">Logo</h3>
            <nav ref ={navRef}>
                <a href ="/#">Home</a>
                <a href="/#">Our Menu</a>
                <a href="/#">Book A Table</a>

                <a href="/#">About Us</a>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes/>
            </button>
            </nav>

        </header>
    )
}

export default NavBar;