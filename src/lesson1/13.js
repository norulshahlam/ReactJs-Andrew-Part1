/*  ****** LESSON  13*******
Run this first - npm run server
Run this after -
babel src/lesson1/13.js --out-file=public/scripts/app.js --presets=env,react --watch


1. event listener - add the same event we did earlier in lesson 7

a) generate random option
b) remove all
c) add option

all of this only set and console log it, to ensure handler is working.

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
      {/* a) generate random option */}
        <button onClick={this.handlePick}>What shouold i do?</button>
      </div>
    );
  }
}
class Options extends React.Component {
  removeAll() {
    console.log(6);
  }
  render() {
    return (
      <div>
       {/* b) remove all */}
        <button onClick={this.removeAll}>Remove all</button>
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
       {/* c) add option */}
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
