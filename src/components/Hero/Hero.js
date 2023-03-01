import { Controls, Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  Link,
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  HeroSection,
  HeroTitle,
  LeftSection,
  CTAButton,
  ScrollMe,
  Photo,
  MyRole,
  MyType
} from "./HeroStyles";

const Hero = ({ welcome, image, text1, text2, text3 }) => {
  return (
    <HeroSection>
      <LeftSection>
        <HeroTitle>
          {welcome}
        </HeroTitle>
        <Photo src={image} alt="arya-sa" title="Hi, don't touch me!" />
        <MyRole>FRONTEND DEVELOPER</MyRole>
        <MyType>
          <TypeAnimation
            sequence={[
              "Hi, The name's Arya",
              1000,
              "Guy-Who-Loves-Coffee☕.jsx",
              2000,
              "<LoveCodeToo />",
              3000
            ]}
            wrapper="p"
            cursor={true}
            repeat={Infinity}
            // style={{ 
            //   fontSize: '2em', 
            //   fontWeight: '600'
            // }}
          />
        </MyType>
        <CTAButton>
          <Link href="#about">Read More</Link>
        </CTAButton>
      </LeftSection>
      <ScrollMe>
        <Player
          autoplay
          loop
          src="https://assets4.lottiefiles.com/packages/lf20_b2oxjsii.json"
          style={{
            width: "120px",
            // height: "100px",
          }}
        >
          <Controls visible={false} />
        </Player>
      </ScrollMe>
    </HeroSection>
  );
};

export default Hero;
