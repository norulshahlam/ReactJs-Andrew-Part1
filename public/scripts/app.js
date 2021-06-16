"use strict";

/*  ****** LESSON 4 *******

change this first:
babel src/lesson1/4.js --out-file=public/scripts/app.js --presets=env,react --watch
Run this later - npm run server

redering updated values - in previous lesson we managed to get event triggered thru console log. now we use it to update the numbers on the browser. however it doesnt update because it is rendered once (A). Although the value has changed, it is not reflected on browser. next lesson we will solve by  some adjustments on the code so u can see the diff
*/

var count = 0;

var addOne = function addOne() {
  count++;
  console.log(count);
};
var minusOne = function minusOne() {
  count--;
  console.log(count);
};

var reset = function reset() {
  count = 0;
  console.log(count);
};
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Count: ",
    count
  ),
  React.createElement(
    "button",
    { onClick: addOne },
    "+1"
  ),
  React.createElement("br", null),
  React.createElement(
    "button",
    { onClick: minusOne },
    "-1"
  ),
  React.createElement("br", null),
  React.createElement(
    "button",
    { onClick: reset },
    "reset"
  ),
  React.createElement("br", null)
);

var appRoot = document.getElementById("app");
// (A)
ReactDOM.render(template, appRoot);
