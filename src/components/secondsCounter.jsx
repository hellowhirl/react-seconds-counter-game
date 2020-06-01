import React, { Component } from "react";

// let testTime = new Date().toLocaleString();

class SecondsCounter extends Component {
  //   formatTime = () => {
  //     const time = [...this.state.time].join(":");
  //     console.log(time);
  //     this.setState({ time });
  //   };

  render() {
    return (
      <React.Fragment>
        <div className="row justify-content-md-center">
          <button
            className="btn btn-primary mt-3 mb-3"
            onClick={this.clockStart}
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
