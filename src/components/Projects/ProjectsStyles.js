import styled from 'styled-components';


export const GridContainer = styled.section`
display: grid;
/* grid-template-columns: repeat(auto-fill, minmax(400px, 1fr)); */
grid-template-columns: repeat(3, 1fr);
padding: 1rem;
column-gap: 2rem;
gap: 2rem;
margin: 1rem 0;
@media ${(props) => props.theme.breakpoints.md} {
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2.5rem
}
@media ${(props) => props.theme.breakpoints.sm} {
  grid-template-columns: repeat(1, 1fr);
}

`
export const BlogCard = styled.div`
  display: flex;
  /* justify-content: space-between; */
  border-radius: 10px;
  /* box-shadow: 2px 5px 38px 16px hsl(0deg 0% 85% / 11%); */
  background-color: #fff;
  flex-direction: column;
  min-height: 500px;
  position: relative;
  transition: .3s ease;
  overflow: hidden;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;

`;

export const BlogBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin-top: 20px;
`

export const BlogBodyTop = styled.div`
  @media ${(props) => props.theme.breakpoints.sm} {
    padding-inline: 20px;
  }
`

export const BlogBodyBottom = styled.div``

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: ${props => props.theme.colors.lightgrey};
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 2.5rem;
  color: ${props => props.theme.colors.grey};
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  margin-bottom: 1rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem
  
}
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-evenly;
  gap: 1rem;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
  color:${props => props.theme.colors.grey};
  font-size: 1.6rem;
  width: 130px;
  text-align: center;
  font-weight: 600;
  padding:1rem 1.5rem;
  background: ${props => props.theme.colors.bluepurple};
  border-radius: 50px;
  transition: 0.5s;
  &:hover{
    background: ${props => props.theme.colors.bluey};
  }
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  /* justify-content: space-around; */
  padding: 2rem;
`
export const Tag = styled.li`
  background-color: #f1f8ff;
  color: ${props => props.theme.colors.bluepurple};
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: lowercase;
  border-radius: 50px;
  padding: .4rem .8rem;
`