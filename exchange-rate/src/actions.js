export const updateAmount = (amount) => ({
    type: 'UPDATE_AMOUNT',
    payload: amount
  });
  
  export const changeCurrency = (currency) => ({
    type: 'CHANGE_CURRENCY',
    payload: currency
  });
  
  export const updateExchangeRates = (rates, base, date) => ({
    type: 'UPDATE_EXCHANGE_RATES',
    payload: { rates, base, date }
  });
  