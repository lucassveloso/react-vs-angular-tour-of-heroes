import React from "react";
import styled from "styled-components";
import { Heading } from "spectacle";
import ComparativeBox from "../components/comparative-box";

const Wrapper = styled.div`
  font-size: 24px;
`;

const itemsAngular = [
  "Aplicação dividida em Modules, que precisam registrar de forma declarativa os components, services e modules que deseja expor;",
  "Components criados geralmente com 3 arquivos: HTML para template, CSS para styles e Typescript para declaração e lógica;",
  "Templates podem fazer uso de diversas diretivas padrões para manipular dados e expor comportamentos. Precisamos estudar e decorar eles;",
  "Faz uso de services para criar event emmiters que serão injetados nos componentes. É a forma padrão para gerenciar dados internos e externos da aplicação (API);"
];


export default () => (
  <Wrapper>
    <Heading size={6} textColor="secondary" caps>Resumo</Heading>
    <ComparativeBox angular={itemsAngular} />
  </Wrapper>
);
