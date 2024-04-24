const initialState = {
    amount: '1,000',
    currency: 'USD',
    exchangeRates: {},
    baseCurrency: 'USD',
    date: ''
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_AMOUNT':
        return { ...state, amount: action.payload };
      case 'CHANGE_CURRENCY':
        return { ...state, currency: action.payload };
      case 'UPDATE_EXCHANGE_RATES':
        return { ...state, exchangeRates: action.payload.rates, baseCurrency: action.payload.base, date: action.payload.date };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  