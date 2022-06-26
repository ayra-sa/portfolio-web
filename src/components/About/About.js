import React, { useEffect } from "react";
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
  Resume,
  ResumeDownload,
  Love,
  Check,
  Hearth,
  Contact,
  ContactLink,
  LinkBelow,
} from "./AboutStyles";
import { FaRegPaperPlane } from "react-icons/fa";
import { MdInsertEmoticon } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";

const About = ({ image, desc, desc2, github, linkedin, resume }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Section id="about">
      <SectionDivider divider />
      <SectionTitle data-aos="fade-up">About Me</SectionTitle>
      <AboutWrap>
        <Left>
          <Profile>
            {/* <ImgMe src={image} alt='' data-aos='fade-up'/> */}
            <ImgMe src={image} alt="" data-aos="fade-up" />
            {/* <lottie-player
              src="https://assets8.lottiefiles.com/packages/lf20_1pxqjqps.json"
              background="transparent"
              speed="1"
              style={{width: '300px', height: '300px'}}
              loop
              autoplay
            ></lottie-player> */}
          </Profile>
        </Left>
        <Description>
          <Text data-aos="fade-up">{desc}</Text>
          <Text data-aos="fade-up">{desc2}</Text>
          <Text data-aos="fade-up">
            Check my{" "}
            <LinkSos href={linkedin} target="_blank">
              Linkedin
            </LinkSos>{" "}
            account for more details about me, and i also share my code
            repository on{" "}
            <LinkSos href={github} target="_blank">
              Github
            </LinkSos>
            , so let's explore <MdInsertEmoticon />
          </Text>
        </Description>
      </AboutWrap>

      <AboutBottom>
        <Left>
          <LinkBelow data-aos="fade-up">
            <Love>
              <Check type="checkbox" />
              <Hearth />
            </Love>
            <Contact href="#contact">
              <FaRegPaperPlane />
            </Contact>
          </LinkBelow>
        </Left>

        <Resume data-aos="fade-up">
          <ResumeDownload href={resume}></ResumeDownload>
        </Resume>
      </AboutBottom>
    </Section>
  );
};

export default About;
