import React, { useEffect } from 'react';
import { Link, Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';
import Aos from 'aos';
import 'aos/dist/aos.css'


const Hero = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center data-aos='fade-up'>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText data-aos='fade-up'>
        Hello, <br />
        I'm Front End Developer
        </SectionText>
        {/* <Button href='#about'>Read More</Button> */}
        <div style={{ width: 'auto' }} data-aos='fade-up'>
          <Link href="#about">Read More</Link>
        </div>
      </LeftSection>
    </Section>
  )
};

export default Hero;