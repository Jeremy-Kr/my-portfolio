import React from "react";
import styled from "styled-components";
import Link from "next/link";

import { Bold, CustomParagraph } from "../common/TextComponents";

interface PortFolioItemProps {
  portfolio: Portfolio;
}

const PortFolioItem = ({ portfolio }: PortFolioItemProps) => {
  const { date, title, skills, description, demo, github } = portfolio;
  const newDate = date.split("-").slice(0, 2).join(".");

  return (
    <PortFolioItemContainer>
      <PortFolioHeader>
        <PortFolioItemTitle>{title}</PortFolioItemTitle>
        <CustomParagraph>{skills}</CustomParagraph>
      </PortFolioHeader>
      <PortFolioBody>
        <PortFolioDescription>{description}</PortFolioDescription>
      </PortFolioBody>
      <PortFolioFooter>
        <span>{newDate}</span>
        <PortFolioItemLink href={demo} target="_blank">
          <PortFolioItemLinkText>DEMO</PortFolioItemLinkText>
        </PortFolioItemLink>
        <PortFolioItemLink href={github} target="_blank">
          <PortFolioItemLinkText>GITHUB</PortFolioItemLinkText>
        </PortFolioItemLink>
      </PortFolioFooter>
    </PortFolioItemContainer>
  );
};

const PortFolioItemContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 50%;
  height: 25rem;
  padding: 3rem;
  border-right: 1px solid #000;

  &:nth-child(2n) {
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
  height: 12rem;
`;

const PortFolioDescription = styled(CustomParagraph)`
  display: -webkit-box;
  word-wrap: break-word;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
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
