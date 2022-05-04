import Aos from 'aos'
import React, { useEffect } from 'react'
import { Section, SectionDivider } from '../../styles/GlobalComponents'
import { ContactWrap, Screen, ScreenHeader, HeaderLeft, HClose, HMax, HMin, HeaderRight, HEllipsis, ScreenBody, BodyLeft, Title, Info, Span, BodyItem } from './ContactStyles'
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
                <Info>CONTACT INFO : +62 89 975 970 40</Info>
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
