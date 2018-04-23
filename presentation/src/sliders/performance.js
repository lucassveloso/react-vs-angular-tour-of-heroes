import React from "react";
import styled from "styled-components";
import { Heading } from "spectacle";

const Wrapper = styled.div`
  font-size: 24px;
`;

export default () => (
  <Wrapper>
    <Heading size={6} textColor="secondary" caps>4. Performance</Heading>
    <p>O Angular entrega um pacote muito grande com diversas funcionalidades enquanto o React possui um ecossistema mais equilibrado.</p>
    <p>Isso garante que um projeto feito com React e outras bibliotecas, cujo o número de funcionalidades se igualam ao Angular,
      tendem a possuir mais performance.</p>
    <p>Afinal as bibliotecas escolhidas geralmente se propõe a fazer apenas uma coisa, e crescem na comunidade por fazer isso da melhor forma possível.</p>
  </Wrapper>
);
