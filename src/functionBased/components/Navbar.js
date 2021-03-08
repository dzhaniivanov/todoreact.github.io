import React from "react";
import {NavLink} from "react-router-dom"

const Navbar=()=>{
    const links=[
        {
            id:1,
            path:'/',
            text:'home',
        },
        {
            id:2,
            path:'/about',
            text:'about'
        }
    ]
    return (
        <nav className="navBar">
            <ul>
                {links.map(link=>{
                    return (<li key={link.id}>
                        <NavLink to={link.path} activeClassName="active-link">{link.text}</NavLink>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navbar;