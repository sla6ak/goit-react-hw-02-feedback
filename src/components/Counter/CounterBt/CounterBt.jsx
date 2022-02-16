import Style from './CounterBt.module.css';

const CounterBt = ({ goodClick, neutralClick, badClick }) => {
  return (
    <ul className={Style.boxButton}>
      <li className={Style.liButton}>
        <button className={Style.button} type="button" onClick={goodClick}>
          Good
        </button>
      </li>
      <li className={Style.liButton}>
        <button className={Style.button} type="button" onClick={neutralClick}>
          Neutral
        </button>
      </li>
      <li className={Style.liButton}>
        <button className={Style.button} type="button" onClick={badClick}>
          Bad
        </button>
      </li>
    </ul>
  );
};

export default CounterBt;
