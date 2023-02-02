import styled from "styled-components";

import { BarCodeText, LinkText, Title } from "@/components/common";

const Landing = () => {
  const landingTitleTexts = [
    "HI, THERE! 👋",
    "WELCOME TO MY PORTFOLIO!",
    "I'M A FRONT-END DEVELOPER",
  ];

  return (
    <LandingContainer>
      <LandingMainSection>
        <LandingTitleContainer>
          <LandingTitle>
            {landingTitleTexts.map((text, index) => {
              return (
                <LandingTitleBox key={index}>
                  <Title>{text}</Title>
                </LandingTitleBox>
              );
            })}
          </LandingTitle>
          <LandingTitleAside>TODO</LandingTitleAside>
        </LandingTitleContainer>
        <LandingSocialContainer>
          <SocialLinks>
            <SocialLinkText href="https://github.com/Jeremy-Kr">
              GITHUB&gt;&gt;
            </SocialLinkText>
            <SocialLinkText href="#">ROKETPUNCH&gt;&gt;</SocialLinkText>
            <SocialLinkText href="mailto:wjddlr905@gmail.com">
              EMAIL&gt;&gt;
            </SocialLinkText>
            <SocialLinkText href="https://open.kakao.com/o/smL6Sa2e">
              KAKAOTALK&gt;&gt;
            </SocialLinkText>
          </SocialLinks>
          <BarCode>
            <BarCodeText>B 1993. 09. 05. P +82-10-4776-7060</BarCodeText>
          </BarCode>
        </LandingSocialContainer>
      </LandingMainSection>
      <LandingRightSide>TODO</LandingRightSide>
    </LandingContainer>
  );
};

const LandingContainer = styled.section`
  height: 48rem;
  width: 80rem;
  display: flex;
  margin: 0 auto;
`;

const LandingMainSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  border-left: 1px solid #000;
  border-right: 1px solid #000;
`;

const LandingRightSide = styled.article`
  width: 15%;
  border-right: 1px solid #000;
`;

const LandingTitleContainer = styled.div`
  width: 100%;
  display: flex;
`;

const LandingTitle = styled.div``;

const LandingTitleBox = styled.div`
  padding: 3rem 4rem;
  height: 11rem;
  width: 56rem;
  border-bottom: 1px solid #000;
`;

const LandingTitleAside = styled.div`
  height: 33rem;
  width: 100%;
  border-left: 1px solid #000;
  border-bottom: 1px solid #000;
`;

const LandingSocialContainer = styled.div`
  padding: 3.5rem 4rem;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 3rem;
`;

const SocialLinkText = styled(LinkText)`
  font-size: 1.5rem;
  font-weight: 400;
`;

const BarCode = styled.div`
  display: flex;
  justify-content: center;
`;

export default Landing;
