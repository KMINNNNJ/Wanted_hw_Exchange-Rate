import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateAmount, changeCurrency, updateExchangeRates } from './actions';
import CurrencyConverter from './components/CurrencyConverter';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const { amount, currency } = useSelector(state => state);

  useEffect(() => {
    fetch('https://api.exchangeratesapi.io/latest')
      .then(response => response.json())
      .then(data => {
        dispatch(updateExchangeRates(data.rates, data.base, data.date));
      })
      .catch(error => {
        console.error('Error fetching exchange rates:', error);
      });
  }, [dispatch]);

  const handleAmountChange = (e) => {
    const input = e.target.value.replace(/\D/g, ''); // 숫자만 허용
    dispatch(updateAmount(input));
  };

  const handleCurrencyChange = (e) => {
    dispatch(changeCurrency(e.target.value));
  };

  return (
    <div className="App">
      <CurrencyConverter
        amount={amount}
        currency={currency}
        onAmountChange={handleAmountChange}
        onCurrencyChange={handleCurrencyChange}
      />
    </div>
  );
}

export default App;
