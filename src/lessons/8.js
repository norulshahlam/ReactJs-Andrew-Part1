/*  ****** LESSON  8*******

Run this first - npm run server
Run this after -
babel src/lessons/8.js --out-file=public/scripts/app.js --presets=env,react --watch

a simply exercise - sepeareted from last lesson

1. toggle an element to hide & show on click event

2. toggle button value - button 'hide' when element is shown,
button 'show' when element is hidden

*/

const appRoot = document.getElementById("app");
let visibility = false;
const toggle = () => {
  visibility = !visibility;
  render();
};

const render = () => {
  const template = (
    <div>
      <h1>Visibility toggle</h1>
      <button onClick={toggle}>{visibility ? "hide" : "show"}</button>
      {visibility && <p>hi</p>}
    </div>
  );
  ReactDOM.render(template, appRoot);
};

render();
