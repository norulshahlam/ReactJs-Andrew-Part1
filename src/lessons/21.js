/*  ****** LESSON  21*******
Run this first - npm run server
Run this after -
babel src/lessons/21.js --out-file=public/scripts/app.js --presets=env,react --watch


1. default prop values for title
2. conditional rndering for subtitle - only render if there is a subtitle
3. default prop values for options 

*/
class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // 3b.
      options:props.options,
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
    if (!option) {
      return "Enter valid value";
    } else if (this.state.options.indexOf(option) > -1) {
      return "options exists";
    }
    this.setState((prevState) => {
      return {
        options: prevState.options.concat([option]),
      };
    });
  }
  render() {
    const title = "Indecision";
    const subtitle = "Put your life in the hands of computer";
    return (
      <div>
      {/* 1. remove title props below and see the default prop used */}
      {/* 2. remove subtitle props below and see the subtitle element removed */}
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

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {/* 2.  */}
    {props.subtitle &&   <h2>{props.subtitle}</h2>}
    </div>
  );
};

// 1. 
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
      <button onClick={props.deleteOption}>Remove all</button>
      <Option />
      {props.options.map((option, key) => {
        return <Option key={key} optionText={option} />;
      })}
    </div>
  );
};

const Option = (props) => {
  return <div>{props.optionText}</div>;
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

        <form onSubmit={this.addOption}>
          <input type="text" name="option" />
          <button>Add option</button>
        </form>
      </div>
    );
  }
}

const appRoot = document.getElementById("app");
// 3a. 
ReactDOM.render(<Root options={['apple','banana']} />, appRoot);
