/*  ****** LESSON  15*******
Run this first - npm run server
Run this after -
babel src/lessons/15.js --out-file=public/scripts/app.js --presets=env,react --watch

we discussed binding issue and how to resolve. now this binding issues pertains to the event handlers.

1. in Options components, we have removeAll() & render(). render() has access to the options props but removeAll() doesnt have bcos of this binding issue. we will implement bind() to solve this issues on all events handlers, so that events handlers can access props like render() does too

2. removeAll()

*/
class IndecisionApp extends React.Component {
  render() {
    const title = "Indecision";
    const subtitle = "Put your life in the hands of computer";
    const options = ["one", "two", "three"];
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOptions />
      </div>
    );
  }
}
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}
class Action extends React.Component {
  handlePick() {
    console.log(222);
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What shouold i do?</button>
      </div>
    );
  }
}
//  1.
class Options extends React.Component {
  // 2.
  constructor(props) {
    super(props);
    this.removeAll = this.removeAll.bind(this);
  }

  removeAll() {
    console.log(this.props.options);
  }
  render() {
    return (
      <div>
        <button onClick={this.removeAll}>Remove all</button>
        {this.props.options.map((option, key) => {
          return <Option key={key} optionText={option} />;
        })}
      </div>
    );
  }
}
class Option extends React.Component {
  render() {
    return <div>{this.props.optionText}</div>;
  }
}
class AddOptions extends React.Component {
  formSubmit(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    if (option) {
      console.log(option);
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.formSubmit}>
          <input type="text" name="option" />
          <button>Add option</button>
        </form>
      </div>
    );
  }
}

const appRoot = document.getElementById("app");
ReactDOM.render(<IndecisionApp />, appRoot);
