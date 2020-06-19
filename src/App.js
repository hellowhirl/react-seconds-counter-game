import React, { Component } from "react";
import MessageBox from "./components/messageBox";
import StartButton from "./components/startButton";
import "./App.css";
import GameBoard from "./components/gameBoard";
import ResultsDisplay from "./components/resultsDisplay";
import readySound from "./assets/ready2count.m4a";

// component interface: inputs and events
const countdownText = ["", "Ready", "Ready", "3", "2", "1", "Go!"];
const audio = new Audio(readySound);

var audioFiles = [
  "https://hellowhirl.github.io/react-seconds-counter-game/static/media/ready2count.05013ceb.m4a",
];

function preloadAudio(url) {
  var audio = new Audio();
  // once this file loads, it will call loadedAudio()
  // the file will be kept by the browser as cache
  audio.addEventListener("canplaythrough", loadedAudio, false);
  audio.src = url;
}

var loaded = 0;
function loadedAudio() {
  // this will be called every time an audio file is loaded
  // we keep track of the loaded files vs the requested files
  loaded++;
  if (loaded == audioFiles.length) {
    // all have loaded
    init();
  }
}

// var player = document.getElementById("player");
function play(index) {
  audio.src = audioFiles[index];
  audio.play();
  setTimeout(() => {
    audio.pause();
  }, 1500);
}

function init() {
  // do your stuff here, audio has been loaded
  // for example, play all files one after the other
  var i = 0;
  // once the audio ends, play the next one
  audio.onended = function () {
    i++;
    if (i >= audioFiles.length) {
      // end
      return;
    }
    play(i);
  };
  // play the first file
  play(i);
}

// we start preloading all the audio files
for (var i in audioFiles) {
  preloadAudio(audioFiles[i]);
}

class App extends Component {
  state = {
    counter: countdownText,
    gameOn: false,
    gameOver: false,
    secondsCountingStarted: false,
    time: 0,
    startTime: 0,
    updatedTime: 0,
    instructionText: ["press Start", "press Stop after 10 seconds"],
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

  setInstructions = () => {
    return !this.state.gameOn
      ? this.state.instructionText[0]
      : this.state.instructionText[1];
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
          <div className={this.setInstructionsClasses()}>
            {this.setInstructions()}
          </div>
          <MessageBox message={this.state.counter[0]} />
          <StartButton
            onStartButtonClick={this.startButtonClicked}
            gameOn={this.state.gameOn}
            resetGame={this.resetGame}
            gameOver={this.state.gameOver}
            secondsCountingStarted={this.state.secondsCountingStarted}
            clockStop={this.clockStop}
          />
          <GameBoard
            time={this.state.time}
            addTimerClasses={this.addTimerClasses}
          />
          <ResultsDisplay
            secondsCountingStarted={this.state.secondsCountingStarted}
            time={this.state.time}
            counter={this.state.counter}
            gameOn={this.state.gameOn}
          />
        </div>
      </div>
    );
  }
}

export default App;
