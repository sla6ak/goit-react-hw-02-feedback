import s from './App.module.css';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import React from 'react';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';

class App extends React.Component {
  // заменяет объявление конструктора включая super()
  // должно содержать минимум свойств чтоб не нагружать рендер
  // все что можно расщитать нужно вынести из состояния в методы!
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClickFitbak = tipeClick => {
    this.setState(preState => ({ [tipeClick]: preState[tipeClick] + 1 }));
  };

  onTotalCounter = () =>
    Object.values(this.state).reduce((accum, elem) => (accum += elem), 0);

  positivePercentage = () => {
    const ok = this.state.good;
    let percentage = 0;
    ok > 0
      ? (percentage = 100 / (this.onTotalCounter() / ok))
      : (percentage = 0);
    return percentage;
  };

  render() {
    // для повышения читаемости делаем константы а не передаем в пропсы напрямую.
    const total = this.onTotalCounter();
    const positivePercentage = Math.round(this.positivePercentage());
    const { good, neutral, bad } = this.state;
    return (
      <div className={s.body}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onClickFitbak}
          />
        </Section>

        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification />
          )}
        </Section>
      </div>
    );
  }
}
export default App;
