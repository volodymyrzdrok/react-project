import Balance from 'components/Balance/Balance';
import Currency from 'components/Currency/Currency';
import Header from 'components/Header/Header';
import { NavLink, Outlet } from 'react-router-dom';
import routes from 'utils/routes';
import './_HomePage.module.scss';
import s from './_HomePage.module.scss';

const HomePage = () => {
  return (
    <>
      <Header />
      <h2 className={s.div}>page Home!</h2>
      <nav>
        <NavLink to={routes.statistics}>statistics</NavLink>
        <NavLink to={routes.dashboard}>dashboard</NavLink>
      </nav>
      <p>balance</p>
      <Balance />
      <Currency />

      <Outlet />
    </>
  );
};

export default HomePage;
