// This is how to create an element in react
const heading = React.createElement(
  "h1",
  { className: "welcomeMessage", id: "welcome1" },
  "Hello world in React"
);

console.log("🚀", heading);

// This is how we create root in react (using React DOM)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
