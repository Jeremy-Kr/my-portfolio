import Link from "next/link";
import styled from "styled-components";

export const LogoFont = styled.h1`
  font-size: 1rem;
  font-weight: 700;
`;

export const Title = styled.h2`
  font-size: 4.5rem;
  font-weight: 700;
  font-family: "Londrina Shadow", cursive;
`;

export const Subtitle = styled.h3`
  font-size: 2.625rem;
  line-height: 3.4375rem;
  font-family: "Londrina Solid", cursive;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.5625rem;
`;

export const LinkText = styled(Link)`
  font-weight: 700;
  font-size: 1rem;

  &:hover {
    cursor: pointer;
  }
`;

export const Bold = styled.span`
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.5625rem;
`;

export const BarCodeText = styled.span`
  font-size: 5rem;
  font-family: "Libre Barcode 128", cursive;
`;
