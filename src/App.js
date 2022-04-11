import React from "react";

import Slides from "./components/Slides";
const title = "Slideshow App";
const slidesItems = [
  { title: "step 1", text: "Break The UI Into A Component Hierarchy" },
  { title: "step 2", text: "Build A Static Version in React" },
  {
    title: "step 3",
    text: "Identify The Minimal (but complete) Representation Of UI State"
  },
  { title: "step 4", text: "Identify Where Your State Should Live" }
];
function App() {
  return (
    <div>
      <h8k-navbar header={title}></h8k-navbar>
      <div className="App">
        <Slides slides={slidesItems} />
      </div>
    </div>
  );
}

export default App;
