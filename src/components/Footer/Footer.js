import React from 'react';
import { FooterWrapper, Copyright } from './FooterStyles';
import { RiCopyrightFill } from 'react-icons/ri'

const Footer = () => {
  return (
    <FooterWrapper>
      <Copyright><RiCopyrightFill /> Arya 2021</Copyright>
    </FooterWrapper>
  );
};

export default Footer;
