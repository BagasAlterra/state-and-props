import React, { Component } from "react";

export default class App extends Component {
  state = {
    count: 0,
    text: ["Hello World", "Hello Guys"],
  };

  onCount() {
    this.setState({
      count: this.state.count + 1,
      text: "Hey guys",
    });
  }

  render() {
    return (
      <div>
        <p>Count on State</p>
        <p>
          Result :
          {this.state.count > 11 ? (
            <div>
              <p>
                {this.setState({
                  count: 0,
                })}
              </p>
            </div>
          ) : (
            <>{this.state.count >= 11 ? <p>Ini rusak</p> : this.state.count}</>
          )}
        </p>
        <button onClick={(item) => this.onCount(item)}>Count on Me!</button>
      </div>
    );
  }
}
