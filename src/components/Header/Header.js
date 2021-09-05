import Link from 'next/link';
import React, {useState} from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

import { Container, Div1, Logo, Div3, NavLink, MenuIcon} from './HeaderStyles';
import NavColumn from './NavColumn';
import NavRow from './NavRow';

const Header = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => {setClick(!click)}
  const handleClose = () => {setClick(false)}
  return (
    <Container>
      <Div1>
        <Link href="#">
          <Logo>ayra</Logo>
        </Link>
      </Div1>
      <MenuIcon onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </MenuIcon>
      {click ? <NavColumn handleClose={handleClose} /> : <NavRow />}
      {/* <Div3>
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
      </Div3> */}
      {/* <Div3>
        <SocialIcons href="https://google.com">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://google.com">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://google.com">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
      </Div3> */}
    </Container>
  )
};

export default Header;
