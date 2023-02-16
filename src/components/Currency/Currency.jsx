import React, { useEffect, useState } from 'react';

import Loader from 'components/Loader/Loader';
import s from './Currency.module.scss';

import {
  getCurrencyInfoFromLocalStorage,
  setCurrencyInfoToLocalStorage,
} from 'services/localStorage';
import { getCurrencyInfo } from 'services/monobankApi';
import { currencyCodesConstants } from 'services/monobankApi/countryCurrencyCodes';

function filterCurrencies(currency) {
  const UAH = 980;
  const currencyCodes = Object.values(currencyCodesConstants);

  if (currency.currencyCodeB === UAH) {
    return currencyCodes.includes(currency.currencyCodeA);
  }
  return false;
}

function formatCurrencies(currencyData) {
  const currencyConstants = Object.entries(currencyCodesConstants);

  for (const currency of currencyConstants) {
    if (currency[1] === currencyData.currencyCodeA) {
      return {
        currency: currency[0],
        rateBuy: currencyData.rateBuy,
        rateSell: currencyData.rateSell,
      };
    }
  }
}

const Currency = () => {
  const [currency, setCurrency] = useState(
    getCurrencyInfoFromLocalStorage()?.currencies
  );
  const [isError, setErrorStatus] = useState(null);
  const [isLoading, setLoadingStatus] = useState(false);

  const getCurrency = async () => {
    setLoadingStatus(true);
    try {
      const data = await getCurrencyInfo();
      const filteredCurrencyData = data.filter(filterCurrencies);
      const formattedCurrencyData = filteredCurrencyData.map(formatCurrencies);

      setCurrency(formattedCurrencyData);
      setCurrencyInfoToLocalStorage({
        date: Date.now(),
        currencies: formattedCurrencyData,
      });
    } catch (error) {
      setErrorStatus(true);
    } finally {
      setLoadingStatus(false);
    }
  };

  useEffect(() => {
    const savedData = getCurrencyInfoFromLocalStorage();

    if (savedData) {
      if (Date.now() - savedData.date > 3600000) {
        getCurrency();
      }
    } else {
      getCurrency();
    }
  }, [currency]);

  return (
    <div className={s.tWrapper}>
      {isError ? (
        <p>something went wrong...</p>
      ) : isLoading ? (
        <Loader loadColor="#ffffff" />
      ) : (
        <table className={s.table}>
          <thead className={s.tHead}>
            <tr className={s.tRow}>
              <th>Currency</th>
              <th>Purchase</th>
              <th>Sale</th>
            </tr>
          </thead>
          <tbody className={s.tBody}>
            {currency &&
              currency.map(data => (
                <tr key={data.currency} className={s.tRow}>
                  <td>{data.currency}</td>
                  <td>{data.rateBuy.toFixed(2)}</td>
                  <td>{data.rateSell.toFixed(2)}</td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Currency;
