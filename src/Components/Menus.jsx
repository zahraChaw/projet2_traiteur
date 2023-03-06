import { MenuData } from '../Data';
import NavbarMenu from './NavbarMenu';
import '../styles/menu.css'

const Menu = () => {
    const { titre, separationImg, plats } = MenuData; // MenuData=props

    return (
        <>
            <section id='service'>
                {/* titre */}
                <div className='container'>
                    <div className='title'>
                        <h2>{titre}</h2>
                    </div>
                    {/* separation */}
                    <div>
                        <img src={separationImg} alt='separation' />
                    </div>
                    <NavbarMenu />
                </div>
                {/* liste des plats */}
                <div className='grid-plats'>
                    {plats.map((plat, index) => {
                        const { image, nom, prix, description } = plat;
                        return (
                            <div key={index}>
                                <div>
                                    <div className='divImg'>
                                        <img className='imgPlat' src={image} alt="image plat" />
                                    </div>
                                    <div>
                                        <h3>{nom}</h3>
                                        <h4>{prix}</h4>
                                    </div>
                                    <div>
                                        <p className='desc'>{description}</p>
                                    </div>
                                </div>

                            </div>
                        )


                    })}


                </div>
            </section>
        </>
    )
}
export default Menu;