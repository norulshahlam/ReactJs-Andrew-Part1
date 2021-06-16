/*  ****** LESSON  7*******

change this first:
babel src/lesson1/7.js --out-file=public/scripts/app.js --presets=env,react --watch
Run this later - npm run server
***************************************

1. create button to select added list randomly - using random()
2. disable this button (cond rendering) if theres no list added yet


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

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    render();
  }
};

const removeLists = () => {
  app.options = [];
  render();
};
// 1.
const makeDecision = () => {
  const random = Math.floor(Math.random() * app.options.length);
  const option = app.options[random];
  alert(option);
  console.log(random);
  render();
};

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
      {app.options.length} <br />
      <button onClick={removeLists}>remove list</button>
      {/* 2. */}
      <button disabled={app.options.length === 0} onClick={makeDecision}>
        what should i do?
      </button>
      <ol>
        {app.options.map((i, k) => {
          return <p key={k}>Options: {i}</p>;
        })}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

render();
