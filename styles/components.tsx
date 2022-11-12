import { breakpoints } from "./constants";
import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const CenterCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  margin: 0 0.5rem;

  h1 {
    font-size: 2.5rem;
    font-weight: 400;
    letter-spacing: 1px;
  }

  h2 {
    font-size: 2rem;
    font-weight: 200;
    letter-spacing: 1px;
  }

  a {
    color: dodgerblue;

    :hover {
      color: deeppink;
    }
  }

  @media only screen and (min-width: ${breakpoints.sm}px) {
    width: ${breakpoints.sm}px;

    h1 {
      font-size: 3.5rem;
    }
  }
`;

export const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100%;
`;


export const LandingPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 90vh;

  @media only screen and (min-width: ${breakpoints.sm}px) {
    gap: 1.5rem;
    flex: 1;
    width: 100%;
  }
`;

export const DesktopMenuWrapper = styled.div`
  display: none;
  padding-top: 1rem;
  font-size: 2rem;
  gap: 0.75rem;

  @media only screen and (min-width: ${breakpoints.sm}px) {
    display: flex;
    justify-content: space-evenly; 
    padding-bottom: 1rem;
    text-align: center;
    line-height: 2rem;
  }
`;

export const NavWrapper = styled.nav`
  background: brown;
  color: white;
`;

export const MobileMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1.25rem;
  padding-top: 1.25rem;
  padding-left: 1.25rem;
  padding-top: 1rem;
  font-size: 2rem;
  gap: 0.75rem;

  a {
    margin-right: 1.25rem;
  }

  a:hover {
    background-color: #401912;
  }

  @media only screen and (min-width: ${breakpoints.sm}px) {
    display: none;
  }
`