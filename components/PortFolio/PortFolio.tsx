import styled from "styled-components";

import { PortFolioIcon, PortFolioItem } from "@/components";
import { Subtitle } from "@/components/common";

interface portfolioProps {
  portfolios: Portfolio[];
}

interface PortFolioContainerProps {
  rows: number;
}

const PortFolio = ({ portfolios }: portfolioProps) => {
  const rows = Math.round(portfolios.length / 2);

  console.log();

  return (
    <PortFolioContainer id="portfolio" rows={rows}>
      <PortFolioTitle>
        <Subtitle>PortFolio</Subtitle>
        <PortFolioIconContainer>
          <PortFolioIcon />
        </PortFolioIconContainer>
      </PortFolioTitle>
      <PortFolioList>
        <PortFolioItemContainer>
          {portfolios.map((portfolio) => (
            <PortFolioItem key={portfolio.id} portfolio={portfolio} />
          ))}
        </PortFolioItemContainer>
      </PortFolioList>
    </PortFolioContainer>
  );
};

const PortFolioContainer = styled.div<PortFolioContainerProps>`
  width: 80rem;
  margin: 0 auto;
  height: ${(props) => 12.5 + props.rows * 25}rem;
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

const PortFolioItemContainer = styled.div`
  /* display: flex; */
  width: 100%;
  height: 100%;
`;

// const PortFolioItemRow = styled.div`
//   display: flex;
//   width: 100%;
//   height: 100%;
//   border-bottom: 1px solid #000;

//   &:last-child {
//     border-bottom: none;
//   }
// `;

export default PortFolio;
