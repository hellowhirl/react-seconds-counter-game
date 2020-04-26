import React, { Component } from "react";

// let testTime = new Date().toLocaleString();

class SecondsCounter extends Component {
  //   formatTime = () => {
  //     const time = [...this.state.time].join(":");
  //     console.log(time);
  //     this.setState({ time });
  //   };

  clockTest = () => {
    // let time = [...this.state.time];
    // const timeA = Date.now();
    // let timeB = "";
    // setTimeout(() => {
    //   timeB = Date.now();
    //   time = timeB - timeA;
    //   this.setState({ time });
    //   console.log(time / 1000);
    // }, 1000);
    this.intervalID = setInterval(() => this.tick(), 1000);
  };

  constructor(props) {
    super(props);
    this.state = { time: 0 };
  }

  componentDidMount() {}

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick = () => {
    this.setState({
      time: Math.floor((this.state.time - (Date.now() % (1000 * 60))) / 1000),
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="row justify-content-md-center">
          <button
            className="btn btn-primary mt-3 mb-3"
            onClick={this.clockTest}
          >
            START TIMER
          </button>
        </div>
        {/* <div className="row justify-content-md-center">{this.state.time}</div> */}
        <div className="row justify-content-md-center">{this.state.time}</div>
        <div className="row justify-content-md-center">
          <button
            className="btn btn-primary mt-3 mb-3"
            onClick={() => clearInterval(this.intervalID)}
          >
            STOP
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default SecondsCounter;
