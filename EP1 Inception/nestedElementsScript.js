// {
//   <div id="parent">
//     <div id="child">
//       <h1>Intellibot</h1>
//     </div>
//     <div className="content">
//       <h1>Descriptiont</h1>
//       <h2>Sub description</h2>
//     </div>
//   </div>;
// }

const heading = React.createElement("div", {}, "Intellibot");

const child = React.createElement("div", { id: "child" }, heading);

const description = React.createElement("p", {}, "Description");
const subDescription = React.createElement("p", {}, "Sub Description");

const content = React.createElement("div", { className: "content" }, [
  description,
  subDescription,
]);

const parent = React.createElement("div", { id: "parent" }, [child, content]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
