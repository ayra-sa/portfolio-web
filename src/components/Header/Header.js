import { motion } from 'framer-motion';
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
      <Div1
        as={motion.div}
        initial={{
          opacity: 0,
          translateX: -50,
        }}
        transition={{
          duration: .5
        }}
        animate={{
          opacity: 1,
          translateX: 0
        }}
      >
        <Link href="#">
          <Logo>arya</Logo>
        </Link>
      </Div1>
      <MenuIcon onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </MenuIcon>
      {click ? <NavColumn handleClose={handleClose} /> : <NavRow />}
      
    </Container>
  )
};

export default Header;
