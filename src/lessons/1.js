/* ****** LESSON 1 *******

change this first:
babel src/lesson1/1.js --out-file=public/scripts/app.js --presets=env,react --watch
Run this later - npm run server

1. Rendering into browser using jsx

*/

var user = {
  name: "shah",
  age: 26,
  location: "jurong",
};

var template = (
  <div>
    <h1>{user.name}</h1>
    <p>age: {user.age}</p>
    <p>location: {user.location}</p>
  </div>
);

const appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);
