const CURRENCY_KEY = 'currency';

export function getCurrencyInfoFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem(CURRENCY_KEY);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
}

export function setCurrencyInfoToLocalStorage(value) {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(CURRENCY_KEY, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
}
