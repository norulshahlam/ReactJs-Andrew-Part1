### React tutorial notes from Udemy by Andrew Mead

`This React tutorial is focus on class based components`


a) learn to use bable to transpile jsx into es5 js for browser to recognise.

install babel with preset. run on terminal

`yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2`

# what is babel preset?

Presets
`Babel presets can act as sharable set of Babel plugins and/or config options. We need to use presets that have the environment in which we want the code to be converted. For example, es2015 preset will convert the code to es5. Preset with value env will also convert to es5.`

# common environments:

@babel/preset-env for compiling ES2015+ syntax
@babel/preset-typescript for TypeScript
@babel/preset-react for React
@babel/preset-flow for Flow

[https://babeljs.io/docs/en/presets/]

b) Setting up Babel - run below code to use babel with presets

 `babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch`

 explanation:

 run babelon src/app.js, output the converted code to public/scripts/app.js
 --preset is the code u 1 2 be converted
 --watch will rerun if any changes in src/app.js

 c) use live server npm to load the coverted code on browser - run on terminal

`live-server public`