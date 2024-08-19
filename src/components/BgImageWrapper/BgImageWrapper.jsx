import React, { useState, useEffect } from 'react';
import { Icon } from '../Icon/Icon';
import { randomNumber, randomPercentage } from '../../helpers/generateRandomNumber';
import s from './BgImageWrapper.module.css';

export const BgImageWrapper = () => {
  const [randomSum, setRandomSum] = useState(0);
  const [randomPercent, setRandomPercent] = useState(0);

  useEffect(() => {
    setRandomSum(randomNumber());
    setRandomPercent(randomPercentage());
  }, []);

  return (
    <div className={s.containerImg}>
      <div className={s.containerText}>
        <div className={s.containerSvg}>
          <Icon name="arrow-up" className={s.icon} size="18" />
        </div>
        <div className={s.containerBalance}>
          <p className={s.text}>Your balance</p>
          <p className={s.balance}>{`$${randomSum}`}</p>
        </div>
        <div className={s.containerPercent}>
          <p className={s.percent}>{`+${randomPercent.toFixed(2)}%`}</p>
        </div>
        <p className={s.dynamicText}></p>
      </div>
    </div>
  );
};
