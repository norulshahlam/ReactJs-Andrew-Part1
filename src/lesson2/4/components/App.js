/*    **** LESSON 4 Source Maps with Webpack *****
https://www.udemy.com/course/react-2nd-edition/learn/lecture/7707750#content

    i. to run this, go to webpack.config.js,  change:  
    entry: "./src/lesson2/4/4.js",

    ii. run: npm run webpack
    iii. run npm run server

   1. currently we r running on compiled bundle.js files. if there is any debugging require, this makes it hard to find which part of the code is causing issue thru dev tool. we will do a config to make sure the dov tool shows us the js file with line number that we type, not the compiled codes (bundle.js)

   https://webpack.js.org/configuration/devtool/#development

   2. use webpack live server instead of the current live-server

   a) run: npm i webpack-dev-server@2.5.1

   b) add scripts: "dev-server": "webpack-dev-server"

   note: web pack dev-server is not actually writing the physical file and serving that up which can slow things down. It is just serving it up from memory which keeps our development server super snappy and fast. So even if we were to delete bundle.js, rerun the dev server we're still not going to get a physical bundle file. the web pack dev server tool is never going to do that. 

   Now obviously there are times we want a physical file for serving things up to production and we still have that option. We just need to run the other script: "npm run build". This is going to run a web pack a single time and this will eventually be the web pack build that we set up for production.

   now we can just run above 1 script onwards. it will compile and server as a live-server at the same time 

   3. ES6 class properties

   run: npm i babel-plugin-transform-class-properties@6.24.1

   add this in .babelrc: 

    "plugins":[
    "transform-class-properties"
  ]
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
console.log(1111);
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