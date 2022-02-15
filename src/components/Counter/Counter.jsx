import Style from './Counter.module.css';
import React from 'react';

class Counter extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodClick = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };
  neutralClick = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };
  badClick = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  render() {
    return (
      <div className={Style.counter}>
        <div className={Style.title}>Please leave feedback</div>
        <ul className={Style.boxButton}>
          <li className={Style.liButton}>
            <button
              className={Style.button}
              type="button"
              onClick={this.goodClick}
            >
              Good
            </button>
          </li>
          <li className={Style.liButton}>
            <button
              className={Style.button}
              type="button"
              onClick={this.neutralClick}
            >
              Neutral
            </button>
          </li>
          <li className={Style.liButton}>
            <button
              className={Style.button}
              type="button"
              onClick={this.badClick}
            >
              Bad
            </button>
          </li>
        </ul>
        <div className={Style.title}>Statistics</div>
        <ul>
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
        </ul>
      </div>
    );
  }
}

export default Counter;
