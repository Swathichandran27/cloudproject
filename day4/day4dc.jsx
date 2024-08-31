import React, { useState } from 'react';
import './dc.css';


function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    const handleMenuItemClick = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar__menu-icon" onClick={handleMenuToggle}>
                &#9776;
            </div>
            <div className="navbar__title">NavBar</div>
            <div className="navbar__login-button">Login</div>
            {menuOpen && (
                <div className="navbar__dropdown">
                    <ul>
                        <li onClick={handleMenuItemClick}>Home</li>
                        <li onClick={handleMenuItemClick}>About</li>
                        <li onClick={handleMenuItemClick}>Contact</li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
export default NavBar;

