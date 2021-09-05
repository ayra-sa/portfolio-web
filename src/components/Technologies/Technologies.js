import React from 'react';
import { SiCss3, SiHtml5, SiJavascript, SiReact, SiRedux, SiSass, SiReactrouter, SiNextDotJs, SiGit, SiGithub, SiNpm, SiBootstrap, SiMaterialUi } from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the Front End development world.
    </SectionText>
    <List>
      <ListItem>
        <SiHtml5 />
        <ListParagraph>HTML5</ListParagraph>
      </ListItem>
      <ListItem>
        <SiCss3 />
        <ListParagraph>CSS</ListParagraph>
      </ListItem>
      <ListItem>
        <SiJavascript />
        <ListParagraph>Javascript</ListParagraph>
      </ListItem>
      <ListItem>
        <SiBootstrap />
        <ListParagraph>Bootstrap</ListParagraph>
      </ListItem>
      <ListItem>
        <SiMaterialUi />
        <ListParagraph>Material UI</ListParagraph>
      </ListItem>
      <ListItem>
        <SiReact />
        <ListParagraph>React js</ListParagraph>
      </ListItem>
      <ListItem>
        <SiRedux />
        <ListParagraph>Redux</ListParagraph>
      </ListItem>
      <ListItem>
        <SiGit />
        <ListParagraph>Git</ListParagraph>
      </ListItem>
      <ListItem>
        <SiGithub />
        <ListParagraph>Github</ListParagraph>
      </ListItem>
      <ListItem>
        <SiNextDotJs />
        <ListParagraph>Next js</ListParagraph>
      </ListItem>
      <ListItem>
        <SiNpm />
        <ListParagraph>Npm</ListParagraph>
      </ListItem>
      <ListItem>
        <SiReactrouter />
        <ListParagraph>React Router</ListParagraph>
      </ListItem>
      <ListItem>
        <SiSass />
        <ListParagraph>SASS/SCSS</ListParagraph>
      </ListItem>
    </List>
    {/* <SectionDivider colorAlt /> */}
  </Section>
);

export default Technologies;
