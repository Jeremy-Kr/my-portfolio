import Head from "next/head";
import styled from "styled-components";

import {
  Landing,
  NavBar,
  About,
  Skills,
  PortFolio,
  Contact,
} from "@/components";

interface EclipseProps {
  left?: number;
  top?: number;
  right?: number;
  bottom?: number;
  color: string;
}

export default function Home() {
  return (
    <>
      <Head>
        <title>JEONGIK__LEE</title>
        <meta name="description" content="JEONGIK's PORTFOLIO SITE" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Container>
          <NavBar />
        </Container>
        <Container>
          <Eclipse top={10} left={5} color="#cc957f" />
          <Landing />
        </Container>
        <Container>
          <Eclipse bottom={15} right={5} color="#9c98d4" />
          <About />
        </Container>
        <Container>
          <Skills />
        </Container>
        <Container>
          <Eclipse top={10} left={5} color="#cc957f" />
          <PortFolio />
        </Container>
        <Container>
          <Eclipse bottom={15} right={5} color="#9c98d4" />
          <Contact />
        </Container>
      </Main>
    </>
  );
}

const Main = styled.main`
  /* 지우기!@!! */
  margin-bottom: 100px;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  border-bottom: 1px solid #000;
`;

const Eclipse = styled.div<EclipseProps>`
  position: absolute;
  ${(props) => (props.top ? "top: " + -props.top + "rem;" : "")}
  ${(props) => (props.bottom ? "bottom: " + -props.bottom + "rem;" : "")}
  ${(props) => (props.left ? "left: " + -props.left + "rem;" : "")}
  ${(props) => (props.right ? "right: " + -props.right + "rem;" : "")}
  z-index: -1;
  width: 820px;
  height: 820px;
  background: linear-gradient(
    180deg,
    rgba(0, 194, 255, 0) 0%,
    ${(props) => props.color} 100%
  );
  filter: blur(100px);
  transform: rotate(134.32deg);
  border-radius: 50%;
`;
