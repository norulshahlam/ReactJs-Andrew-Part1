/*    **** LESSON 5 Using a Third-Party Component *****
https://www.udemy.com/course/react-2nd-edition/learn/lecture/7707760#content

    i. to run this, go to webpack.config.js,  change:  
    entry: "./src/lesson2/5/5.js",

    ii. run: npm run dev-server
    ***************************************

    1. using react-modal

      run: npm i react-modal@2.2.2
      go to OptionModal.js for details

    2. refactor Action.js, Option.js, Options.js, Header.js

    3. using webpack to configure our css

      i.  CSS loader - allow webpack to actually load in our CSS assets. and converted into a javascript representation of that CSS

           run: npm i style-loader@0.18.2 

      ii. style-loader -  takes that CSS that's in javascript and it actually adds it to the DOM by injecting a style tag that will actually get our styles showing up in the browser

           run: npm i css-loader@0.28.4 

      iii.  add css rule in webpack config

         {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },

      iv. import your css file in the js file that renders the DOM - 5.js

      Now that all is working, we wil beusing scss insted of css. the steps are similar as above:

      v.  run: npm i sass-loader@7.3.1 node-sass@4.14.1

      vi. add (and edit) the loader and additional rule in config -

        {
        test: /\.scss$/,
        use: ["style-loader", "css-loader",'sass-loader'],
      },

      vii.  using scss partials - import a scss partials to another scss -

        @import './base/base';  //base is _base.scss

        the rest of this lesson is on styling. we will be styling each component in its own scsss file. the base.scss will be the 'root' scss where all components is imported and used, similar to our our react component - all component is import in App.js as the root component

      viii. css reset using normalize

        run: npm i normalize.css
        in your root react component, import 'normalize.css/normalize.css'





*/
import React from "react";
import AddOption from "./AddOption";
import Action from "./Action";
import Header from "./Header";
import Options from "./Options";
import OptionModal from "./OptionModal";

class App extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
  };

  closeModal = () => {
    this.setState(() => ({
      selectedOption: undefined,
    }));
  };

  deleteAllOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  deleteOneOption = (option) => {
    this.setState((prev) => ({
      options: prev.options.filter((item) => option !== item),
    }));
  };
  handlePick = () => {
    const random = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[random];
    this.setState(() => ({
      selectedOption: option,
    }));
  };
  addOption = (option) => {
    if (!option) {
      return "Enter valid value";
    } else if (this.state.options.indexOf(option) > -1) {
      return "options exists";
    }
    this.setState((prevState) => ({
      options: prevState.options.concat(option),
    }));
  };
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
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  componentWillUnmount() {
    console.log(4);
  }

  render() {
    const title = "Indecision";
    const subtitle = "Put your life in the hands of computer";
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />

          <div className='widget'>
           <Options
            options={this.state.options}
            deleteAllOptions={this.deleteAllOptions}
            deleteOneOption={this.deleteOneOption}
          />
          <AddOption addOption={this.addOption} />
          </div>
         
        </div>

        <OptionModal
          closeModal={this.closeModal}
          selectedOption={this.state.selectedOption}
        />
      </div>
    );
  }
}

App.defaultProps = {
  options: [],
};

export default App;
