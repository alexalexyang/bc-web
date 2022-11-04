import styled from "styled-components";
import { breakpoints } from "../../styles/constants";
import { HamburgerIcon, CancelIcon } from "../icons";
import MenuItems from "./menu-items";
import { useState } from "react";

const HamburgerMenuLayout = styled.nav`
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  background: brown;
  color: white;
  gap: 0.75rem;
  padding-bottom: 1.25rem;

  padding-top: 1.25rem;
  padding-left: 1.25rem;

  a {
    margin-right: 1.25rem;
  }

  a:hover {
    background-color: #401912;
  }

  @media only screen and (min-width: ${breakpoints.sm}px) {
    display: none;
  }
`;

const HamburgerMenu = () => {
  const [isOpen, toggleMenu ] = useState(false); 

  return (
    <HamburgerMenuLayout>
      <button
        onClick={() => toggleMenu(!isOpen)}
        aria-label={isOpen ? "Click to close menu": "Click to open menu"}
      >
        {isOpen ? <CancelIcon /> : <HamburgerIcon />}
      </button>
      {isOpen ? <MenuItems></MenuItems>: []}
    </HamburgerMenuLayout>
  );
};

export default HamburgerMenu;
