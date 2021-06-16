/*  ****** LESSON 4 *******

change this first:
babel src/lesson1/4.js --out-file=public/scripts/app.js --presets=env,react --watch
Run this later - npm run server
***************************************
redering updated values - in previous lesson we managed to get event triggered thru console log. now we use it to update the numbers on the browser. 
if u notice, it doesnt update because it is rendered once (A). Although the value has changed by looking at the console, it is not reflected on browser. next lesson we will solve by  some adjustments on the code so u can see the diff
*/

let count = 0;

const addOne = () => {
  count++;
  console.log(count);
};
const minusOne = () => {
  count--;
  console.log(count);
};

const reset = () => {
  count = 0;
  console.log(count);
};
const template = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <br />
    <button onClick={minusOne}>-1</button>
    <br />
    <button onClick={reset}>reset</button>
    <br />
  </div>
);

const appRoot = document.getElementById("app");
// (A)
ReactDOM.render(template, appRoot);
