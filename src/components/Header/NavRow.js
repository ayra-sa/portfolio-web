import React from 'react'
import Link from 'next/link';
import { Div3, NavLink } from './HeaderStyles';


const NavRow = () => {
    return (
        <Div3>
        <li>
          <Link href="#about">
            <NavLink>
              About
            </NavLink>
          </Link>
        </li>
        <li>
          <Link href="#tech">
            <NavLink>
              Tech
            </NavLink>
          </Link>
        </li>
        <li>
          <Link href="#projects">
            <NavLink>
              Projects
            </NavLink>
          </Link>
        </li>
        <li>
          <Link href="#contact">
            <NavLink>
              Contact
            </NavLink>
          </Link>
        </li>
      </Div3>
    )
}

export default NavRow
