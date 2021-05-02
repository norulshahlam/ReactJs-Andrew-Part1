/*  ****** LESSON  19*******
Run this first - npm run server
Run this after -
babel src/lessons/19.js --out-file=public/scripts/app.js --presets=env,react --watch

 props vs state

 * object               * object
 * used for rendering   * used for rendering
 * change from above    * changes cause
   causes re-renders      re-renders
 * comes from above     * defined in component itself
 * cant b changed       * can b changed by component
   by component


1. understnad which is parent method - "this.props.addOption"
2. which is current child method - "this.addOption"
3. adding option from <AddOption /> and pass up to <Root />
4. avoid manipulating the state itself, instead concat the current options with the newly added option -> this will return a new array

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

5. validate this add options - 
  a) check for empty input
  b) check for exisiting options
  c) create error state and render if the above conditions are true

*/
class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ["one", "two", "three"],
    };
    this.deleteOption = this.deleteOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.addOption = this.addOption.bind(this);
  }
  deleteOption() {
    this.setState(() => {
      return {
        options: [],
      };
    });
  }
  handlePick() {
    const random = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[random];
    console.log(option);
  }

  addOption(option) {
    // 5a.
    if (!option) {
      return "Enter valid value";
      // 5b.
    } else if (this.state.options.indexOf(option) > -1) {
      return "options exists";
    }
    this.setState((prevState) => {
      return {
        // 4. dont do this - prevState.options.push(option)
        options: prevState.options.concat([option]),
      };
    });
  }
  render() {
    const title = "Indecision";
    const subtitle = "Put your life in the hands of computer";
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          deleteOption={this.deleteOption}
        />
        <AddOption addOption={this.addOption} />
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
  render() {
    return (
      <div>
        <button onClick={this.props.handlePick}>pick a list!</button>
        <button onClick={this.handlePick} disabled={!this.props.hasOptions}>
          What shouold i do?
        </button>
      </div>
    );
  }
}
class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.deleteOption}>Remove all</button>
        <Option />
        {this.props.options.map((option, key) => {
          return <Option key={key} optionText={option} />;
        })}
      </div>
    );
  }
}
class Option extends React.Component {
  render() {
    // 1. this refers to the parent method
    return <div>{this.props.optionText}</div>;
  }
}
class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.addOption = this.addOption.bind(this);
    // 5c
    this.state = {
      error: undefined,
    };
  }
  addOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    // 1 - this refers to the parent method
    // 3 - pass props 'upwards'
    const error = this.props.addOption(option);
    this.setState(() => {
      return {
        error,
      };
    });
  }
  render() {
    return (
      <div>
      {this.state.error && <p>{this.state.error}</p>}
        {/* 2. this refers to this current method */}
        <form onSubmit={this.addOption}>
          <input type="text" name="option" />
          <button>Add option</button>
        </form>
      </div>
    );
  }
}
const appRoot = document.getElementById("app");
ReactDOM.render(<Root />, appRoot);
