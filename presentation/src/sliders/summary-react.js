import React from "react";
import styled from "styled-components";
import { Heading } from "spectacle";
import ComparativeBox from "../components/comparative-box";

const Wrapper = styled.div`
  font-size: 24px;
`;

const itemsReact = [
  "Components criados de forma simples fazendo uso apenas de javascript e JSX;",
  "Estilos podem ser aplicados de diversas formas: Importando css ou pré processadores, usando inline com JS, usando libs como styled-components e etc;",
  `É comum fazer o uso do Redux para fazer o gerenciamento de dados da aplicação. Esse pattern garante segurança e facilidade na hora de manter os
   componentes atualizados com uma unica fonte de verdade (store);`,
  "Granularidade baixa é incentivada pela simplicidade da criação e comunicação entre componentes;"
];


export default () => (
  <Wrapper>
    <Heading size={6} textColor="secondary" caps>Resumo</Heading>
    <ComparativeBox react={itemsReact} />
  </Wrapper>
);
