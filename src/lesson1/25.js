/*  ****** LESSON  25*******
Run this first - npm run server
Run this after -
babel src/lesson1/25.js --out-file=public/scripts/app.js --presets=env,react --watch

Saving and Loading the Count to/from localstorage using lifecycle methods


*/
class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.add = this.add.bind(this);
    this.minus = this.minus.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem("count");

      const count = parseInt(json, 10);

      if (!isNaN(count)) {
        this.setState(() => ({ count }));
      }
    } catch (error) {}
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem("count", this.state.count);
    }
    console.log(prevState);
  }

  add() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }
  minus() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
  }
  reset() {
    this.setState(() => {
      return {
        count: 0,
      };
    });
  }
  render() {
    return (
      <div>
        <h1>count: {this.state.count} </h1>
        <button onClick={this.add}>+1</button>
        <button onClick={this.minus}>-1</button>
        <button onClick={this.reset}>reset</button>
      </div>
    );
  }
}
const appRoot = document.getElementById("app");
ReactDOM.render(<Counter />, appRoot);
