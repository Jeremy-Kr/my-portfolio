import React from "react";
import styled from "styled-components";
import Link from "next/link";

import { Bold, CustomParagraph } from "../common/TextComponents";

const PortFolioItem = () => {
  return (
    <PortFolioItemContainer>
      <PortFolioHeader>
        <PortFolioItemTitle>포트폴리오1</PortFolioItemTitle>
        <CustomParagraph>React</CustomParagraph>
      </PortFolioHeader>
      <PortFolioBody>
        <CustomParagraph>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus,
          numquam quo harum culpa porro aliquam nesciunt. Ut animi, beatae
          blanditiis magni deserunt laudantium voluptas maxime provident sequi
          iure consequatur exercitationem? Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Delectus, numquam quo harum culpa porro
          aliquam nesciunt. Ut animi, beatae blanditiis magni deserunt
          laudantium voluptas maxime provident sequi iure consequatur
          exercitationem?
        </CustomParagraph>
      </PortFolioBody>
      <PortFolioFooter>
        <span>22.12.</span>
        <PortFolioItemLink href="#" target="_blank">
          <PortFolioItemLinkText>DEMO</PortFolioItemLinkText>
        </PortFolioItemLink>
        <PortFolioItemLink href="#" target="_blank">
          <PortFolioItemLinkText>GITHUB</PortFolioItemLinkText>
        </PortFolioItemLink>
      </PortFolioFooter>
    </PortFolioItemContainer>
  );
};

const PortFolioItemContainer = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  padding: 3rem;
  border-right: 1px solid #000;

  &:last-child {
    border-right: none;
  }
`;

const PortFolioHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const PortFolioItemTitle = styled(Bold)`
  font-size: 1.5rem;
`;

const PortFolioBody = styled.div`
  margin-bottom: 2rem;
`;

const PortFolioFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PortFolioItemLink = styled(Link)``;

const PortFolioItemLinkText = styled(CustomParagraph)`
  color: #000;
  text-decoration: underline;
`;

export default PortFolioItem;
