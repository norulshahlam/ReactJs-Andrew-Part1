/*  ****** LESSON 5 *******

Run this first - npm run server
Run this after -
babel src/lessons/5.js --out-file=public/scripts/app.js --presets=env,react --watch

solving the redering updated issue 

1. wrap template and render() in 1 function
2. run render() at main and all event handlers
*/

let count = 0;

const addOne = () => {
  count++;
  console.log(count);
  renderCounter()
};
const minusOne = () => {
  count--;
  console.log(count);
  renderCounter()
};

const reset = () => {
  count = 0;
  console.log(count);
  renderCounter()
};
const appRoot = document.getElementById("app");
const renderCounter = () => {
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
  ReactDOM.render(template, appRoot);
};

renderCounter()