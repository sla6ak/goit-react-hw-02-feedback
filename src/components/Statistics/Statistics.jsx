import s from './Statistiks.module.css';
import propTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={s.list}>
      <li className={s.ok}>good: {good}</li>
      <li className={s.neutral}>neutral: {neutral}</li>
      <li className={s.bad}>bad: {bad}</li>
      <li className={s.li}>total: {total}</li>
      <li className={s.li}>positivePercentage: {positivePercentage} %</li>
    </ul>
  );
};
Statistics.propTypes = {
  good: propTypes.number,
  neutral: propTypes.number,
  bad: propTypes.number,
  total: propTypes.number,
  positivePercentage: propTypes.number,
};
export default Statistics;
