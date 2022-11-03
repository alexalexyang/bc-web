import Link from "next/link";
import styled from "styled-components";
import { breakpoints } from "../styles/constants";
import { HamburgerIcon, CancelIcon } from "./icons";
import { useState } from "react";

const MobileMenuLayout = styled.div`
  display: grid;
  grid-template-rows: 80px auto;
  background: brown;
  padding-left: 1.25rem;
  
  @media only screen and (min-width: ${breakpoints.sm}px) {
    display: none;
  }
`;

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

const MobileNavLayout = styled.nav`
  display: flex;
  flex-direction: column;
  background: brown;
  padding-bottom: 1rem;
  font-size: 2rem;
  color: white;
`;

const Menu = () => {
    const [isOpen, toggleMenu ] = useState(false); 

    return ( 
      <>
        <MobileMenuLayout> 
          <button
            onClick={() => toggleMenu(!isOpen)}
            aria-label={isOpen ? "Click to close menu": "Click to open menu"}
          >
            {isOpen ? <CancelIcon /> : <HamburgerIcon />}
          </button>
          {isOpen ? <MobileMenuItems></MobileMenuItems> : []}
        </MobileMenuLayout>
        <MenuItems></MenuItems>
      </> 
    )
};

const MobileMenuItems = () => {
  return (
    <MobileNavLayout>
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
    </MobileNavLayout>
  );
};

const MenuItems = () => {
  return (
    <NavLayout>
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
    </NavLayout>
  );
};

export default Menu;
