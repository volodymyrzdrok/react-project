import React, { useCallback, useEffect } from 'react';
import s from './ModalLogout.module.scss';
import logoutImg from '../../assets/images/logoutImg.png';
import { useDispatch } from 'react-redux';
import { toggleModalLogout } from 'redux/global/globalSlice';
import { createPortal } from 'react-dom';
import { logoutUser } from 'redux/session/sessionOperations';

const modalRoot = document.getElementById('modal-root');

const ModalLogout = () => {
  const dispatch = useDispatch();

  const handleCloseBackdrop = e => {
    if (e.currentTarget === e.target) {
      return handleClose();
    }
  };
  const handleClose = useCallback(() => {
    dispatch(toggleModalLogout());
  }, [dispatch]);

  useEffect(() => {
    const closeModalByEscape = e => {
      if (e.code === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', closeModalByEscape);
    return () => {
      window.removeEventListener('keydown', closeModalByEscape);
    };
  }, [handleClose]);

  const jsx = (
    <div className={s.modal} onClick={handleCloseBackdrop}>
      <div className={s.modalContent}>
        <img
          className={s.logoutImg}
          src={logoutImg}
          alt="Businessman Thinking"
        />
        <p className={s.logoutText}>Are you sure, you want to Log Out?</p>
        <div className={s.btnContainer}>
          <button className={s.keepInBtn} onClick={handleClose}>
            Keep in
          </button>
          <button
            className={s.logoutBtn}
            onClick={() => {
              dispatch(logoutUser());
            }}
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );

  return createPortal(jsx, modalRoot);
};

export default ModalLogout;
