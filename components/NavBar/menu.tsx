import { useState } from "react";
import { HamburgerIcon, CancelIcon } from "../icons";
import MenuItems from "./menu-items";
import { MobileMenuWrapper, DesktopMenuWrapper, NavWrapper } from "./menu-styles";

const Menu = () => {
    const [isOpen, toggleMenu ] = useState(false); 

    return ( 
      <NavWrapper>
        <MobileMenuWrapper>
          <button
            onClick={() => toggleMenu(!isOpen)}
            aria-label={isOpen ? "Click to close menu": "Click to open menu"}
          >
            {isOpen ? <CancelIcon /> : <HamburgerIcon />}
          </button>
          {isOpen && <MenuItems />}
        </MobileMenuWrapper>
        <DesktopMenuWrapper>
          <MenuItems />
        </DesktopMenuWrapper>
      </NavWrapper> 
    )
};

export default Menu;
