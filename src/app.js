


/*  ****** LESSON 2 *******
events handler
1. method 1 - function referencing for even handler
2. method 2 - inline function
*/

let count = 0;
// 1. 
const add = () => {
  console.log("method1");
};
const template3 = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={add}>+1</button><br/>
    <button onClick={()=>{console.log("method2")}}>+1</button>
  </div>
);

const appRoot = document.getElementById("app");
ReactDOM.render(template3, appRoot);
