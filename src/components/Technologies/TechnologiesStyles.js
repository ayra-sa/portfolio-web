import { motion } from 'framer-motion'
import styled from 'styled-components'

export const TechnologiesSection = styled.section`
  height: 100vh;
  position: relative;
  scroll-snap-align: center;
  /* background-color: #A5C9CA; */
`

export const ImageContainer = styled.div`
  text-align: center;
  background-image: radial-gradient(50% 50% at 50% 50%, rgba(79, 108, 176, 0.25) 53.8%, rgba(79, 108, 176, 0) 100%);
  width: 100%;
  padding: 60px;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${props => props.theme.breakpoints.lg} {
    background-image: none;
    padding: 0;
    margin-top: 40px;
  }
  @media ${props => props.theme.breakpoints.md} {
    background-image: none;
    padding: 0;
    margin-top: 16px;
  }
`

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
  margin-bottom: 5rem;
  /* margin: 3rem 0; */
  
  @media ${props => props.theme.breakpoints.lg}{
    margin: 64px 0;
  }

  @media ${props => props.theme.breakpoints.md}{
    grid-template-columns: repeat(4, 1fr);
    margin: 64px 0;
    gap: 24px
  }
  
  @media ${props => props.theme.breakpoints.sm}{
    /* display: flex;
    flex-wrap: wrap;
    justify-content: center; */
    display: grid;
    /* flex-direction: column; */
    grid-template-columns: repeat(3, 1fr);
    /* margin: 32px 0; */
    gap: 2rem;
    padding-left: 0;
  }
`

export const ListTitle = styled.h4`
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  margin-bottom: 8px;

  @media ${props => props.theme.breakpoints.md}{
    font-size: 24px;
    line-height: 28px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.02em;
    margin-bottom: 4px;
  }
`

export const ListParagraph = styled.p`
  font-size: 18px;
  line-height: 30px;
  margin-bottom: 0;

  @media ${props => props.theme.breakpoints.md}{
    font-size: 16px;
    line-height: 28px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 10px;
    line-height: 22px;
  }
`

export const ListItem = styled(motion.li)`
  height: auto;
  width: 150px;
  font-size: 1.5em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: .7rem;
  background-color: #fff;
  border-radius: 10px;
  padding: 1.5rem;
  text-align: center;
  color: ${props => props.theme.colors.darkgrey};
  transition: .3s all;

  /* &:hover {
    color: #fff;
    background-color: ${props => props.theme.colors.darkgrey};

  } */

@media ${props => props.theme.breakpoints.md}{
  max-width: 203px;
}

@media ${props => props.theme.breakpoints.sm}{
  margin-bottom: 14px;
  /* max-width: 320px; */
  width: 100%;
  /* flex-direction: row; */
}
`

