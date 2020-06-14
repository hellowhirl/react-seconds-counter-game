import React, { Component } from "react";
import MessageBox from "./components/messageBox";
import StartButton from "./components/startButton";
import "./App.css";
import GameBoard from "./components/gameBoard";
import ResultsDisplay from "./components/resultsDisplay";
import readySound from "./assets/ready2count.m4a";

// component interface: inputs and events
const countdownText = ["", "Ready", "Ready", "3", "2", "1", "Go!"];
const instructionText = [];
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
    audio.play();
    this.setState({ gameOn: true });
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

  addTimerClasses = () => {
    let base = "row justify-content-center gameCounter ";
    if (!this.state.gameOn && !this.state.secondsCountingStarted) return base;
    if (this.state.gameOn && !this.state.secondsCountingStarted)
      return base + "unhidden";
    if (this.state.secondsCountingStarted && this.state.gameOn)
      return base + "fade-out";
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

  componentDidMount() {
    document.title = "Seconds Counter Game";
  }

  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        <div className="container">
          <h1 className="row justify-content-center">10 Seconds</h1>
          <h4 className="row instructions justify-content-center">the game</h4>
          <p className="row instructions justify-content-center">
            press
            <span style={{ display: "contents", fontWeight: "bold" }}>
              {" "}
              Start
            </span>
            , then press{" "}
            <span style={{ display: "contents", fontWeight: "bold" }}>
              {" "}
              Stop{" "}
            </span>{" "}
            after{" "}
            <span style={{ display: "contents", fontWeight: "bold" }}>
              {" "}
              10 seconds{" "}
            </span>
          </p>
          <MessageBox message={this.state.counter[0]} />
          <StartButton
            onStartButtonClick={this.startButtonClicked}
            gameOn={this.state.gameOn}
          />
          <GameBoard
            time={this.state.time}
            gameOn={this.state.gameOn}
            secondsCountingStarted={this.state.secondsCountingStarted}
            clockStop={this.clockStop}
            addTimerClasses={this.addTimerClasses}
          />
          <ResultsDisplay
            secondsCountingStarted={this.state.secondsCountingStarted}
            time={this.state.time}
            counter={this.state.counter}
            gameOn={this.state.gameOn}
            resetGame={this.resetGame}
            gameOver={this.state.gameOver}
          />
        </div>
      </div>
    );
  }
}

export default App;
