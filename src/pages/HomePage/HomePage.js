import Header from 'components/Header/Header';
import ModalAddTransaction from 'components/ModalAddTransaction/ModalAddTransaction';
import { NavLink, Outlet } from 'react-router-dom';
import routes from 'utils/routes';
import './_HomePage.module.scss';
import s from './_HomePage.module.scss';
// import { StyledEngineProvider } from '@mui/material/styles';

const HomePage = () => {
  return (
    <>
      <h2 className={s.div}>page Home!</h2>
      <Header />
      <nav>
        <NavLink to={routes.statistics}>statistics</NavLink>
        <NavLink to={routes.dashboard}>dashboard</NavLink>
      </nav>
      <p>balance</p>

      <Outlet />
      {/* <StyledEngineProvider injectFirst> */}
      <ModalAddTransaction />
      {/* </StyledEngineProvider> */}
    </>
  );
};

export default HomePage;
