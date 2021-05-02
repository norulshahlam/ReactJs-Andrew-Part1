/*  ****** LESSON  10*******

Run this first - npm run server
Run this after -
babel src/lessons/10.js --out-file=public/scripts/app.js --presets=env,react --watch

how to define react component from scratch, using basic approach

*/
class Header extends React.Component {
  render() {
    return (
      <div>
      <h1>Indecision</h1>
      <h2>Put your life in the hands of computer</h2>
      </div>
    )
  }
}
class Action extends React.Component {
  render() {
    return (
      <div>
      <button>What shouold i do?</button>
      </div>
    )
  }
}
class Options extends React.Component {
  render() {
    return (
      <div>
     options component here
      </div>
    )
  }
}
class AddOptions extends React.Component {
  render() {
    return (
      <div>
     add options component here
      </div>
    )
  }
}

const jsx = (
  <div>
   
    <Header />
    <Action />
    <Options />
    <AddOptions />
  </div>
);
const appRoot = document.getElementById("app");
ReactDOM.render(jsx, appRoot);
