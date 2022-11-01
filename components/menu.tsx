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
          <a>Home</a>
        </Link>

        <Link href="/blog/1">
          <a>Blog</a>
        </Link>

        <Link href="/biodiversity-singapore">
          <a>Biodiversity Singapore</a>
        </Link>

        <Link href="/open-science">
          <a>Open Science</a>
        </Link>

        <Link href="/about-us">
          <a>About us</a>
        </Link>
    </>
  );
};

export default Menu;