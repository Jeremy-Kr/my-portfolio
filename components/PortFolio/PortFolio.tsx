import styled from "styled-components";

import { PortFolioIcon, PortFolioItem } from "@/components";
import { Subtitle } from "@/components/common";

const PortFolio = () => {
  return (
    <PortFolioContainer id="port-folio">
      <PortFolioTitle>
        <Subtitle>PortFolio</Subtitle>
        <PortFolioIconContainer>
          <PortFolioIcon />
        </PortFolioIconContainer>
      </PortFolioTitle>
      <PortFolioList>
        <PortFolioItemRow>
          <PortFolioItem />
          <PortFolioItem />
        </PortFolioItemRow>
        <PortFolioItemRow>
          <PortFolioItem />
          <PortFolioItem />
        </PortFolioItemRow>
      </PortFolioList>
    </PortFolioContainer>
  );
};

const PortFolioContainer = styled.div`
  width: 80rem;
  margin: 0 auto;
  height: 62.5rem;
  border-left: 1px solid #000;
  border-right: 1px solid #000;
`;

const PortFolioTitle = styled.div`
  position: relative;
  width: 80rem;
  margin: 0 auto;
  padding: 6rem 4rem 3rem;
  border-bottom: 1px solid #000;
`;

const PortFolioIconContainer = styled.div`
  position: absolute;
  top: 2rem;
  right: 4em;
`;

const PortFolioList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50rem;
`;

const PortFolioItemRow = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid #000;

  &:last-child {
    border-bottom: none;
  }
`;

export default PortFolio;
