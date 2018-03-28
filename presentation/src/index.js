import React from "react";
import { Deck, Slide } from "spectacle";

import Slide1 from "./sliders/1";
import Slide2 from "./sliders/2";
import Slide3 from "./sliders/3";
import Slide4 from "./sliders/4";
import Slide5 from "./sliders/5";
import Slide6 from "./sliders/6";
import Slide7 from "./sliders/7";
import Slide8 from "./sliders/8";

import createTheme from "spectacle/lib/themes/default";
require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quarternary: "#c4d9e88a"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="quarternary">
          <Slide1 />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Slide2 />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Slide3 />
        </Slide>
        <Slide transition={["zoom"]} bgColor="secondary" textColor="primary">
          <Slide4 />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Slide5 />
        </Slide>
        <Slide transition={["fade"]} bgColor="quarternary" textColor="secondary">
          <Slide6 />
        </Slide>
        <Slide transition={["fade"]} bgColor="quarternary" textColor="secondary">
          <Slide7 />
        </Slide>
        <Slide transition={["fade"]} bgColor="quarternary" textColor="secondary">
          <Slide8 />
        </Slide>
      </Deck>
    );
  }
}
