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

  onTotalCounter = () => {
    // Исправление№2. Согласен можно и без редьюса, но выглядит такое решение менее изящно. Нас учили что редьюс это счетчик в JS.
    // Object.values( this.state ).reduce( ( accum, elem ) => ( accum += elem ), 0 );
    const sum = this.state.good + this.state.neutral + this.state.bad;
    return sum;
  };

  positivePercentage = () => {
    const ok = this.state.good;
    let percentage = 0;
    ok > 0
      ? (percentage = 100 / (this.onTotalCounter() / ok))
      : (percentage = 0);
    return percentage;
  };

  // Исправление №1. я не совсем понял почему вы рисовали стрелку внутри рендара? константы там ни на что не влияют и лишь повышают читаемость кода. если создавать массив там то константа всеравно будет переписываться при каждом рендере. я так понял вы имелли ввиду создать массив вне рендера. я подумал что внутри функции переменная опять таки будет создавать новый массив при каждом вызове функции поэтому написал в лоб. не уверен что это вообще правильно для такого короткого массива. выглядит странно.
  keysState = Object.keys(this.state);

  render() {
    // для повышения читаемости делаем константы а не передаем в пропсы напрямую.
    const total = this.onTotalCounter();
    const positivePercentage = Math.round(this.positivePercentage());
    const { good, neutral, bad } = this.state;
    return (
      <div className={s.body}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.keysState}
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
