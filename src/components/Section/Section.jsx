import { Children } from 'react/cjs/react.production.min';
import s from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <div className={s.section}>
      <p className={s.title}>{title}</p>
      {children}
    </div>
  );
};
export default Section;
