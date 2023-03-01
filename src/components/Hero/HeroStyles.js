import styled from "styled-components";

export const HeroSection = styled.section`
  text-align: center;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;
  scroll-snap-align: center;
  /* background-color: #2C3333;
  color: #E7F6F2; */
`;

export const HeroTitle = styled.h1`
  font-size: 4em;
  font-weight: 700;
  /* display: flex; */
  align-items: flex-end;
  justify-content: center;
  position: relative;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 3em;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 2.75em;
  }
`;

export const Photo = styled.img`
  margin: 10px auto;
`

export const MyRole = styled.h2`
  letter-spacing: .3em;
  opacity: .7;
  font-size: 1em;
  margin: 20px 0 10px 0;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: .8em;
  }
`

export const HeroText = styled.p`
  font-size: 2em;
`;

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const CTAButton = styled.div`
  width: auto;
  margin-top: 40px;
`

export const ScrollMe = styled.div`
  position: absolute;
  inset: auto auto 5% auto;

  @media ${(props) => props.theme.breakpoints.md} {
    inset: auto auto 2% auto;
  }
`

export const MyType = styled.div`
  font-size: 2em;
  font-weight: 600;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.5em;
  }
`