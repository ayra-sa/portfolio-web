import styled from "styled-components";


export const Section = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding-inline: 20px;
`

export const Back = styled.div`
  cursor: pointer;
  color: inherit;
  padding-top: 40px;
`

export const Container = styled.div`
  margin-top: 7%;
`;

export const TopDiv = styled.div`
  display: flex;
  column-gap: 20px;
  margin-bottom: 100px;

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    row-gap: 50px;
  }
`;

export const LeftDiv = styled.div`
  flex: 1;
`;

export const RightDiv = styled.div`
  flex: 1;
  padding-right: 50px;
  font-size: 1.8em;
`;

export const TopTitle = styled.h2`
  text-transform: uppercase;
  letter-spacing: .09em;
`;

export const Title = styled.h1`
  font-weight: 800;
  font-size: 2.5em;
`;

export const ImageDesc = styled.div`
  max-width: 790px;
  margin: 40px auto;

  > div {
    position: unset !important;
  }

  img {
    object-fit: contain;
    width: auto !important;
    position: relative !important;
    height: unset !important;
  }
`;

export const Block = styled.div`
  &:not(:nth-child(1)) {
    margin-top: 40px;
  }

  ul {
    padding-left: 1rem;
  }
`

export const LinkTo = styled.a`
  color: inherit;
  text-decoration: underline;
`