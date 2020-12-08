import React from "react";

import { useOvermind } from "./overmind";

export default function Counter() {
  const { state, actions } = useOvermind();

  console.log("state:", state);
  console.log("actions:", actions);
  console.log("counter.state:", state.counter);
  console.log("counter.actions:", actions.ACTIONS.counter);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <button style={{ marginBottom: 5 }} onClick={actions.ACTIONS.counter.inc}>
        INCREMENT
      </button>
      <button style={{ marginBottom: 5 }} onClick={actions.ACTIONS.counter.dec}>
        DECREMENT
      </button>
      <button
        style={{ marginBottom: 5 }}
        onClick={actions.ACTIONS.counter.reset}
      >
        RESET
      </button>
      <span style={{ marginBottom: 5 }}>Count: {state.counter.count}</span>
    </div>
  );
}
