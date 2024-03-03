const h2 = React.createElement("h2", {}, "Topics Covered");
const p = React.createElement(
  "p",
  {},
  "The Following is a list of all the topics we cover in the MDN learning area. ",
  React.createElement("br"),
  React.createElement("br"),
  React.createElement(
    "a",
    {
      href: "https://legacy.reactjs.org/docs/getting-started.html",
      target: "_blank",
    },
    "Getting started with"
  ),
  React.createElement("br"),
  React.createElement("br"),
  "Provides a practical introduction  to web development  for complete beginner",
  React.createElement("br"),
  React.createElement("br"),
  React.createElement(
    "a",
    {
      href: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Structuring_a_page_of_content",
      target: "_blank",
    },
    "HTML- Structuring the WEB"
  ),
  React.createElement("br"),
  React.createElement("p"),
  "  HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail",
  React.createElement("br"),
  React.createElement("p"),
  React.createElement(
    "a",
    {
      href: "https://legacy.reactjs.org/docs/faq-styling.html#gatsby-focus-wrapper",
    },
    "CSS- Styling the WEB"
  ),
  React.createElement("br"),

  React.createElement("p"),
  "CSS is the language that we use to control; our web content's style and layout, as well as adding behavior like animation.This topiuc provides comprehensive coverage of CSS"
);
const div = React.createElement("div", {}, [h2, p]);

ReactDOM.render(div, document.getElementById("root"));
