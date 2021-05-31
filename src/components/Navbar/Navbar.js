import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './navbar.scss';

const Navbar = ({color, position}) => {
    const [links, setLinks] = useState([
        {to: '/', label: 'Coffee house', exact: true},
        {to: '/our-coffee', label: 'Our coffee', exact: true},
        {to: '/for-your-pleasure', label: 'For your pleasure', exact: true}
    ])
    return (
            <ul className={`navbar navbar_${color} navbar_${position}`}>
                {links.map(link => <li key={link.to}>
                    <NavLink className='navbar__link' to={link.to} exact={link.exact}>{link.label}</NavLink>
                </li>)}
            </ul>
    )
}

export default Navbar