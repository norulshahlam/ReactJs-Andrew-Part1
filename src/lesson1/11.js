/*  ****** LESSON  11*******

Run this first - npm run server
Run this after -
babel src/lesson1/11.js --out-file=public/scripts/app.js --presets=env,react --watch

with all this components create, we will create a main component - (IndecisionApp) which will contains all other components

the jsx var which is used as arg in ReactDOM.render() will no longer needed. the IndecisionApp component will instead be used as arg in ReactDOM.render()

this will shorten the code

*/
class IndecisionApp extends React.Component {
  render() {
    return (
      <div>
      <Header />
      <Action />
      <Options />
      <AddOptions />
      </div>
    )
  }
}
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
class Option extends React.Component {
  render() {
    return (
      <div>
     option component here
      </div>
    )
  }
}
class Options extends React.Component {
  render() {
    return (
      <div>
      <Option />
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


const appRoot = document.getElementById("app");
ReactDOM.render(<IndecisionApp/>, appRoot);
