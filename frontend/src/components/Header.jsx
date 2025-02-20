import React, { useState } from 'react';
import './Header.css';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        "Home",
        "About",
        "Skills",
        "Projects",
        "Certificates",
        "Contact"
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    <h1>Preethi Ashritha Gunnam</h1>
                </div>
                <nav className="desktop-nav">
                    {menuItems.map((item) => (
                        <a 
                            key={item} 
                            href={`#${item.toLowerCase()}`}
                            className="nav-link"
                        >
                            {item}
                        </a>
                    ))}
                </nav>
                <button 
                    className="mobile-menu-btn"
                    onClick={toggleMenu}
                >
                    ☰
                </button>
                <nav className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
                    {menuItems.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="mobile-nav-link"
                            onClick={toggleMenu}
                        >
                            {item}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
}

export default Header;