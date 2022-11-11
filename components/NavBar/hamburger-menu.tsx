import { HamburgerIcon, CancelIcon } from "../icons";
import MenuItems from "./menu-items";
import { useState } from "react";
import { HamburgerMenuLayout } from "../../styles/components"

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
