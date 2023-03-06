/*react-icons/fa: package pour utiliser l'icone du menu burger */
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import '../styles/navbar.css'
import { Outlet, Link } from "react-router-dom";


function Navbar() {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive-nav")
    }

    return (
        <>
            <header>
                <div className="logo">
                    <img src="../logoZ.png" alt="logo" />
                </div>
                <nav>
                    <ul>
                        <li>
                        <a href="#">Accueil</a>
                        </li>
                        <li>
                        <a href="#service">Nos services</a>
                        </li>
                        <li>
                        <a href="#">Plats et desserts</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </nav>
            </header>
           
        </>

    )

}

export default Navbar;




// <nav ref={navRef}>
//                 <a href="#">Accueil</a>
//                 <a href="#">Nos services</a>
//                 <a href="#">Plats et desserts</a>
//                 <a href="#">Contact</a>

//                 <button className="nav-btn nav-close-btn" onClick={showNavbar}>
//                     <FaTimes />
//                 </button>
//             </nav>
//             <button className="nav-btn" onClick={showNavbar}>
//                 <FaBars />
//             </button>

{/* <>
<header>
    <div className="logo">
        <img src="../logoZ.png" alt="logo" />
    </div>
    <nav>
        <ul>
            <li>
                <Link className="" to="/">Accueil</Link>
            </li>
            <li>
                <Link to="/service">Nos services</Link>
            </li>
            <li>
                <Link to="/plat">Plats et desserts</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    </nav>
</header>
<Outlet />
</> */}