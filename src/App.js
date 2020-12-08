import "./styles.css";

import React from "react";
import { createOvermind } from "overmind";
import { Provider } from "overmind-react";

import { config, configWithStatechart } from "./overmind";

import Counter from "./Counter";

export default function App() {
  // Uncomment to use overmind without statechart
  // const overmind = createOvermind(config);

  // Uncomment to use overmind with statechart
  const overmind = createOvermind(configWithStatechart);

  return (
    <Provider value={overmind}>
      <div className="App">
        <h1>Overmind Playground</h1>
        <Counter />
      </div>
    </Provider>
  );
}
