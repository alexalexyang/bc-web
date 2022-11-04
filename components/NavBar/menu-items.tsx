import Link from "next/link";

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

export default MenuItems;
