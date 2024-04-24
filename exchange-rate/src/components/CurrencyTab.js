import React from 'react';

const CurrencyTab = ({ currency, exchangeRates }) => {
  // exchangeRates 객체가 비어있는지 확인
  if (!exchangeRates || Object.keys(exchangeRates).length === 0) {
    return <div>Loading...</div>; // 로딩 중인 메시지를 표시하거나 다른 처리를 수행할 수 있음
  }

  // currency에 해당하는 환율이 있는지 확인
  if (!(currency in exchangeRates)) {
    return <div>No exchange rate available for {currency}</div>; // 해당 통화에 대한 환율이 없는 경우 메시지를 표시하거나 다른 처리를 수행할 수 있음
  }

  // 환율과 기준 통화를 가져오는 부분
  const rate = exchangeRates[currency];
  const baseCurrency = Object.keys(exchangeRates)[0]; 

  return (
    <div>
      <h2>{currency}</h2>
      <p>Exchange rate: {rate}</p>
      <p>Base currency: {baseCurrency}</p>
      {/* 통화에 대한 추가 정보 */}
    </div>
  );
};

export default CurrencyTab;
