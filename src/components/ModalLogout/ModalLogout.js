import React from 'react';
import s from './ModalLogout.module.scss';
import logoutImg from '../../assets/images/logoutImg.png';

const ModalLogout = () => {
  return (
    <div>
      <img src={logoutImg} alt="Businessman Thinking" />
      <p>Are you sure, you want to Log Out?</p>
      <div className={s.btnContainer}>
        <button>Keep in</button>
        <button>Log out</button>
      </div>
    </div>
  );
};

export default ModalLogout;
