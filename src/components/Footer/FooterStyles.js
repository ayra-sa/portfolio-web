import styled from "styled-components"

export const FooterWrapper = styled.section`
	display: flex;
	justify-content: center;
	margin: 20px auto;
	box-sizing: content-box;


  @media ${props => props.theme.breakpoints.sm} {
    padding: 2rem 0;
    width: calc(100vw - 32px);
  }
`
export const Copyright = styled.h4`
	display: flex;
  	align-items: center;
	column-gap: 6px;
	color: ${props => props.theme.colors.darkgrey}
`