import React, { Component } from "react";
import MessageBox from "./components/messageBox/messageBox";
import StartButton from "./components/startButton/startButton";
import SecondsCounter from "./components/secondsCounter/secondsCounter";

class App extends Component {
  state = {
    counter: ["", "Ready?", "3", "2", "1", "Go!"],
    timerStarted: false,
  };

  handleCountdownText = () => {
    let counter = this.state.counter;

    if (counter.length > 1) {
      setTimeout(() => {
        counter.shift();
        this.setState({ counter });
        this.handleCountdownText();
      }, 1000);
    } else return;

    console.log(this.state);

    let timerStarted = { ...this.state.timerStarted };
    timerStarted = true;
    this.setState({ timerStarted });

    console.log(this.state);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="container">
            <h2 className="row justify-content-md-center">
              Seconds counter game
            </h2>
            <MessageBox message={this.state.counter[0]} />
            <StartButton onCountdownText={this.handleCountdownText} />
            {this.state.timerStarted && <SecondsCounter />}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
