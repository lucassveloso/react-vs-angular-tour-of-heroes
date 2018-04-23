import React from "react";
import { Heading, Image } from "spectacle";
import balance from "../../assets/balance.png";

export default () => (
  <div>
    <Heading size={6} textColor="secondary" caps>Conclusões</Heading>
    <Image src={balance} height="500" />
  </div>
);
