import React from "react";
import { Heading } from "spectacle";
import ComparativeBox from "../components/comparative-box";

const itemsAngular = [
  "Framework grande com todas as funcionalidades básicas.",
  "Vocabulário complexo - Diversos conceitos próprios como diretivas, services, pipes e etc.",
  "Mais opinativo - Impoẽ conceitos e padrões.",
  "Typescript - Superset do JS que adiciona recursos como tipagem. É mantida pela Microsoft e não pelo time Angular."
];

const itemsReact = [
  "Lib pequena de view render.",
  "Outras responsabilidade da aplicação são preenchidas com módulos e pacotes externos.",
  "Mais extensível - Existe diversas formas de se trabalhar mas a comunidade já amadureceu.",
  "JSX - Uma extesão de sintaxe do JS para escrever 'HTML' dentro dos componentes. Torna simples a criação de templates."
];

export default () => (
  <div>
    <Heading size={6} textColor="secondary" caps>1. Curva de aprendizado</Heading>
    <ComparativeBox angular={itemsAngular} react={itemsReact} />
  </div>
);
