import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';

import routes from 'utils/routes';
import sprite from '../../assets/icons/symbol-defs.svg';
import s from './Navigation.module.scss';

const Navigation = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <nav>
      <ul className={s.navBlock}>
        <li>
          <NavLink className={s.linkBlock} to={routes.statistics}>
            <svg className={s.navIcon} width="44" height="44">
              <use href={`${sprite}#icon-home`} />
            </svg>
            {!isMobile && <span className={s.navText}>Statistics</span>}
          </NavLink>
        </li>
        <li className={s.linkBlock}>
          <NavLink className={s.linkBlock} to={routes.dashboard}>
            <svg className={s.navIcon} width="44" height="44">
              <use href={`${sprite}#icon-statistics`} />
            </svg>
            {!isMobile && <span className={s.navText}>Dashboard</span>}
          </NavLink>
        </li>
        {isMobile && (
          <li className={s.linkBlock}>
            <NavLink className={s.linkBlock} to={routes.dashboard}>
              <svg className={s.navIcon} width="44" height="44">
                <use href={`${sprite}#icon-currency`} />
              </svg>
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
