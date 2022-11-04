import styled from "styled-components";
import Menu from "./NavBar/menu";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
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
