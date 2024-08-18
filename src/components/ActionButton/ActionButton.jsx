import { BiReset } from "react-icons/bi";
import { MdAddCard } from 'react-icons/md';
import s from './ActionButton.module.css';

export const UniversalButton = ({ action, type }) => {
  return (
    <button onClick={action} type="button" className={s.button}>
      {type === 'reset' ? (
        <BiReset className={s.btnIcon} />  
      ) : (
        <MdAddCard className={s.btnIcon} />
      )}
    </button>
  );
};
