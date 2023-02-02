import Link from "next/link";
import styled from "styled-components";

import { LogoFont, Subtitle } from "@/components/common";

const NavBar = () => {
  return (
    <NavBarContainer>
      <Nav>
        <LogoFont>JEONGIK__LEE</LogoFont>
        <NavItemContainer>
          <NavItem href="#about">ABOUT</NavItem>
          <NavItem href="#skills">SKILLS</NavItem>
          <NavItem href="#portfolio">PORTFOLIO</NavItem>
        </NavItemContainer>
      </Nav>
      <ContactContainer>
        <NavItem href="#contact">CONTACT</NavItem>
      </ContactContainer>
    </NavBarContainer>
  );
};

const NavBarContainer = styled.div`
  display: flex;
  width: 80rem;
  margin: 0 auto;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 85%;
  padding: 2.5rem 4rem;
  border-left: 1px solid #000;
  border-right: 1px solid #000;
`;

const NavItemContainer = styled.div`
  display: flex;
`;

const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  border-right: 1px solid #000;

  a {
    margin: 0;
  }
`;

const NavItem = styled(Link)`
  font-size: 1rem;
  font-weight: 300;
  margin-left: 4rem;
  text-align: center;
`;

export default NavBar;
