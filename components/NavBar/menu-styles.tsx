import { breakpoints } from "../../styles/constants";
import styled from "styled-components";

export const DesktopMenuWrapper = styled.div`
  display: none;
  padding-top: 1rem;

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
  font-size: 2rem;
`;

export const MobileMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1.25rem;
  padding-top: 1.25rem;
  padding-left: 1.25rem;
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