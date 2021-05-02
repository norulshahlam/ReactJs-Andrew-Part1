/*  ****** LESSON  20*******
Run this first - npm run server
Run this after -
babel src/lessons/20.js --out-file=public/scripts/app.js --presets=env,react --watch

stateless functional component - a component that doesnt manage state

convert some component into func component

1. convert class Header into function Header
2. convert class Action into function Action
3. convert class Options into function Options
4. convert class Option into function Option


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
      <h2>{props.subtitle}</h2>
    </div>
  );
};
// 1. class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//     );
//   }
// }


// 2. 
const Action = (props) => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>
        What should i do?
      </button>
    </div>
  );
};
// 2. class Action extends React.Component {
//   render() {
//     return (
//       <div>
//         <button onClick={this.props.handlePick}>pick a list!</button>
//         <button onClick={this.handlePick} disabled={!this.props.hasOptions}>
//           What shouold i do?
//         </button>
//       </div>
//     );
//   }
// }
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
// 3. class Options extends React.Component {
//   render() {
//     return (
//       <div>
//         <button onClick={this.props.deleteOption}>Remove all</button>
//         <Option />
//         {this.props.options.map((option, key) => {
//           return <Option key={key} optionText={option} />;
//         })}
//       </div>
//     );
//   }
// }
const Option=(props)=>{
  return <div>{props.optionText}</div>;
}
// 4. class Option extends React.Component {
//   render() {
//     return <div>{this.props.optionText}</div>;
//   }
// }
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

const User = (props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age} </p>
    </div>
  );
};
const appRoot = document.getElementById("app");
ReactDOM.render(<Root />, appRoot);
