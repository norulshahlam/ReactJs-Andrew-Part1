"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*  ****** LESSON  15*******
Run this first - npm run server
Run this after -
babel src/lessons/15.js --out-file=public/scripts/app.js --presets=env,react --watch

we discussed binding issue and how to resolve. now this binding issues pertains to the event handlers.

1. in Options components, we have removeAll() & render(). render() has access to the options props but removeAll() doesnt have bcos of this binding issue. we will implement bind() to solve this issues on all events handlers, so that events handlers can access props like render() does too

2. removeAll()

*/
var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp() {
    _classCallCheck(this, IndecisionApp);

    return _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).apply(this, arguments));
  }

  _createClass(IndecisionApp, [{
    key: "render",
    value: function render() {
      var title = "Indecision";
      var subtitle = "Put your life in the hands of computer";
      var options = ["one", "two", "three"];
      return React.createElement(
        "div",
        null,
        React.createElement(Header, { title: title, subtitle: subtitle }),
        React.createElement(Action, null),
        React.createElement(Options, { options: options }),
        React.createElement(AddOptions, null)
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

var Header = function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          this.props.title
        ),
        React.createElement(
          "h2",
          null,
          this.props.subtitle
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Action = function (_React$Component3) {
  _inherits(Action, _React$Component3);

  function Action() {
    _classCallCheck(this, Action);

    return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
  }

  _createClass(Action, [{
    key: "handlePick",
    value: function handlePick() {
      console.log(222);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "button",
          { onClick: this.handlePick },
          "What shouold i do?"
        )
      );
    }
  }]);

  return Action;
}(React.Component);
//  1.


var Options = function (_React$Component4) {
  _inherits(Options, _React$Component4);

  // 2.
  function Options(props) {
    _classCallCheck(this, Options);

    var _this4 = _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, props));

    _this4.removeAll = _this4.removeAll.bind(_this4);
    return _this4;
  }

  _createClass(Options, [{
    key: "removeAll",
    value: function removeAll() {
      console.log(this.props.options);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "button",
          { onClick: this.removeAll },
          "Remove all"
        ),
        this.props.options.map(function (option, key) {
          return React.createElement(Option, { key: key, optionText: option });
        })
      );
    }
  }]);

  return Options;
}(React.Component);

var Option = function (_React$Component5) {
  _inherits(Option, _React$Component5);

  function Option() {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
  }

  _createClass(Option, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.props.optionText
      );
    }
  }]);

  return Option;
}(React.Component);

var AddOptions = function (_React$Component6) {
  _inherits(AddOptions, _React$Component6);

  function AddOptions() {
    _classCallCheck(this, AddOptions);

    return _possibleConstructorReturn(this, (AddOptions.__proto__ || Object.getPrototypeOf(AddOptions)).apply(this, arguments));
  }

  _createClass(AddOptions, [{
    key: "formSubmit",
    value: function formSubmit(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();
      if (option) {
        console.log(option);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "form",
          { onSubmit: this.formSubmit },
          React.createElement("input", { type: "text", name: "option" }),
          React.createElement(
            "button",
            null,
            "Add option"
          )
        )
      );
    }
  }]);

  return AddOptions;
}(React.Component);

var appRoot = document.getElementById("app");
ReactDOM.render(React.createElement(IndecisionApp, null), appRoot);
