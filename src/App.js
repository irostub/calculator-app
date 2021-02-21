import React, { Component } from "react";
import CalcButton from "./components/CalcButton";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.state = {
      inputValue: "",
      result: "",
    };
  }
  handleClick = (input) => {
    console.log(input);
    const { inputValue } = this.state;
    const condition = input === "+" || input === "-" || input === "*" || input === "/";
    const isLastInputNotOpr =
      inputValue[inputValue.length - 1] !== "+" &&
      inputValue[inputValue.length - 1] !== "-" &&
      inputValue[inputValue.length - 1] !== "*" &&
      inputValue[inputValue.length - 1] !== "/";
    const isLastInputOpr =
      inputValue[inputValue.length - 1] === "+" ||
      inputValue[inputValue.length - 1] === "-" ||
      inputValue[inputValue.length - 1] === "*" ||
      inputValue[inputValue.length - 1] === "/";
    let value = input;

    if (condition) {
      value = input;
      if (isLastInputNotOpr) {
        this.setState({
          inputValue: inputValue.concat(value),
        });
      } else {
        this.setState({
          inputValue: inputValue.slice(0, inputValue.length - 1).concat(value),
        });
      }
    } else {
      if (isLastInputOpr) {
        if (value === "0") {
          return;
        }
        this.setState({
          inputValue: inputValue.concat(value),
        });
      } else {
        this.setState({
          inputValue: inputValue.concat(value),
        });
      }
    }
  };
  handleKeycode = (code, key) => {
    if (code === "Enter") {
      this.calculate();
    } else if (code === "Numpad0") {
      this.handleClick("0");
    } else if (code === "Numpad1") {
      this.handleClick("1");
    } else if (code === "Numpad2") {
      this.handleClick("2");
    } else if (code === "Numpad3") {
      this.handleClick("3");
    } else if (code === "Numpad4") {
      this.handleClick("4");
    } else if (code === "Numpad5") {
      this.handleClick("5");
    } else if (code === "Numpad6") {
      this.handleClick("6");
    } else if (code === "Numpad7") {
      this.handleClick("7");
    } else if (code === "Numpad8") {
      this.handleClick("8");
    } else if (code === "Numpad9") {
      this.handleClick("9");
    } else if (code === "Digit0") {
      this.handleClick("0");
    } else if (code === "Digit1") {
      this.handleClick("1");
    } else if (code === "Digit2") {
      this.handleClick("2");
    } else if (code === "Digit3") {
      this.handleClick("3");
    } else if (code === "Digit4") {
      this.handleClick("4");
    } else if (code === "Digit5") {
      this.handleClick("5");
    } else if (code === "Digit6") {
      this.handleClick("6");
    } else if (code === "Digit7") {
      this.handleClick("7");
    } else if (code === "Digit8") {
      this.handleClick("8");
    } else if (code === "Digit9") {
      this.handleClick("9");
    } else if (code === "NumpadAdd") {
      this.handleClick("+");
    } else if (code === "NumpadSubtract") {
      this.handleClick("-");
    } else if (code === "NumpadDivide") {
      this.handleClick("/");
    } else if (code === "NumpadMultiply") {
      this.handleClick("*");
    } else if (code === "Slash") {
      this.handleClick("/");
    } else if (code === "Equal" && key === "+") {
      this.handleClick("+");
    } else if (code === "Minus" && key === "-") {
      this.handleClick("-");
    } else if (code === "Digit8" && key === "*") {
      this.handleClick("*");
    } else if (code === "Escape") {
      this.reset();
    }
  };
  handleKeypress = (e) => {
    this.handleKeycode(e.code, e.key);
  };

  calculate = () => {
    const { inputValue, result } = this.state;
    const isLastInputOpr =
      inputValue[inputValue.length - 1] === "+" ||
      inputValue[inputValue.length - 1] === "-" ||
      inputValue[inputValue.length - 1] === "*" ||
      inputValue[inputValue.length - 1] === "/";
    let solve = 0;
    if (isLastInputOpr) {
      alert("완성되지 않은 수식입니다.");
    } else {
      solve = eval(inputValue);
    }
    this.setState({
      result: solve,
    });
    return result;
  };
  reset = () => {
    console.log("inhere");
    this.setState({
      inputValue: "",
      result: 0,
    });
  };
  componentDidUpdate() {
    this.ref.focus();
  }
  componentDidMount() {
    //onkeypress doesnt have escape event
    //document.onkeypress = this.handleKeypress;
    document.onkeyup = this.handleKeypress;
  }

  render() {
    const buttonNames = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "*", "/"];
    const { inputValue, result } = this.state;

    return (
      <div className="calc">
        <h2 className="input-value">{inputValue}</h2>
        <div className="numberpad">
          {buttonNames.map((name) => {
            return <CalcButton handleClick={this.handleClick} key={name} name={name}></CalcButton>;
          })}
        </div>
        <button
          onClick={this.calculate}
          ref={(ref) => {
            this.ref = ref;
          }}
        >
          =
        </button>
        <button onClick={this.reset}>C</button>
        <h2 className="result">{result}</h2>
      </div>
    );
  }
}

export default App;
