

/* ****** LESSON 1 *******


Run this first - npm run server
Run this after -
babel src/lesson1/3.js --out-file=public/scripts/app.js --presets=env,react --watch


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
