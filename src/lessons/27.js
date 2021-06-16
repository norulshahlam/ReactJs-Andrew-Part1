/*    **** LESSON 2 *****

[https://www.udemy.com/course/react-2nd-edition/learn/lecture/7707736#content]

    i. to run this, go to webpack.config.js,  change:  
    entry: "./src/lesson2/2.js",

    ii. run: npm run webpack
    iii. run npm run server

    1. bringing our decision app here

    2. we noticed that we no longer use the js scripts for react & react dom in our index.html as we will be importing it here in our js file. i commented for your reference.  but before that, make sure we instal the package:

    npm i react@16.0.0 react-dom@16.0.0

    2. next lesson, we will split our component into its own file so we will be having folders and files all will be in folder '3'. the fomrat of the subsequent lesson will be like this
*/

import React from 'react';
import ReactDOM from 'react-dom';

class Root extends React.Component {
    constructor(props) {
      super(props);
      this.deleteAllOptions = this.deleteAllOptions.bind(this);
      this.handlePick = this.handlePick.bind(this);
      this.addOption = this.addOption.bind(this);
      this.deleteOneOption = this.deleteOneOption.bind(this);
      this.state = {
        options: props.options,
      };
    }
    // 1.
    componentDidMount() {
      // 4b.
      try {
        const json = localStorage.getItem("options");
  
        const options = JSON.parse(json);
        if (options) {
          this.setState(() => ({options}));
        }
      } catch (error) {}
    }
  
    // 2. saving option
    componentDidUpdate(prevProps, prevState) {
      // 2a
      console.log(prevState);
  
      // 4a. check if there is any delete / add
      if (prevState.options.length !== this.state.options.length) {
        const json = JSON.stringify(this.state.options);
        localStorage.setItem("options", json);
      }
    }
    // 3.
    componentWillUnmount() {
      /*
      run this on the browser console:
      ReactDOM.render(React.createElement('p'), document.getElementById('app'));
      */
      console.log(4);
    }
  
    deleteAllOptions() {
      this.setState(() => ({ options: [] }));
    }
  
    deleteOneOption(option) {
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
            deleteOneOption={this.deleteOneOption}
          />
          <AddOption addOption={this.addOption} />
        </div>
      );
    }
  }
  
  Root.defaultProps = {
    options: []
  };
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
        {/* 5 */}
        {props.options.length === 0 && <p>Please add option!</p>}
        {props.options.map((option, key) => (
          <Option
            key={key}
            optionText={option}
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
  
      if (!error) {
        e.target.elements.option.value = "";
      }
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
  ReactDOM.render(<Root />, appRoot);
  
