import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutUser } from 'redux/session/sessionOperations';
import { selectAuthStatus } from 'redux/session/sessionSlice';
import routes from 'utils/routes';

const LogOutExample = () => {
  const authStatus = useSelector(selectAuthStatus);
  const dispatch = useDispatch();
  const onLogOut = () => {
    dispatch(logoutUser());
  };
  return (
    <div>
      <NavLink to={routes.home}> home</NavLink>
      <br /> <br />
      <button onClick={onLogOut}>LOG OUT</button>
      <h4>authStatus : {`${authStatus} `}</h4>
    </div>
  );
};

export default LogOutExample;
