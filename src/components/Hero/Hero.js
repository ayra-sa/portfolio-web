import React from 'react';
import { Link, Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        Hello, <br />
        I'm Front End Developer
        </SectionText>
        {/* <Button href='#about'>Read More</Button> */}
        <div style={{ width: 'auto' }}>
          <Link href="#about">Read More</Link>
        </div>
      </LeftSection>
    </Section>
  </>
);

export default Hero;