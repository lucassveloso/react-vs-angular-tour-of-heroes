import React from "react";
import { Deck, Slide } from "spectacle";

import Cover from "./sliders/cover";
import Poc from "./sliders/poc";
import PocDetail from "./sliders/poc-detail";
import ShowCode from "./sliders/show-code";
import SummaryAngular from "./sliders/summary-angular";
import SummaryReact from "./sliders/summary-react";
import Conclusions from "./sliders/conclusions";
import LearningCurve from "./sliders/learning-curve";
import Features from "./sliders/features";
import Tests from "./sliders/tests";
import Performance from "./sliders/performance";

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
          <Cover />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Poc />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <PocDetail />
        </Slide>
        <Slide transition={["zoom"]} bgColor="secondary" textColor="primary">
          <ShowCode />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <SummaryAngular />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <SummaryReact />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Conclusions />
        </Slide>
        <Slide transition={["fade"]} bgColor="quarternary" textColor="secondary">
          <LearningCurve />
        </Slide>
        <Slide transition={["fade"]} bgColor="quarternary" textColor="secondary">
          <Features />
        </Slide>
        <Slide transition={["fade"]} bgColor="quarternary" textColor="secondary">
          <Tests />
        </Slide>
        <Slide transition={["fade"]} bgColor="quarternary" textColor="secondary">
          <Performance />
        </Slide>
      </Deck>
    );
  }
}
