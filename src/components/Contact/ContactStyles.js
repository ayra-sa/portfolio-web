import styled from 'styled-components'

export const ContactWrap = styled.div`
  flex: 0 1 500px;
  width: 70%;
  margin: auto;
  padding: 10px;

  @media ${props => props.theme.breakpoints.md} {
    width: 100%;
  }
`
export const Screen = styled.div`
  position: relative;
  background: #fff;
  border-radius: 15px;

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 20px;
    right: 20px;
    bottom: 0;
    border-radius: 15px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, .4);
    z-index: -1;
  }
`
export const ScreenHeader = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 20px;
    background: ${props => props.theme.colors.darkgrey};
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
`
  
export const HeaderLeft = styled.div`
    margin-right: auto;
`
export const HClose = styled.div`
    display: inline-block;
    width: 8px;
    height: 8px;
    margin-right: 3px;
    border-radius: 8px;
    background: white;
    background: #ed1c6f;
`
export const HMin = styled.div`
    display: inline-block;
    width: 8px;
    height: 8px;
    margin-right: 3px;
    border-radius: 8px;
    background: white;
    background: #74c54f;
`
export const HMax = styled.div`
    display: inline-block;
    width: 8px;
    height: 8px;
    margin-right: 3px;
    border-radius: 8px;
    background: white;
    background: #e8e925;
`
export const HeaderRight = styled.div`
    display: flex;
`
export const HEllipsis = styled.div`
    width: 3px;
    height: 3px;
    margin-left: 2px;
    border-radius: 8px;
    background: #999;
`
export const ScreenBody = styled.div`
    display: flex;

    @media ${(props) => props.theme.breakpoints.sm} {
      flex-direction: column;
    }

    @media ${(props) => props.theme.breakpoints.md} {
      padding: 40px;
    }
`
export const BodyItem = styled.div`
    flex: 1;
    padding: 50px;

    @media ${(props) => props.theme.breakpoints.md} {
      padding: 0;
    }
`
export const BodyLeft = styled.div`
    flex: 1;
    padding: 50px;
    display: flex;
    flex-direction: column;

    @media ${(props) => props.theme.breakpoints.sm} {
      margin-bottom: 30px;
      text-align: center;
    }
`
export const Title = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    color: ${props => props.theme.colors.bluey};
    font-size: 26px;
    
    &::after {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      bottom: -10px;
      width: 25px;
      height: 4px;
      background: ${props => props.theme.colors.bluey};

      @media ${(props) => props.theme.breakpoints.sm} {
        display: none;
      }
    }

    @media ${(props) => props.theme.breakpoints.sm} {
      flex-direction: row;
      text-align: center;
      justify-content: center;
    }
`
export const Span = styled.span`
    font-size: 1em;

    @media ${(props) => props.theme.breakpoints.sm} {
      margin-right: 12px;
    }
`
export const Info = styled.div`
    margin-top: auto;
    font-size: .6em;
    color: ${props => props.theme.colors.darkgrey};
`
export const FormGroup = styled.div`
    margin-bottom: 15px;
`
export const FormMessage = styled.div`
    margin-bottom: 15px;
    margin-top: 40px;
`
export const FormButton = styled.div`
    margin-bottom: 0;
    text-align: right;
`
export const Input = styled.input`
    width: 100%;
    padding: 10px 0;
    background: none;
    border: none;
    border-bottom: 1px solid #666;
    color: ${props => props.theme.colors.grey};
    font-size: 14px;
    /* text-transform: uppercase; */
    outline: none;
    transition: border-color .2s;
    font-weight: 700;
    letter-spacing: 1.4px;

    &::placeholder {
      color: ${props => props.theme.colors.darkgrey};
    }

    &:focus {
      border-bottom-color: ${props => props.theme.colors.grey};
    }
`
export const Button = styled.button`
    background: none;
    border: none;
    color: ${props => props.theme.colors.bluey};
    font-size: 14px;
    cursor: pointer;
    outline: none;
    font-weight: 700;
    letter-spacing: 1.4px;
  
    &:hover {
      color: #b9134f;
    }
`
export const Result = styled.p`
  font-size: .85em;
  color: ${props => props.theme.colors.bluey};
  /* color:  */
`