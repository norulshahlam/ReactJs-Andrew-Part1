"use strict";

/*  ****** LESSON  8*******

Run this first - npm run server
Run this after -
babel src/lessons/8.js --out-file=public/scripts/app.js --presets=env,react --watch

a simply exercise - sepeareted from last lesson

1. toggle an element to hide & show on click event

2. toggle button value - button 'hide' when element is shown,
button 'show' when element is hidden

*/

var appRoot = document.getElementById("app");
var visibility = false;
var toggle = function toggle() {
  visibility = !visibility;
  render();
};

var render = function render() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Visibility toggle"
    ),
    React.createElement(
      "button",
      { onClick: toggle },
      visibility ? "hide" : "show"
    ),
    visibility && React.createElement(
      "p",
      null,
      "hi"
    )
  );
  ReactDOM.render(template, appRoot);
};

render();
