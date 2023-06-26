// const heading = document.createElement("h1");
// heading.innerHTML = "Hello React June from Javascript";
// const root = document.getElementById("root");
// root.appendChild(heading);

const div = React.createElement("div", { key: "parentDiv" }, [
  React.createElement("p", {}, "I am paragraph1!"),
  React.createElement("p", {}, "I am paragraph2!"),
]);

const heading1 = React.createElement(
  "h1",
  { id: "heading", key: "parent" },
  "Hello World1!"
);

const heading2 = React.createElement("h1", { key: "child" }, "Hello World2!");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render([heading1, heading2, div]);
