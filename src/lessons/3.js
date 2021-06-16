/*  ****** LESSON 3 *******
change this first:
babel src/lesson1/3.js --out-file=public/scripts/app.js --presets=env,react --watch
Run this later - npm run server

events handler
1. method 1 - function referencing for even handler
2. method 2 - inline function

both handler ca be seen thru console

*/

let count = 0;
// 1.
const add = () => {
  console.log("method1");
};

const template = (
  <div>
    <h1>Count: {count}</h1>
    {/* 1 */}
    <button onClick={add}>+1</button>
    <br />
    {/* 2 */}
    <button
      onClick={() => {
        console.log("method2");
      }}
    >
      +1
    </button>
  </div>
);

const appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);
