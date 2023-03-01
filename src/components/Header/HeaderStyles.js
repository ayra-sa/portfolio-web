import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  z-index: 11;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  /* padding: 1rem; */
  padding-top: 2rem;
  padding-inline: 6rem;
  inset: 0 0 auto 0;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.md} {
    padding-inline: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
export const Div1 = styled(motion.div)`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`;
export const Div2 = styled.div`
  grid-area: 1 / 2 / 2 / 4;
  display: flex;
  justify-content: space-around;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 2 / 2 / 3 / 5;
  }
`;
export const Div3 = styled(motion.ul)`
  grid-area: 1 / 5 / 2 / 6;
  gap: 4rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
`

export const NavMobile = styled.ul`
  display: none;
  @media ${props => props.theme.breakpoints.md} {
    background: ${props => props.theme.colors.background1};
    color: ${props => props.theme.colors.darkgrey};
    left: 0;
    opacity: 1;
    transition: all 0.6s ease;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
    font-size: 2rem;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
  }
`

export const MenuIcon = styled.div`
  display: none;

  @media ${props => props.theme.breakpoints.md} {
    display: block;
    color: ${props => props.theme.colors.darkgrey};
    cursor: pointer;
    font-size: 2rem;
  }
`

export const Logo = styled.a`
  font-size: 2em;
  font-weight: 700;
  cursor: pointer;
  color: ${props => props.theme.colors.darkgrey};
  
  &:hover {
    color: ${props => props.theme.colors.darkgrey};

  }
`

// Navigation Links
export const NavLink = styled.a`
  position: relative;
  cursor: pointer;
  font-size: 1.2em;
  color: ${props => props.theme.colors.darkgrey};
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0;
    height: 2px;
    background-color: #0074D9;
    transition: width 0.8s cubic-bezier(0.25, 1, 0.5, 1);
    @media ${(props) => props.theme.breakpoints.md} {
      display: none;
    }

  }
  @media (hover: hover) and (pointer: fine) {
  &:hover::before{
    left: 0;
    right: auto;
    width: 100%;
    }
  }
  @media ${(props) => props.theme.breakpoints.md} {
    text-align: center;
    padding: 2rem;
    width: 100%;
  }
`;
