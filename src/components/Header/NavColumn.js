import React from 'react'
import Link from 'next/link';
import { NavLink, NavMobile } from './HeaderStyles'

const NavColumn = ({handleClose}) => {
    return (
        <NavMobile>
            <li>
            <Link href="#about">
                <NavLink onClick={handleClose}>
                About
                </NavLink>
            </Link>
            </li>
            <li>
            <Link href="#tech">
                <NavLink onClick={handleClose}>
                Tech
                </NavLink>
            </Link>
            </li>
            <li>
            <Link href="#projects">
                <NavLink onClick={handleClose}>
                Projects
                </NavLink>
            </Link>
            </li>
            <li>
            <Link href="#contact">
                <NavLink onClick={handleClose}>
                Contact
                </NavLink>
            </Link>
            </li>
        </NavMobile>
    )
}

export default NavColumn
