"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*  ****** LESSON  24*******
Run this first - npm run server
Run this after -
babel src/lessons/24.js --out-file=public/scripts/app.js --presets=env,react --watch

Lifecycle Methods


1. componentDidMount() 
invoked immediately after a component is mounted

2. componentDidUpdate(prevProps, prevState)
invoked immediately after updating occurs. This method is not called for the initial render. at the same time we can also access the args stated in the param:

2a. eg if there is update in options state which cause this lifecycle to be called, then that prevState refers to options state. same goes for props 

3. componentWillUnmount()
This method is called when a component is being removed from the DOM:

further reading -

  https://reactjs.org/docs/react-component.html

4. using the above lifecycle method we will be loading and saving our option into local storage

4a. save option - using condition to avoid unnecesary save




*/
var Root = function (_React$Component) {
  _inherits(Root, _React$Component);

  function Root(props) {
    _classCallCheck(this, Root);

    var _this = _possibleConstructorReturn(this, (Root.__proto__ || Object.getPrototypeOf(Root)).call(this, props));

    _this.deleteAllOptions = _this.deleteAllOptions.bind(_this);
    _this.handlePick = _this.handlePick.bind(_this);
    _this.addOption = _this.addOption.bind(_this);
    _this.deleteOneOption = _this.deleteOneOption.bind(_this);
    _this.state = {
      options: props.options
    };
    return _this;
  }
  // 1.


  _createClass(Root, [{
    key: "componentDidMount",
    value: function componentDidMount() {

      console.log(1111);
      try {
        var json = localStorage.getItem("options");

        var options = JSON.parse(json);
        if (options) {
          this.setState(function () {
            return { options: options };
          });
        }
      } catch (error) {}
    }

    // 2. saving option

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      // 2a
      console.log(prevState);

      // 4a. check if user is saving, then we will save
      if (prevState.options.length !== this.state.options.length) {
        var json = JSON.stringify(this.state.options);
        localStorage.setItem("options", json);
      }
    }
    // 3.

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      /*
      run this on the browser console:
      ReactDOM.render(React.createElement('p'), document.getElementById('app'));
      */
      console.log(4);
    }
  }, {
    key: "deleteAllOptions",
    value: function deleteAllOptions() {
      this.setState(function () {
        return { options: [] };
      });
    }
  }, {
    key: "deleteOneOption",
    value: function deleteOneOption(option) {
      this.setState(function (prev) {
        return {
          options: prev.options.filter(function (item) {
            return option !== item;
          })
        };
      });
    }
  }, {
    key: "handlePick",
    value: function handlePick() {
      var random = Math.floor(Math.random() * this.state.options.length);
      var option = this.state.options[random];
      console.log(option);
    }
  }, {
    key: "addOption",
    value: function addOption(option) {
      if (!option) {
        return "Enter valid value";
      } else if (this.state.options.indexOf(option) > -1) {
        return "options exists";
      }
      this.setState(function (prevState) {
        return {
          options: prevState.options.concat(option)
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var title = "Indecision";
      var subtitle = "Put your life in the hands of computer";
      return React.createElement(
        "div",
        null,
        React.createElement(Header, { title: title, subtitle: subtitle }),
        React.createElement(Action, {
          hasOptions: this.state.options.length > 0,
          handlePick: this.handlePick
        }),
        React.createElement(Options, {
          options: this.state.options,
          deleteAllOptions: this.deleteAllOptions,
          deleteOneOption: this.deleteOneOption
        }),
        React.createElement(AddOption, { addOption: this.addOption })
      );
    }
  }]);

  return Root;
}(React.Component);

Root.defaultProps = {
  options: []
};
var Header = function Header(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      props.title
    ),
    props.subtitle && React.createElement(
      "h2",
      null,
      props.subtitle
    )
  );
};
Header.defaultProps = {
  title: "Default Title"
};
var Action = function Action(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { onClick: props.handlePick, disabled: !props.hasOptions },
      "What should i do?"
    )
  );
};
var Options = function Options(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { onClick: props.deleteAllOptions },
      "Remove all"
    ),
    props.options.map(function (option, key) {
      return React.createElement(Option, {
        key: key,
        optionText: option,
        deleteOneOption: props.deleteOneOption
      });
    })
  );
};

var Option = function Option(props) {
  return React.createElement(
    "div",
    null,
    props.optionText,
    React.createElement(
      "button",
      {
        onClick: function onClick(e) {
          props.deleteOneOption(props.optionText);
        }
      },
      "Remove"
    )
  );
};

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.addOption = _this2.addOption.bind(_this2);

    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: "addOption",
    value: function addOption(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();
      var error = this.props.addOption(option);
      this.setState(function () {
        return { error: error };
      });

      if (!error) {
        e.target.elements.option.value = "";
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.state.error && React.createElement(
          "p",
          null,
          this.state.error
        ),
        React.createElement(
          "form",
          { onSubmit: this.addOption },
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

  return AddOption;
}(React.Component);

var appRoot = document.getElementById("app");
ReactDOM.render(React.createElement(Root, null), appRoot);
