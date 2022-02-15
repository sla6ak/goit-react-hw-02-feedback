import Style from './Counter.module.css';
import React from 'react';

class Counter extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positive: 0,
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
  countTotalFeedback = () => {};
  countPositiveFeedbackPercentage = () => {};

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
          <li className={Style.liRespons}>Good: {this.state.good}</li>
          <li className={Style.liRespons}>Neutral: {this.state.neutral}</li>
          <li className={Style.liRespons}>Bad: {this.state.bad}</li>
          <li className={Style.liRespons}>Total: {this.state.total}</li>
          <li className={Style.liRespons}>Positive: {this.state.positive}</li>
        </ul>
      </div>
    );
  }
}

export default Counter;
