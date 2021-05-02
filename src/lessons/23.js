/*  ****** LESSON  23*******
Run this first - npm run server
Run this after -
babel src/lessons/23.js --out-file=public/scripts/app.js --presets=env,react --watch

remove individual options

a) create function to delete option
b) pass it down as props to <Options />
c) in <Optios />, pass it further down to each <Option /> in the map()
d) in <Option />, ccreate a button to with this func as handler to pass it up, with the option as the arg
e) in the function, use filter to remove this single option

*/
class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: props.options,
    };
    this.deleteAllOptions = this.deleteAllOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.addOption = this.addOption.bind(this);
    this.deleteOneOption = this.deleteOneOption.bind(this);
  }
  deleteAllOptions() {
    this.setState(() => ({ options: [] }));
  }

  // a)
  deleteOneOption(option) {
    // e)
    this.setState((prev) => ({
      options: prev.options.filter((item) => option !== item),
    }));
  }

  handlePick() {
    const random = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[random];
    console.log(option);
  }

  addOption(option) {
    if (!option) {
      return "Enter valid value";
    } else if (this.state.options.indexOf(option) > -1) {
      return "options exists";
    }

    this.setState((prevState) => ({
      options: prevState.options.concat(option),
    }));
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
          deleteAllOptions={this.deleteAllOptions}
          // b)
          deleteOneOption={this.deleteOneOption}
        />
        <AddOption addOption={this.addOption} />
      </div>
    );
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>

      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: "Default Title",
};
const Action = (props) => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>
        What should i do?
      </button>
    </div>
  );
};

const Options = (props) => {
  return (
    <div>
      <button onClick={props.deleteAllOptions}>Remove all</button>
      {props.options.map((option, key) => (
        <Option
          key={key}
          optionText={option}
          //  c)
          deleteOneOption={props.deleteOneOption}
        />
      ))}
    </div>
  );
};

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      {/* d) */}
      <button
        onClick={(e) => {
          props.deleteOneOption(props.optionText);
        }}
      >
        Remove
      </button>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.addOption = this.addOption.bind(this);

    this.state = {
      error: undefined,
    };
  }

  addOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.addOption(option);

    this.setState(() => ({ error }));
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}

        <form onSubmit={this.addOption}>
          <input type="text" name="option" />
          <button>Add option</button>
        </form>
      </div>
    );
  }
}

const appRoot = document.getElementById("app");
ReactDOM.render(<Root options={["apple", "banana"]} />, appRoot);
