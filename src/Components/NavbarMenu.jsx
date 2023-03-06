
import '../styles/navbar.css'
// import { Outlet, Link } from "react-router-dom";
function NavbarMenu() {


    return (
        <>

            <nav>
                <ul>
                    <li>
                        <a href="#">Buffets sucrés</a>
                    </li>
                    <li>
                        <a href="#service">Buffets salés</a>
                    </li>
                    <li>
                        <a href="#">Plats</a>
                    </li>
                    <li>
                        <a href="#">Desserts</a>
                    </li>
                </ul>
            </nav>

        </>

    )

}

export default NavbarMenu;

{/* <nav>
<ul>
    <li>
        <a to="/">Buffets sucrés</a>
    </li>
    <li>
        <Link to="/buffet">Buffets salés</Link>
    </li>
    <li>
        <Link to="/plats">Plats</Link>
    </li>
    <li>
        <Link to="/dessert">Desserts</Link>
    </li>
</ul>
</nav> */}