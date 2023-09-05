import "./minimalistic.css"
import Logo from "../../images/logo-breskitchen.jpeg"
import {Link} from 'react-router-dom'

export default function Header(){


    return(
        <header className="generic-header">
            <div className="logo">
                <img src={Logo} alt="logo" />
            </div>
            <nav className="menu">
                <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/productos">Productos</Link></li>
                <li><Link to="/ofertas">Ofertas</Link></li>
                <li><Link to="/sobre-mi">Sobre mi</Link></li>
                </ul>
            </nav>
        </header>

    )

}