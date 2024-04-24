import { createSlice } from '@reduxjs/toolkit';

// 기준일을 형식화하는 함수
function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

const exRateSlice = createSlice({
  name: "exrate",
  initialState: {
    currs: ["USD", "CAD", "KRW", "HKD", "JPY", "CNY"],
    quote_currs: ["CAD", "KRW", "HKD", "JPY", "CNY"],
    base_curr: "USD",
    quote_curr: "CAD",
    base_amount: 0,
    ex_rate: 0,
    date: "",
  },
  reducers: {
    replaceTab: (state, action) => {
      state.base_curr = action.payload;
      state.quote_currs = state.currs.filter(item => item !== state.base_curr);
      state.quote_curr = state.quote_currs[0];
    },
    updateQC: (state, action) => {
      state.quote_curr = action.payload;
    },
    updateBA: (state, action) => {
      state.base_amount = action.payload;
    },
    receiveER: (state, action) => {
      state.ex_rate = action.payload;
    },
    updateDT: (state, action) => {
      // 받은 날짜를 형식화하여 상태에 저장
      state.date = formatDate(action.payload);
    },
  },
})

export const { replaceTab, updateQC, updateBA, receiveER, updateDT } = exRateSlice.actions;
export default exRateSlice.reducer;