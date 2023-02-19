import ModalLogout from 'components/ModalLogout/ModalLogout';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import {
  selectIsModalLogoutOpen,
  toggleModalLogout,
} from 'redux/global/globalSlice';
import { selectUserName } from 'redux/session/sessionSlice';

import sprite from '../../assets/icons/symbol-defs.svg';
import logo from '../../assets/images/logo.png';
import s from './Header.module.scss';

const Header = () => {
  const isModalLogoutOpen = useSelector(selectIsModalLogoutOpen);

  const isMobileOnly = useMediaQuery({ query: '(max-width: 767px)' });
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(toggleModalLogout());
  };
  return (
    <header className="container">
      <div className={s.header}>
        <div className={s.logoWrapper}>
          <img className={s.logo} src={logo} alt="logo" />
          <p className={s.text}>Wallet</p>
        </div>
        <div className={s.headerMenu}>
          <p className={s.email}>{userName}</p>
          <div className={s.logoutBlock} onClick={onLogOut}>
            {!isMobileOnly && <p>Exit</p>}

            <svg className={s.logoutIcon} width="18" height="18">
              <use href={`${sprite}#icon-exit`} />
            </svg>
          </div>
        </div>
        {isModalLogoutOpen && <ModalLogout />}
      </div>
    </header>
  );
};

export default Header;
