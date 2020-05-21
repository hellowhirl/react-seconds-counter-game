import React, { Component } from "react";
import MessageBox from "./components/messageBox/messageBox";
import StartButton from "./components/startButton/startButton";

// component interface: inputs and events

class App extends Component {
  state = {
    counter: ["", "Ready?", "3", "2", "1", "Go!"],
    secondsCountingStarted: false,
    time: 0,
    startTime: 0,
    updatedTime: 0,
  };

  handleCountdownText = () => {
    const counter = [...this.state.counter];

    if (counter.length > 1) {
      setTimeout(() => {
        counter.shift();
        this.setState({ counter });
        this.handleCountdownText();
      }, 1000);
    } else {
      this.clockStart();
      this.setState({ secondsCountingStarted: true });
    }
  };

  tick = () => {
    let updatedTime = new Date().getTime();
    let difference = updatedTime - this.state.startTime;

    this.setState({
      time: Math.floor((difference % (1000 * 60)) / 1000),
    });
  };

  clockStart = () => {
    this.setState({ startTime: new Date().getTime() });
    this.intervalID = setInterval(() => this.tick(), 1000);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        <div className="container">
          <h2 className="row justify-content-md-center">
            Seconds counter game
          </h2>
          <MessageBox message={this.state.counter[0]} />
          <StartButton onCountdownText={this.handleCountdownText} />

          <div className="row justify-content-md-center">{this.state.time}</div>
          <div className="row justify-content-md-center">
            {this.state.secondsCountingStarted && (
              <button
                className="btn btn-primary mt-3 mb-3"
                onClick={() => clearInterval(this.intervalID)}
              >
                STOP
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
