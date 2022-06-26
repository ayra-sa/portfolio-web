import React, { useEffect } from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListItem, ListParagraph } from './TechnologiesStyles';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { tech } from '../../constants/constants';

const Technologies = () => {
useEffect(() => {
  Aos.init({ duration: 1000 })
})


return (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText data-aos='fade-up'>
      I've worked with a range a technologies in the <br /> Front End development world.
    </SectionText>
    <List data-aos='fade-up'>
      {tech.map((item, i) => (
        <ListItem key={i}>
          {item.icon}
          <ListParagraph>{item.label}</ListParagraph>
        </ListItem>
      ))}
    </List>
  </Section>
)
};

export default Technologies;
