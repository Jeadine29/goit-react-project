import { NavLink } from 'react-router-dom';
import { Icon } from '../../Icon/Icon';
import style from './Logo.module.css';

const Logo = ({ resetStateActiveButton }) => (
  <NavLink
    onClick={resetStateActiveButton}
    to={'/'}
    className={style.logoWrapper}
  >
    <div className={style.logoIconWrapper}>
      <Icon className={style.logo} />
    </div>
    <p className={style.logoText}>ExpenseTracker</p>
  </NavLink>
);

export default Logo;