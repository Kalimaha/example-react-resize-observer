import React from "react";

import useResponsiveBreakpoints from "./utils/useResponsiveBreakpoints";
import "./App.css";
import { Heading } from "./Heading"

function App() {
  const targetRef = React.useRef(null);
  const size = useResponsiveBreakpoints(targetRef, [
    { 1: 300 }, { 2: 400 }, { 3: 500 }, { 4: 600 },
    { 5: 700 }, { 6: 800 }, { 7: 900 }, { 8: 1000 },
    { 9: 1100 }, { 10: 1200 }, { 11: 1300 }, { 12: 1400 }
  ]);
  const color = useResponsiveBreakpoints(targetRef, [ { PINKY: 500 }, { RED_RED_WINE: 800 }, { MOFO_GREEN: 1200 } ]);

  return(
    <div ref={targetRef}>
      <Heading color={color} size={size}>• Egg and bacon</Heading>
      <Heading color={color} size={size}>• Egg, sausage and bacon</Heading>
      <Heading color={color} size={size}>• Egg and Spam</Heading>
      <Heading color={color} size={size}>• Egg, bacon and Spam</Heading>
      <Heading color={color} size={size}>• Egg, bacon, sausage and Spam</Heading>
      <Heading color={color} size={size}>• Spam, bacon, sausage and Spam</Heading>
      <Heading color={color} size={size}>• Spam, egg, Spam, Spam, bacon and Spam</Heading>
      <Heading color={color} size={size}>• Spam, Spam, Spam, egg and Spam</Heading>
      <Heading color={color} size={size}>• Spam, sausage, Spam, Spam, Spam, bacon, Spam, tomato and Spam</Heading>
      <Heading color={color} size={size}>• Spam, Spam, Spam, Spam, Spam, Spam, baked beans, Spam, Spam, Spam and Spam</Heading>
      <Heading color={color} size={size}>• Lobster Thermidor aux crevettes with a Mornay sauce, garnished with truffle pâté, brandy and a fried egg on top, and Spam.</Heading>
    </div>
  )
}

export default App;
