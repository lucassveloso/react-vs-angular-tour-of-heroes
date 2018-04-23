import React from "react";
import styled from "styled-components";
import {
  Image
} from "spectacle";
import logoAngular from "../../assets/angular-logo.svg";
import logoReact from "../../assets/react-logo.svg";
import versus from "../../assets/versus.png";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export default () => (
  <Wrapper>
    <Image src={logoAngular} height="300"/>
    <Image src={versus} height="100"/>
    <Image src={logoReact} height="300"/>
  </Wrapper>
);
