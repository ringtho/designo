import { useState } from "react"
import { Link } from "react-router-dom"
import iconClose from "../assets/shared/mobile/icon-close.svg"
import iconHamburger from "../assets/shared/mobile/icon-hamburger.svg"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    return (
        <>
        <header className="nav-items">
            <div className="logo-container">
                <div className="header-circle"></div>
                <Link to="/" className="designo-title-link">
                    <h1 className="title">DESIGNO</h1>
                </Link>
            </div>
            <nav className="navbar-menu">
                <Link>OUR COMPANY</Link>
                <Link>LOCATIONS</Link>
                <Link>CONTACT</Link>
            </nav>
            <div className="icon-container">
                { isMenuOpen ?
                <img 
                    src={iconClose} 
                    alt="icon-close" 
                    className="navbar-icon" 
                    onClick={toggleMenu}
                /> : 
                <img 
                    src={iconHamburger} 
                    alt="icon-hamburger" 
                    className="navbar-icon" 
                    onClick={toggleMenu} 
                />
                }   
            </div>
        </header>
        <div className="navbar-small-screens" ></div>
        </>
    )
}

export default Navbar