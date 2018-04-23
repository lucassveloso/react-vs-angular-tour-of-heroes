import React from "react";
import { Heading } from "spectacle";
import ComparativeBox from "../components/comparative-box";

const itemsAngular = [
  "Karma e Jasmine",
  "Necessidade de tratar a injeção de dependência a todo momento usando o utilitário TestBed.",
  "Precisa de um browser para rodar os testes. Por default utiliza o karma-chrome-launcher"
];

const itemsReact = [
  "Jest com Enzyme",
  "Facilidade nos testes pelo fato da aplicação ser desenvolvida com menos dependências. Nos casos necessários o Auto-Mocking salva a vida.",
  "Teste de Snapshot"
];

export default () => (
  <div>
    <Heading size={6} textColor="secondary" caps>3. Testes</Heading>
    <ComparativeBox angular={itemsAngular} react={itemsReact} />
  </div>
);
