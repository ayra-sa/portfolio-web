import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListItem, ListParagraph } from './TechnologiesStyles';
import { tech } from '../../constants/constants';
import { motion } from 'framer-motion';

const Technologies = () => {

return (
  <Section id='tech'>
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the <br /> Front End development world.
    </SectionText>
    <List>
      {tech.map((item, i) => (
        <ListItem 
          as={motion.li}
          initial={{
            y: 80,
            opacity: 0
          }}
          whileInView={{
            y: 0,
            opacity: 1
          }}
          transition={{
            duration: 1.2
          }}
          viewport={{
            once: true
          }}
          key={i}
          whileHover={{
            scale: '1.1'
          }}
        >
          {item.icon}
          <ListParagraph>{item.label}</ListParagraph>
        </ListItem>
      ))}
    </List>
  </Section>
)
};

export default Technologies;
