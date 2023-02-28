import React, { useState } from "react";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  AboutWrap,
  AboutBottom,
  Left,
  Profile,
  ImgMe,
  Description,
  Text,
  LinkSos,
  Love,
  Check,
  Hearth,
  Contact,
  LinkBelow,
  LinkBelowMobile,
  Right,
  MyResume,
} from "./AboutStyles";
import { FaRegPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

const About = ({ image, desc, desc2, github, linkedin, resume }) => {
  
  return (
    <Section id="about">
      <SectionDivider divider />
      <SectionTitle>About Me</SectionTitle>
      <AboutWrap
        as={motion.div}
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
      >
        <Left>
          <Profile>
            <ImgMe src={image} alt="arya-sa" />
          </Profile>
          <LinkBelowMobile>
            <Love title="like">
              <Check type="checkbox" />
              <Hearth />
            </Love>
            <Contact href="#contact" title="contact me">
              <FaRegPaperPlane />
            </Contact>
          </LinkBelowMobile>
        </Left>
        <Description>
          <Text>{desc}</Text>
          <Text>{desc2}</Text>
          <Text>
            Check my{" "}
            <LinkSos href={linkedin} target="_blank">
              Linkedin
            </LinkSos>{" "}
            account for more details about me, and i also share my code
            repository on{" "}
            <LinkSos href={github} target="_blank">
              Github
            </LinkSos>
            , so let's explore 😁
          </Text>
        </Description>
      </AboutWrap>

      <AboutBottom>
        <Left>
          <LinkBelow>
            <Love title="like">
              <Check type="checkbox" />
              <Hearth />
            </Love>
            <Contact href="#contact" title="contact me">
              <FaRegPaperPlane />
            </Contact>
          </LinkBelow>
        </Left>

        <Right>
          <MyResume
            href={resume}
            download
            title="Download My Resumé"
          >
            My Resume
          </MyResume>
        </Right>
      </AboutBottom>
    </Section>
  );
};

export default About;
