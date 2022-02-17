import s from './FeedbackOptions.module.css';
import React from 'react';
import propTypes from 'prop-types';
import { string } from 'prop-types';

const FeedbackOptions = props => {
  return (
    <ul className={s.box}>
      {props.options.map(option => {
        return (
          <li key={option}>
            <button
              className={s.bt}
              type="button"
              onClick={() => props.onLeaveFeedback(option)}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
FeedbackOptions.propTypes = {
  options: propTypes.arrayOf(string),
};
export default FeedbackOptions;
