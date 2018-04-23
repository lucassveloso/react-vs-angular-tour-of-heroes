import React from "react";
import { Image, Heading } from "spectacle";
import heroes from "../../assets/heroes.png";
export default () => (
  <div>
    <Heading size={6} textColor="secondary" caps>POC - Tour of Heroes</Heading>
    <Image src={heroes} height="400" />
  </div>
);
