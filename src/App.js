import React, { Component } from "react";
import MessageBox from "./components/messageBox/messageBox";
import StartButton from "./components/startButton/startButton";
import "./App.css";

// component interface: inputs and events

class App extends Component {
  state = {
    counter: ["", "Ready?", "3", "2", "1", "Go!"],
    gameStarted: false,
    secondsCountingStarted: false,
    time: 0,
    startTime: 0,
    updatedTime: 0,
  };

  startButtonClicked = () => {
    this.setState({ gameStarted: true });

    this.handleCountdownText();
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
      time: (difference % (1000 * 60)) / 1000,
    });
  };

  clockStart = () => {
    this.setState({ startTime: new Date().getTime() });
    this.intervalID = setInterval(() => this.tick(), 10);
  };

  clockStop = () => {
    clearInterval(this.intervalID);
    this.setState({ secondsCountingStarted: false });
  };

  addClasses = () => {
    let base = "row justify-content-md-center gameCounter ";
    return (base += this.state.secondsCountingStarted ? "fade-out" : "");
  };

  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        <div className="container">
          <h2 className="row justify-content-md-center">
            Seconds counter game
          </h2>
          <h6 className="row justify-content-md-center">
            Can you count 10 seconds perfectly?
          </h6>
          <MessageBox message={this.state.counter[0]} />
          <StartButton
            onStartButtonClick={this.startButtonClicked}
            gameStarted={this.state.gameStarted}
          />

          <div className={this.addClasses()}>{this.state.time}</div>
          <div className="row justify-content-md-center">
            {this.state.gameStarted && (
              <button
                className="btn btn-primary mt-3 mb-3"
                onClick={() => this.clockStop()}
                disabled={this.state.secondsCountingStarted ? "" : "disabled"}
              >
                STOP
              </button>
            )}
          </div>
          {!this.state.secondsCountingStarted &&
            this.state.time >= 9.5 &&
            this.state.time <= 10.5 && <h3>Excellent!</h3>}
          {this.state.counter.length === 1 &&
            this.state.gameStarted &&
            !this.state.secondsCountingStarted &&
            this.state.time < 9.5 && <h3>Too Quick!!</h3>}
          {!this.state.secondsCountingStarted && this.state.time > 10.5 && (
            <h3>T o o _ S l o w . . .</h3>
          )}
        </div>
      </div>
    );
  }
}

export default App;
