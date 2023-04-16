import { useState } from "react"
import { NavLink } from "react-router-dom"
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
                <NavLink to="/" className="designo-title-link">
                    <h1 className="title">DESIGNO</h1>
                </NavLink>
            </div>
            <nav className="navbar-menu">
                <NavLink 
                    to="/about" 
                    className={({isActive}) => isActive ? "active" : ""} 
                >OUR COMPANY</NavLink>
                <NavLink 
                    to="/location" 
                    className={({isActive}) => isActive ? "active" : ""}
                >LOCATIONS</NavLink>
                <NavLink 
                    to="/contact" 
                    className={({isActive}) => isActive ? "active" : ""}
                >CONTACT</NavLink>
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
        {isMenuOpen && (<div className="navbar-mobile-screens" >
            <div className="navbar-mobile-container">
                <nav className="navbar-mobile-menu">
                    <NavLink 
                        to="/about" 
                        className={({isActive}) => isActive ? "active" : ""} 
                    >OUR COMPANY</NavLink>
                    <NavLink 
                        to="/location" 
                        className={({isActive}) => isActive ? "active" : ""}
                    >LOCATIONS</NavLink>
                    <NavLink 
                        to="/contact" 
                        className={({isActive}) => isActive ? "active" : ""}
                    >CONTACT</NavLink>
                </nav>
            </div>
            
        </div>)}
        </>
    )
}

export default Navbar