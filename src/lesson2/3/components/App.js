/*    **** LESSON 3 *****

    i. to run this, go to webpack.config.js,  change:  
    entry: "./src/lesson2/3/3.js",

    ii. run: npm run webpack
    iii. run npm run server

   2. split our component into its own file so we will be having folders and files using import/export module

   A) understand that <Option /> is nested in <Option /> so know where to import to with proper directory
*/
import React from "react";

import AddOption from "./AddOption";
import Action from "./Action";
import Header from "./Header";
import Options from "./Options";

class App extends React.Component {
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

  componentDidMount() {

    try {
      const json = localStorage.getItem("options");

      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (error) {}
  }


  componentDidUpdate(prevProps, prevState) {

    console.log(prevState);


    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  componentWillUnmount() {
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

App.defaultProps = {
  options: [],
};

export default App