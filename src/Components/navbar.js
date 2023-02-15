/*react-icons/fa: package pour utiliser l'icone du menu burger */
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import './navbar.css'


function Navbar() {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive-nav")
    }

    return (
        <header>
            <div className="logo">
                <img src="../logoZ.png" alt="logo"/>
            </div>
            <nav ref={navRef}>
                <a href="#">Accueil</a>
                <a href="#">Nos services</a>
                <a href="#">Plats et desserts</a>
                <a href="#">Contact</a>

                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    )

}

export default Navbar;