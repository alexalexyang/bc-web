import Link from "next/link";
import styled from "styled-components";
import { HamburgerIcon, CancelIcon } from "./icons";
import { useState } from "react";

const MobileMenuLayout = styled.div`
  display: grid;
  grid-template-rows: 80px auto;
  background: brown;
  padding-left: 1.25rem;
`;

const NavLayout = styled.div`
  display: flex;
  flex-direction: column;
  background: brown;
  padding-bottom: 1rem;
  font-size: 3rem;
  color: white;
`;

const Menu = () => {
    const [isOpen, toggleMenu ] = useState(false); 

    return ( 
        isOpen
        ? 
            <MobileMenuLayout> 
              <button onClick={() => toggleMenu(!isOpen)}>
                <CancelIcon />
              </button>
              <MenuItems />
            </MobileMenuLayout> 
        : <>
            <MobileMenuLayout>
                <button onClick={() => toggleMenu(!isOpen)}>
                  <HamburgerIcon />
                </button>
            </MobileMenuLayout> 
          </>
    )
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
