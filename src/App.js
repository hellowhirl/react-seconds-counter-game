import React, { Component } from "react";
import MessageBox from "./components/messageBox";
import StartButton from "./components/startButton";
import "./App.css";
import ResultsDisplay from "./components/resultsDisplay";
import ResetButton from "./components/resetButton";
import readySound from "./assets/ready2count.m4a";

// component interface: inputs and events
const countdownText = ["", "Ready", "Ready", "3", "2", "1", "Go!"];
const audio = new Audio(readySound);

class App extends Component {
  state = {
    counter: countdownText,
    gameOn: false,
    gameOver: false,
    secondsCountingStarted: false,
    time: 0,
    startTime: 0,
    updatedTime: 0,
  };

  startButtonClicked = () => {
    this.setState({ gameOn: true });

    audio.play();
    this.handleCountdownText();
  };

  hanldePlaySound = () => {
    audio.play();
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
      time: ((difference % (1000 * 60)) / 1000).toFixed(2),
    });
  };

  clockStart = () => {
    this.setState({ startTime: new Date().getTime() });
    this.intervalID = setInterval(() => this.tick(), 10);
  };

  clockStop = () => {
    clearInterval(this.intervalID);
    this.setState({ secondsCountingStarted: false, gameOver: true });
  };

  addClasses = () => {
    let base = "row justify-content-center gameCounter ";
    return (base += this.state.secondsCountingStarted ? "fade-out" : "");
  };

  resetGame = () => {
    this.setState({
      counter: countdownText,
      gameOn: false,
      gameOver: false,
      secondsCountingStarted: false,
      time: 0,
      startTime: 0,
      updatedTime: 0,
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        <div className="container">
          <h2 className="row justify-content-center">Seconds counter game</h2>
          <h6 className="row instructions justify-content-center">
            Can you count 10 seconds perfectly?
          </h6>
          <MessageBox message={this.state.counter[0]} />
          <StartButton
            onStartButtonClick={this.startButtonClicked}
            gameOn={this.state.gameOn}
          />

          <div className={this.addClasses()}>{this.state.time}</div>
          <div className="row justify-content-center">
            {this.state.gameOn && (
              <button
                className="btn btn-primary mt-3 mb-3"
                onClick={() => this.clockStop()}
                disabled={this.state.secondsCountingStarted ? "" : "disabled"}
              >
                STOP
              </button>
            )}
          </div>
          <ResultsDisplay
            secondsCountingStarted={this.state.secondsCountingStarted}
            time={this.state.time}
            counter={this.state.counter}
            gameOn={this.state.gameOn}
          />
          <ResetButton
            resetGame={this.resetGame}
            gameOver={this.state.gameOver}
          />
        </div>
      </div>
    );
  }
}

export default App;
