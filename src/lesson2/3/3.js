/*    **** LESSON 3 *****

[https://www.udemy.com/course/react-2nd-edition/learn/lecture/7707736#content]

    i. to run this, go to webpack.config.js,  change:  
    entry: "./src/lesson2/3/3.js",

    ii. run: npm run webpack
    iii. run npm run server

   2. split our component into its own file so we will be having folders and files using import/export module

   A) understand that <Option /> is nested in <Option /> so know where to import to with proper directory
*/
import React from "react";
import ReactDOM from "react-dom";
import App from './components/App'



const appRoot = document.getElementById("app");
ReactDOM.render(<App />, appRoot);
