import React from "react";
import { Heading, List, ListItem } from "spectacle";

export default () => {
  const features = [
    "Dashboard listando os melhores heróis",
    "Busca de heróis por nome",
    "Lista de todos os heróis",
    "Formulário para cadastrar um novo herói",
    "Botão para remover um herói",
    "Tela de detalhes do herói",
    "Formulário para alterar o nome do herói",
    "Sistema de logs que registra as operações"
  ];
  return (
    <div>
      <Heading size={6} textColor="secondary" caps>Aplicação</Heading>
      <List>
        {features.map((feature, i) => (
          <ListItem key={i} textSize={36}>{feature}</ListItem>
        ))}
      </List>
    </div>
  );
};
