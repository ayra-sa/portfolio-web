import React from "react";
import Link from "next/link";
import { Div3, NavLink } from "./HeaderStyles";
import { motion } from "framer-motion";

const NavRow = () => {
  return (
    <Div3
      as={motion.ul}
      initial={{
        opacity: 0,
        translateX: 50
      }}
      animate={{
        opacity: 1,
        translateX: 0
      }}
      transition={{
        duration: 0.6
      }}
    >
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Tech</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#contact">
          <NavLink>Contact</NavLink>
        </Link>
      </li>
    </Div3>
  );
};

export default NavRow;
