import Style from './Counter.module.css';
import React from 'react';
import CounterBt from './CounterBt/CounterBt';

class Counter extends React.Component {
  //   static defaultProps = {};
  //   static propTypes = {};
  state = {
    visability: false,
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positive: 0,
  };
  onVisability = () => {
    if (this.state.visability) {
      return;
    }
    this.setState(() => ({
      visability: true,
    }));
  };

  goodClick = () => {
    this.onVisability();
    this.countTotalFeedback();
    this.setState(prevState => ({ good: prevState.good + 1 }));
    this.countPositiveFeedbackPercentage();
  };
  neutralClick = () => {
    this.onVisability();
    this.countTotalFeedback();
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
    this.countPositiveFeedbackPercentage();
  };
  badClick = () => {
    this.onVisability();
    this.countTotalFeedback();
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
    this.countPositiveFeedbackPercentage();
  };
  countTotalFeedback = () => {
    this.setState(pState => ({
      total: pState.total + 1,
    }));
  };
  countPositiveFeedbackPercentage = () => {
    this.setState(prevSt => ({
      positive: Math.round(100 / (prevSt.total / prevSt.good)), //тут я не понял как встроить ретурн если хороших отзывов ноль?
    }));
  };

  render() {
    return (
      <div className={Style.counter}>
        <div className={Style.title}>Please leave feedback</div>
        <CounterBt
          goodClick={this.goodClick}
          neutralClick={this.neutralClick}
          badClick={this.badClick}
        />
        <div className={Style.title}>Statistics</div>
        {this.state.visability && (
          <ul>
            <li className={`${Style.liRespons} ${Style.liGood}`}>
              Good: {this.state.good}
            </li>
            <li className={`${Style.liRespons} ${Style.liNeutral}`}>
              Neutral: {this.state.neutral}
            </li>
            <li className={`${Style.liRespons} ${Style.liBad}`}>
              Bad: {this.state.bad}
            </li>
            <li className={Style.liRespons}>Total: {this.state.total}</li>
            <li className={Style.liRespons}>
              Positive: {this.state.positive} %
            </li>
          </ul>
        )}
        {!this.state.visability && <div>Here is counter</div>}
      </div>
    );
  }
}

export default Counter;
