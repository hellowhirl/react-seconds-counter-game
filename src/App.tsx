import React, { Component } from "react";
import MessageBox from "./components/messageBox";
import StartButton from "./components/startButton";
import "./App.css";
import GameBoard from "./components/gameBoard";
import readySound from "./assets/ready2count_optimal.m4a";
import wow_incredible from "./assets/wow_incredible.m4a";
import failure_sound from "./assets/failure_sound.m4a";

// component interface: inputs and events
const countdownText = ["", "Ready", "Ready", "3", "2", "1", "Go!"];
const audioReady = new Audio(readySound);
const audioIncredible = new Audio(wow_incredible);
const audioFailure = new Audio(failure_sound);

class App extends Component {
  intervalID!: number;

  state = {
    counterMessage: countdownText,
    gameOn: false,
    gameOver: false,
    secondsCountingStarted: false,
    time: 0,
    startTime: 0,
    updatedTime: 0,
    instructionText: [
      "press START",
      "press STOP after 10 seconds",
      "game over",
    ],
  };

  startButtonClicked = () => {
    audioReady.play();
    this.setState({ gameOn: true });
    this.handleCountdownText();
  };

  handleCountdownText = () => {
    const counter = [...this.state.counterMessage];

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
    this.intervalID = window.setInterval(() => this.tick(), 10);
  };

  clockStop = () => {
    clearInterval(this.intervalID);
    this.setState({ secondsCountingStarted: false, gameOver: true });
    if (this.state.time > 9.5 && this.state.time < 10.5) audioIncredible.play();
    else audioFailure.play();
  };

  addTimerClasses = () => {
    let base = "row justify-content-center gameCounter ";
    if (!this.state.gameOn && !this.state.secondsCountingStarted) return base;
    if (this.state.gameOn && !this.state.secondsCountingStarted)
      return base + "unhidden";
    if (this.state.secondsCountingStarted && this.state.gameOn)
      return base + "fade-out";
  };

  addDifferenceClasses = () => {
    let base = "row justify-content-center difference ";
    if (this.state.gameOver && this.state.gameOn) return base + "unhidden";
    else return base;
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

  setInstructions = () => {
    if (!this.state.gameOn && !this.state.gameOver)
      return this.state.instructionText[0];
    if (this.state.gameOn && !this.state.gameOver)
      return this.state.instructionText[1];
    if (this.state.gameOver) return this.state.instructionText[2];
  };

  setInstructionsClasses = () => {
    let classes = "row justify-content-center ";
    return (classes += !this.state.gameOn ? "blinking" : "");
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
          <h4 className="row justify-content-center">the game</h4>
          <h6 className={this.setInstructionsClasses()}>
            {this.setInstructions()}
          </h6>
          <MessageBox
            message={this.state.counterMessage[0]}
            secondsCountingStarted={this.state.secondsCountingStarted}
            time={this.state.time}
            counter={this.state.counterMessage}
            gameOn={this.state.gameOn}
            gameOver={this.state.gameOver}
          />
          <GameBoard
            time={this.state.time}
            addTimerClasses={this.addTimerClasses}
            addDifferenceClasses={this.addDifferenceClasses}
            gameOver={this.state.gameOver}
          />
          <StartButton
            onStartButtonClick={this.startButtonClicked}
            gameOn={this.state.gameOn}
            resetGame={this.resetGame}
            gameOver={this.state.gameOver}
            secondsCountingStarted={this.state.secondsCountingStarted}
            clockStop={this.clockStop}
          />
        </div>
      </div>
    );
  }
}

export default App;
