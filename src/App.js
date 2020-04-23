import React, { Component } from "react";
import MessageBox from "./components/messageBox";
import StartButton from "./components/startButton";

class App extends Component {
  state = {
    message: ["hello"],
    counter: 0,
  };

  handleCountdownText = () => {
    // const counterIntro = ["Ready?", "3", "2", "1", "START!"];
    let counter = this.state.counter;

    console.log(counter);
    console.log(this.state.counter);

    if (counter < 5) {
      setTimeout(() => {
        console.log("yes");
        counter++;
        this.setState({ counter });
        console.log(counter);
        console.log(this.state.counter);
        this.handleCountdownText();
      }, 1000);
    } else return;

    console.log(this.state);
  };

  componentDidMount() {
    // this.handleCountdownText();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Seconds counter game</h2>
          <MessageBox message={this.state.counter} />
          <StartButton onCountdownText={this.handleCountdownText} />
        </header>
      </div>
    );
  }
}

export default App;
