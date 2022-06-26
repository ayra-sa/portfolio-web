import React from 'react';
import { FooterWrapper, Copyright } from './FooterStyles';
import { RiCopyrightFill } from 'react-icons/ri'

const Footer = () => {
  const year = new Date().getFullYear()
  
  return (
    <FooterWrapper>
      <Copyright><RiCopyrightFill /> Arya {year}</Copyright>
    </FooterWrapper>
  );
};

export default Footer;
