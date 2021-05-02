/*  ****** LESSON  18*******
Run this first - npm run server
Run this after -
babel src/lessons/18.js --out-file=public/scripts/app.js --presets=env,react --watch

now we learned about prevState and binding, lets apply it to our main app

1. remove options from the main and set it as state

2. send state to <Action/> - true or false, if there is any options, by using condition

3. in <Action/> component, if there is no options, then diasable the button. check using the true/false state send from main component

we learn about passing props/state downwards but we cant pass upwards. we will learn how to resolve this

we want to delete all options but we 1 <Options /> to do it. Since the options state is in <Root />, we need to pass down to <Options /> to triggger it, then go up back to <Root /> to clear it. but how do we pass the state upwards?

4. we simply wrap this state in a function in <Root />, pass it down to <option /> as a prop, and then let this function (in a prop) be called by the onClick event. so when we click, the function will clear this state. so in a way we can 'bring up' a prop

5. do the same for handlePick() - just generate random list option  on console

*/
class Root extends React.Component {
  constructor(props) {
    super(props);
    // 1b.
    this.state = {
      options: ["one", "two", "three"],
    };
    this.deleteOption = this.deleteOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
  }
  // 4a
  deleteOption() {
    this.setState(() => {
      return {
        // 4c
        options: [],
      };
    });
  }
  //  5.
  handlePick() {
    const random= Math.floor(Math.random() * this.state.options.length);
 const option = this.state.options[random];
 console.log(option);
  }
  render() {
    const title = "Indecision";
    const subtitle = "Put your life in the hands of computer";
    // 1a. const options = ["one", "two", "three"];
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        {/* 2.  */}
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          deleteOption={this.deleteOption}
        />
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
  render() {
    return (
      <div>
        <button onClick={this.props.handlePick}>pick a list!</button>
        <button
          onClick={this.handlePick}
          // 3.
          disabled={!this.props.hasOptions}
        >
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
      {/* 4b. */}
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
ReactDOM.render(<Root />, appRoot);
