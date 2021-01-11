import "@compiled/react";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { root } from "./styles";

const App = () => {
  return (
    <>
      <h1 css={root}>I am a heading</h1>
    </>
  );
};

ReactDOM.render(<App />, document.querySelector("#app"));
