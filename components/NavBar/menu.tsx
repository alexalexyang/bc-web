import { useState } from "react";
import HamburgerMenu from './hamburger-menu';
import NavMenu from "./nav";

const Menu = () => {
    const [isOpen, toggleMenu ] = useState(false); 

    const handleToggle = (event) => {
      toggleMenu(event)
    }

    return ( 
      <>
        <HamburgerMenu isOpen={isOpen} handleToggle={handleToggle}></HamburgerMenu>
        <NavMenu></NavMenu>
      </> 
    )
};

export default Menu;
