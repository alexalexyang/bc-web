import Link from "next/link";
import styled from "styled-components";
import { HamburgerIcon } from "./icons";
import { useState } from "react";

const MenuLayout = styled.div`
  display: grid;
  grid-template-rows: 80px auto;
`;

const Menu = () => {
    const [isOpen, toggleMenu ] = useState(false); 

    return ( 
        isOpen 
        ? 
            <MenuLayout> 
              <button onClick={() => toggleMenu(!isOpen)}>
                <HamburgerIcon />
              </button>
              <MenuItems />
            </MenuLayout> 
        : 
            <MenuLayout>
                <button onClick={() => toggleMenu(!isOpen)}>
                    <HamburgerIcon />
                </button>
            </MenuLayout> 
    )
};

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

export default Menu;