import Image from "next/image";
import styled from "styled-components";

import { CustomParagraph, Title } from "../common/TextComponents";

const About = () => {
  const info = [
    "name : JeongIk",
    "birth : 93.09.05",
    "address : Goyang-Si",
    "marry : true",
    "pet : MIZZA",
    "hobby : Netflix",
    "job : Front-End Developer",
  ];

  return (
    <AboutContainer id="about">
      <AboutImage>
        <Image
          src="/images/profile.png"
          alt="profile image"
          width={638}
          height={720}
          draggable={false}
        />
      </AboutImage>
      <AboutText>
        <AboutTitle>HELLO : &#41;</AboutTitle>
        <AboutTextContent>info : &#123;</AboutTextContent>
        {info.map((item, index) => (
          <AboutTextContent key={index}>
            &#08; &#08; &#08; {item}
          </AboutTextContent>
        ))}
        <AboutTextContent>&#125;</AboutTextContent>
      </AboutText>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  display: flex;
  width: 80rem;
  height: 45rem;
  margin: 0 auto;
`;

const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  padding: 6rem 4rem;
  border-right: 1px solid #000;
`;

const AboutImage = styled.div`
  width: 50%;
  height: 100%;
  border-left: 1px solid #000;
  border-right: 1px solid #000;
`;

const AboutTitle = styled(Title)`
  margin-bottom: 3rem;
`;

const AboutTextContent = styled(CustomParagraph)`
  font-size: 1.5rem;
  line-height: 2.5rem;
`;

export default About;
