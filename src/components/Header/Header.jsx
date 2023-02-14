import React from 'react';
import { useMediaQuery } from 'react-responsive';

import sprite from '../../assets/icons/symbol-defs.svg';
import logo from '../../assets/images/logo.png';
import s from './Header.module.scss';

const Header = () => {
  const isMobileOnly = useMediaQuery({ query: '(max-width: 767px)' });
  return (
    <header className={s.header}>
      <div className={s.logoWrapper}>
        <img className={s.logo} src={logo} alt="logo" />
        <p className={s.text}>Wallet</p>
      </div>
      <div className={s.headerMenu}>
        <p className={s.email}>Name</p>
        <div className={s.logoutBlock}>
          {!isMobileOnly && <p>Exit</p>}
          <svg className={s.logoutIcon} width="18" height="18">
            <use href={`${sprite}#icon-exit`} />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
