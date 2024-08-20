import { useRef, useState } from 'react';
import { UserSetsFormList } from './UserPreferencesList';
import { Icon } from '../../../Icon/Icon';
import { selectLabel, options } from '../../../../helpers/selectLabel';
import s from './UserPreferencesSelect.module.css';

export const UserSetsFormSelect = ({
  register,
  setValue,
  setCurrency,
  currency,
}) => {
  const box = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(prev => !prev);
  };

  const handleChose = (element) => {
    setCurrency(element.value);
    setValue('currency', element.value);
    setIsOpen(false); // Close the dropdown after selection
  };

  // Ensure choseLabel function is defined
  const choseLabel = (currency) => {
    // Example implementation, replace with your actual logic
    return selectLabel(currency) || 'Select currency';
  };

  return (
    <div
      ref={box}
      onClick={handleToggle}
      className={s.container}
      aria-expanded={isOpen}
      aria-haspopup="listbox"
    >
      <p className={s.text}>{choseLabel(currency)}</p>
      <div className={s.iconWrapper}>
        <Icon
          className={s.icon}
          name={`${isOpen ? 'chevron-up' : 'chevron-down'}`}
          size={16}
        />
      </div>
      {isOpen && (
        <UserSetsFormList
          options={options}
          handleChose={handleChose}
          boxRef={box}
          handleToggle={handleToggle}
          aria-labelledby="select-label"
        />
      )}
      <input 
        className={s.input} 
        {...register('currency')} 
        readOnly
        aria-hidden="true"
      />
    </div>
  );
};