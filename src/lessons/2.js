/*  ****** LESSON 2 *******

change this first:
babel src/lesson1/2.js --out-file=public/scripts/app.js --presets=env,react --watch
Run this later - npm run server

1. use ternatory as condition in jsx
2. use logical 'AND' operator -  if true render, else dont do anything
3. using function as condition and output with html element
 
*/

var user = {
  name: "shah",
  age: 26,
  location: "jurong",
};

// 1.
function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}

var template = (
  <div>
    {/* 1. */}
    <h1>{user.name ? user.name : "Anonymous"}</h1>
    {/* 2. */}
    {user.age && user.age >= 18 && <p>age: {user.age}</p>}
    {/* 3. */}
    {getLocation(user.location)}
  </div>
);

const appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);
