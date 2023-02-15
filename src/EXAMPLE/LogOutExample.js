import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'redux/session/sessionOperations';
import { selectAuthStatus } from 'redux/session/sessionSlice';

const LogOutExample = () => {
  const authStatus = useSelector(selectAuthStatus);
  const dispatch = useDispatch();
  const onLogOut = () => {
    dispatch(logoutUser());
  };
  return (
    <div>
      <button onClick={onLogOut}>LOG OUT</button>
      <h4>authStatus : {`${authStatus} `}</h4>
    </div>
  );
};

export default LogOutExample;
