import type { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { supabase } from "@/lib/supabase";

import {
  Landing,
  NavBar,
  About,
  Skills,
  PortFolio,
  Contact,
} from "@/components";
import { CustomParagraph } from "@/components/common";

interface EclipseProps {
  left?: number;
  top?: number;
  right?: number;
  bottom?: number;
  color: string;
}

interface PortfolioProps {
  portfolios: Portfolio[];
}

export default function Home({ portfolios }: PortfolioProps) {
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
          <PortFolio portfolios={portfolios} />
        </Container>
        <Container>
          <Eclipse bottom={0} right={5} color="#9c98d4" />
          <Contact />
        </Container>
        <Footer>
          <FooterTextContainer>
            <FooterText>2023 JEONGIK__LEE</FooterText>
            <TopButton href="#nav">TOP</TopButton>
            <FooterText>Thanks to. @young-02</FooterText>
          </FooterTextContainer>
        </Footer>
      </Main>
    </>
  );
}

const Main = styled.main``;

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

const Footer = styled.footer`
  width: 100%;
  height: 14rem;
  background-color: #000;
`;

const FooterTextContainer = styled.div`
  width: 80rem;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  padding: 4rem;
`;

const FooterText = styled(CustomParagraph)`
  color: #fff;
  font-size: 1.2rem;
`;

const TopButton = styled(Link)`
  color: #fff;
  font-size: 1.2rem;
`;

export const getStaticProps: GetStaticProps = async () => {
  const { data, error } = await supabase.from("portfolio").select("*");
  if (error) {
    console.log(error);
  }
  return {
    props: {
      portfolios: data,
    },
  };
};
