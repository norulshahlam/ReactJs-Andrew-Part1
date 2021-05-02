/*  ****** LESSON  16*******
Run this first - npm run server
Run this after -
babel src/lessons/16.js --out-file=public/scripts/app.js --presets=env,react --watch

1. component state & using binding

2. the importance of using prevState values to update state instead of using this.state

*/
class Counter extends React.Component {
  constructor(props) {
    super(props);
    //  1.
    this.add = this.add.bind(this);
    this.minus = this.minus.bind(this);
    this.reset = this.reset.bind(this);
    this.state={
      count: 0
    }
  }
  add() {
    // 2. the arg refers to the curren value of the state
   this.setState((prevState)=>{
     return {
       count: prevState.count+1
     }
   })
  }
  minus() {
    this.setState((prevState)=>{
      return {
        count: prevState.count-1
      }
    })
  }
  reset() {
    this.setState(()=>{
      return {
        count: 0
      }
    })
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
