import s from './Section.module.css';
import propTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <div className={s.section}>
      <p className={s.title}>{title}</p>
      {children}
    </div>
  );
};
Section.propTypes = {
  title: propTypes.string,
};
export default Section;
