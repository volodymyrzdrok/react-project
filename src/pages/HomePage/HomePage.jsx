import { Outlet } from 'react-router-dom';

import Balance from 'components/Balance/Balance';
import Currency from 'components/Currency/Currency';
import Header from 'components/Header/Header';
import Navigation from 'components/Navigation/Navigation';

import s from './_HomePage.module.scss';
import { useMediaQuery } from 'react-responsive';
import { Suspense, useEffect } from 'react';
import Loader from 'components/Loader/Loader';
import { useDispatch } from 'react-redux';
import { fetchAllTransactions } from 'redux/finance/financeOperations';

const HomePage = () => {
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllTransactions());
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className={s.background}>
        <div className={s.backdrop}>
          <div className="container">
            <div className={s.contentWrapper}>
              <div>
                <div className={s.sidebarWrapper}>
                  <div className={s.infoWrapper}>
                    <div className={s.nav}>
                      <Navigation />
                    </div>

                    <Balance />
                  </div>
                  {isTablet && (
                    <div className={s.tableWrapper}>
                      <Currency />
                    </div>
                  )}
                </div>
              </div>

              <div>
                <Suspense fallback={<Loader />}>
                  <Outlet />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
