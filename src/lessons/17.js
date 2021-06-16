/*  ****** LESSON  17*******
Run this first - npm run server
Run this after -
babel src/lesson1/17.js --out-file=public/scripts/app.js --presets=env,react --watch

a simple updating state by using prevState and toggling it, also using binding

*/
class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      visibility: false,
    };
  }

  toggle() {
    this.setState((prevState)=>{
      return {
        visibility: !prevState.visibility
      }
    })
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggle}>
          {this.state.visibility ? "Hide details" : "Show details"}
        </button>
        {this.state.visibility && (
          <div>
            <p>Hey. These are some details you can now see!</p>
          </div>
        )}
      </div>
    );
  }
}
const appRoot = document.getElementById("app");
ReactDOM.render(<VisibilityToggle />, appRoot);
