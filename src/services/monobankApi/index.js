import axios from 'axios';

export async function getCurrencyInfo() {
  const { data } = await axios.get('https://api.monobank.ua/bank/currency');
  return data;
}
