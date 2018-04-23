import React from "react";
import { Heading } from "spectacle";
import ComparativeBox from "../components/comparative-box";

const itemsAngular = [
  "Possuí várias coisas já inclusas como: Sistema de roteamento, RxJs, HttpClient, Forms/Validations e etc.",
  "Two way data binding - É um recurso poderoso mas já é considerado antipattern",
  "Implementa o padrão MVC"
];

const itemsReact = [
  "Virtual DOM ",
  "State e Props",
  "Flux e Redux",
  `Pacotes - React tem um ecossistema muito rico em libs complementares graças a sua liberdade. É comum usar algumas dessas em projetos: react-router,
  fetch/axios, Jest, Enzyme, Storybooks, styled-components e etc.`
];

export default () => (
  <div>
    <Heading size={6} textColor="secondary" caps>2. Features</Heading>
    <ComparativeBox angular={itemsAngular} react={itemsReact} />
  </div>
);
