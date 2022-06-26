import Aos from 'aos'
import React, { useEffect } from 'react'
import { Section, SectionDivider } from '../../styles/GlobalComponents'
import { ContactWrap, Screen, ScreenHeader, HeaderLeft, HClose, HMax, HMin, HeaderRight, HEllipsis, ScreenBody, BodyLeft, Title, Info, Span, BodyItem, ContactLink } from './ContactStyles'
import Form from './Form'


const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  })

  return (
    <Section column id='contact'>
      <SectionDivider divider />
      {/* <SectionTitle>Get In Touch</SectionTitle> */}
        <ContactWrap data-aos='fade-up'>
          <Screen>
            <ScreenHeader>
              <HeaderLeft>
                <HClose />
                <HMax />
                <HMin />
              </HeaderLeft>
              <HeaderRight>
                <HEllipsis />
                <HEllipsis />
                <HEllipsis />
              </HeaderRight>
            </ScreenHeader>
            <ScreenBody>
              <BodyLeft>
                <Title>
                  <Span>GET IN</Span>
                  <Span>TOUCH</Span>
                </Title>
                <Info>CONTACT INFO : <ContactLink href="https://wa.me/6285156898745" target="_blank">+62 8515 6898 745</ContactLink></Info>
              </BodyLeft>
              <BodyItem>
                <Form />
              </BodyItem>
            </ScreenBody>
          </Screen>
        </ContactWrap>
    </Section>
  )
}

export default Contact
