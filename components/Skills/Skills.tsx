import Image from "next/image";
import styled from "styled-components";

import { SkillsIcon, Paragraph, Subtitle } from "@/components";

const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <SkillsTitleContainer>
        <Subtitle>Skills</Subtitle>
        <SkillsIconContainer>
          <SkillsIcon />
        </SkillsIconContainer>
      </SkillsTitleContainer>
      <SkillsSection>
        <SkillsSectionTitle>1.Basic</SkillsSectionTitle>
        <SkillIconBox>
          <Image
            width={132.375}
            height={42}
            alt="HTML5"
            src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"
          />
          <Image
            width={115.5}
            height={42}
            alt="CSS3"
            src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white"
          />
          <Image
            width={189.75}
            height={42}
            alt="JavaScript"
            src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=black"
          />
          <Image
            width={189.75}
            height={42}
            alt="TypeScript"
            src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"
          />
        </SkillIconBox>
      </SkillsSection>
      <SkillsSection>
        <SkillsSectionTitle>2.Library</SkillsSectionTitle>
        <SkillIconBox>
          <Image
            width={129.375}
            height={42}
            alt="React"
            src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"
          />
          <Image
            width={129.375}
            height={42}
            alt="Redux"
            src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white"
          />
          <Image
            width={197.25}
            height={42}
            alt="React Query"
            src="https://img.shields.io/badge/ReactQuery-FF4154?style=for-the-badge&logo=ReactQuery&logoColor=white"
          />
          <Image
            width={277.5}
            height={42}
            alt="Styled Components"
            src="https://img.shields.io/badge/StyledComponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"
          />
        </SkillIconBox>
      </SkillsSection>
      <SkillsSection>
        <SkillsSectionTitle>3.Framework</SkillsSectionTitle>
        <SkillIconBox>
          <Image
            width={148.125}
            height={42}
            alt="Next.js"
            src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=next.js&logoColor=white"
          />
          <Image
            width={205.125}
            height={42}
            alt="React Native"
            src="https://img.shields.io/badge/ReactNative-61DAFB?style=for-the-badge&logo=React&logoColor=black"
          />
        </SkillIconBox>
      </SkillsSection>
    </SkillsContainer>
  );
};

const SkillsContainer = styled.div`
  width: 80rem;
  margin: 0 auto;

  border-left: 1px solid #000;
  border-right: 1px solid #000;
`;

const SkillsTitleContainer = styled.div`
  position: relative;
  width: 80rem;
  margin: 0 auto;
  padding: 6rem 4rem 3rem;
  border-bottom: 1px solid #000;
`;

const SkillsIconContainer = styled.div`
  position: absolute;
  top: 2rem;
  right: 4em;
`;

const SkillsSection = styled.section`
  width: 100%;
  height: 15rem;
  padding: 3rem 4rem;
  border-bottom: 1px solid #000;

  &:last-child {
    border-bottom: none;
  }
`;

const SkillsSectionTitle = styled(Paragraph)`
  font-size: 1.5rem;
  font-weight: 700;
`;

const SkillIconBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 2rem;
`;

export default Skills;
