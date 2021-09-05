import styled from "styled-components"

export const FooterWrapper = styled.section`
	display: flex;
	justify-content: center;
	/* width: calc(100vw - 96px);
	max-width: 1040px; */
	/* padding: 2rem 48px 40px; */
	margin: 1rem auto;
	box-sizing: content-box;


  @media ${props => props.theme.breakpoints.sm} {
    padding: 2rem 0;
    width: calc(100vw - 32px);
  }
`
export const Copyright = styled.h4`
	display: flex;
  	align-items: center;
	color: ${props => props.theme.colors.darkgrey}
`