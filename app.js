import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React"
);
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Heading1"),
    React.createElement("h2", {}, "Heading2"),
  ])
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
