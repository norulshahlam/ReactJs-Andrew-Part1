import React from "react";
import ReactDOM from "react-dom";
import App from './components/App'

const appRoot = document.getElementById("app");
ReactDOM.render(<App />, appRoot);


class old {
  constructor(){
    this.name='mike'
  }
}

const old1 = new old()
  console.log(old1)

class new1{
  name= 'shah';
}
const new2=new new1();
console.log(new2);