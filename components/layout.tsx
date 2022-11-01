import Link from "next/link";
import styled from "styled-components";
import Menu from "./menu";

const Wrapper = styled.div`
  display: grid;
    
  @media (max-width: 766px) {
    grid-template-columns: 80px auto; 
  }
`

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: Props) => {
  return (
    <Wrapper>
      <Menu />
      {children}
    </Wrapper>
  );
};

export default Layout;
