import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rightNumber: 7,
      correct: false
    };
  }
  guessNumber(num) {
   

    this.setState({ correct: this.state.rightNumber === num });
  }
  render() {
    return (
      <div className="App">
        {this.state.correct && (
          <div className="right">
            <p>You got it!</p>
          </div>
        )}
        {!this.state.correct && (
          <div className="wrong">
            <p>Guess again</p>
          </div>
        )}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10,].map((num, i) => {
          return (
            <div
              key={i}
              onClick={() => this.guessNumber(num)}
              className="num-box"
            >
              <p>{num}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
