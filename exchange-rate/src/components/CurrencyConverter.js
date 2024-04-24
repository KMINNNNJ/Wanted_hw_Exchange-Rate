import React from 'react';
import { useSelector } from 'react-redux';
import CurrencyTab from './CurrencyTab';

const CurrencyConverter = ({ amount, currency, onAmountChange, onCurrencyChange }) => {
  const { exchangeRates } = useSelector(state => state);

  return (
    <div>
      <input type="text" value={amount} onChange={onAmountChange} />
      <select value={currency} onChange={onCurrencyChange}>
        <option value="USD">USD</option>
        <option value="CAD">CAD</option>
        <option value="KRW">KRW</option>
        <option value="HKD">HKD</option>
        <option value="JPY">JPY</option>
        <option value="CNY">CNY</option>
      </select>
      <CurrencyTab currency={currency} exchangeRates={exchangeRates} />
    </div>
  );
};

export default CurrencyConverter;
