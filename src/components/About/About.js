import React from 'react'
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents'
import { AboutWrap, Profile, ImgMe, Description, Text, LinkSos, Resume, ResumeDownload, Love, Check, Hearth, Contact, ContactLink, LinkBelow } from './AboutStyles'
import {FaRegPaperPlane} from 'react-icons/fa'
import {MdInsertEmoticon} from 'react-icons/md'

const About = ({image, desc, desc2, github, linkedin, resume}) => {
    return (
        <Section id='about'>
            <SectionDivider divider />
            <SectionTitle>About Me</SectionTitle>
            <AboutWrap>
                <Profile>
                    <ImgMe src={image} alt='' />
                    <LinkBelow>
                        <Love>
                            <Check type='checkbox' />
                            <Hearth/>
                        </Love>
                        <Contact href='#contact'>
                            <FaRegPaperPlane />
                        </Contact>
                    </LinkBelow>
                </Profile>
                <Description>
                    <Text>{desc}</Text>
                    <Text>{desc2}</Text>
                    <Text>Check my <LinkSos href={linkedin} target='_blank'>Linkedin</LinkSos> account for more details about me, and i also share my code repository on <LinkSos href={github} target='_blank'>Github</LinkSos>, so let's explore <MdInsertEmoticon /></Text>
                    <Resume>
                        <ResumeDownload href={resume}></ResumeDownload>
                    </Resume>
                </Description>
            </AboutWrap>
            
        </Section>
    )
}

export default About
