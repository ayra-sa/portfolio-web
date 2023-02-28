import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

export const AboutWrap = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 60px;

  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: column;
  }
`;

export const AboutBottom = styled.div`
  display: flex;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: column;
    padding-bottom: 30px;
  }

`;

export const Left = styled.div`
  flex: 1;
`;

export const Right = styled.div`
  flex: 1;

  @media ${(props) => props.theme.breakpoints.md} {
    margin-top: 40px;
  }
`;

export const Profile = styled.figure`
  text-align: center;
`;
export const ImgMe = styled.img`
  max-width: 100%;
  height: 400px;
`;
export const Me = styled.div``;
export const Description = styled.div`
  flex: 1;
`;
export const Text = styled.p`
  font-size: 1.2em;
  margin-bottom: 1rem;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 1em;
  }
`;

export const LinkBelow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 20px;

  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
`;

export const LinkBelowMobile = styled(LinkBelow)`
  display: none;

  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
  }
`;

export const Hearth = styled.div`
  background-image: url("https://assets.codepen.io/23500/Hashflag-AppleEvent.svg");
  background-size: calc(100px * 62) 100px;
  background-repeat: no-repeat;
  background-position-x: calc(100px * (62 * -1 + 2));
  background-position-y: calc(100px * 0.02);
  width: 100px;
  height: 100px;
`;

export const Love = styled.label`
  display: block;
  width: 100px;
  height: 100px;
  cursor: pointer;
  border-radius: 999px;
  overflow: visible;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
`;

export const like = keyframes`
    0% {
      background-position-x: 0;
    }
    100% {
      background-position-x: calc(100px * (62 * -1 + 3));
    }
`;

export const Check = styled.input`
  display: none;

  &:checked + ${Hearth} {
    animation: ${like} 1s steps(calc(62 - 3));
    animation-fill-mode: forwards;
  }
`;

export const Contact = styled.a`
  width: 100px;
  text-decoration: none;
  font-size: 2.4em;
  height: 100px;
  line-height: 90px;
  color: lightslategrey;

  &:hover {
    color: lightslategrey;
  }
`;

export const LinkSos = styled.a`
  position: relative;
  overflow: hidden;
  text-decoration: none;
  color: ${(props) => props.theme.colors.bluepurple};
  &::after {
    content: "";
    background: ${(props) => props.theme.colors.lightgrey};
    position: absolute;
    left: 12px;
    bottom: -4px;
    width: calc(100% - 8px);
    height: calc(100% - 8px);
    z-index: -1;
    transition: 0.35s cubic-bezier(0.25, 0.1, 0, 2.05);
  }
  &:hover:after {
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 100%;
  }
`;
//   @media (hover: hover) {
//     ${Love}:hover {
//       background-color: #E1255E15;
//       ${Heart} {
//         background-position-x: calc(100px * (62 * -1 + 1));
//       }
//     }
//   }

export const MyResume = styled.a`
  background: ${(props) => props.theme.colors.bluepurple};
  color: #fff;
  padding: 15px 25px;
  font-weight: 600;
  transition: .5s;

  &:hover {
    border-radius: 10px;
    color: #fff;
    box-shadow: 0 4px 8px hsla(190deg, 15%, 5%, .2);
  }
`;

export const Resume = styled.button`
  position: relative;
  display: inline-flex;
  width: 180px;
  height: 55px;
  margin: 3rem 0;
  perspective: 1000px;
  flex: 1;
`;
export const ResumeDownload = styled.a`
  font-size: 19px;
  letter-spacing: 1px;
  transform-style: preserve-3d;
  transform: translateZ(-25px);
  transition: transform 0.25s;

  &::before,
  &::after {
    position: absolute;
    height: 55px;
    width: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 4px solid ${(props) => props.theme.colors.bluepurple};
    box-sizing: border-box;
    border-radius: 5px;
    font-weight: 600;
  }

  &::before {
    content: "Resume";
    color: #fff;
    background: ${(props) => props.theme.colors.bluepurple};
    transform: rotateY(0deg) translateZ(25px);
  }
  &::after {
    content: "Download";
    color: ${(props) => props.theme.colors.bluepurple};
    transform: rotateX(90deg) translateZ(25px);
  }

  &:hover {
    transform: translateZ(-25px) rotateX(-90deg);
  }
`;
