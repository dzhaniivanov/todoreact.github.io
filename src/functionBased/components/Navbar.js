import React, { useState } from "react";
import { NavLink } from "react-router-dom"
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
const Navbar = () => {
    const [navBarOpen, setNavbarOpen] = useState(false);
    const links = [
        {
            id: 1,
            path: '/',
            text: 'home',
        },
        {
            id: 2,
            path: '/about',
            text: 'about'
        }
    ]

    const handleToggle = () => {
        setNavbarOpen(!navBarOpen)
    }

    const closeMenu = () => {
        setNavbarOpen(false)
    }
    return (
        <nav className="navBar">
            <button onClick={handleToggle}>
                {navBarOpen ? (
                    <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
                ) : (
                    <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
                )}
            </button>
            <ul className={`menuNav ${navBarOpen ? "showMenu" : ""}`}>
                {links.map(link => {
                    return (<li key={link.id}>
                        <NavLink
                            to={link.path}
                            activeClassName="active-link"
                            onClick={() => closeMenu()}
                            exact
                        >
                            {link.text}
                        </NavLink>
                    </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navbar;