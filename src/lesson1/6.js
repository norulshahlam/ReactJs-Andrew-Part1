/*  ****** LESSON  6*******

Run this first - npm run server
Run this after -
babel src/lesson1/6.js --out-file=public/scripts/app.js --presets=env,react --watch

1. forms - add value into app.options[] and reflect the changes in browser using the same tehnique in last lesson

2. clear all options with the reset button
3. changing the renderCounter to just render()
4. render an array using map() and understand unique key props
5. consitional rendering
*/

const appRoot = document.getElementById("app");
const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: [],
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  // 1.
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    render();
  }
};
// 2.
const removeLists = () => {
  app.options = [];
  render();
};

// 3.
const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {/* 5. */}
      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
      {/* 5. */}
      {app.options.length} <br />
      <button onClick={removeLists}>remove list</button>
      <ol>
        {/* 4. */}
        {app.options.map((i, k) => {
          return <p key={k}>Options: {i}</p>;
        })}
      </ol>
      {/* 1. */}
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

render();
