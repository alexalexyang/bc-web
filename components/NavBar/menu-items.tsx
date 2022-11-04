import Link from "next/link";
import styled from "styled-components";
import { breakpoints } from "../../styles/constants";

const NavLayout = styled.nav`
  display: none;
  
  @media only screen and (min-width: ${breakpoints.sm}px) {
    flex-direction: row;
    display: flex;
    background: brown;
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-size: 2rem;
    text-align: center;
    line-height: 2rem;
    justify-content: space-evenly; 
    color: white;
  }
`;

const MenuItems = () => {
    return (
      <>
          <Link href="/">
            Home
          </Link>
  
          <Link href="/blog/1">
            Blog
          </Link>
  
          <Link href="/biodiversity-singapore">
            Biodiversity Singapore
          </Link>
  
          <Link href="/open-science">
            Open Science
          </Link>
  
          <Link href="/about-us">
            About us
          </Link>
      </>
    );
};

const NavMenu = () => {
    return (
      <NavLayout>
        <MenuItems></MenuItems>
      </NavLayout>
    );
};

export default MenuItems;
