const instance = async (from, to) => {
  try {
    const response = await fetch(`https://api.exchangeratesapi.io/latest?base=${from}&symbols=${to}`);
    const result = await response.json();
    console.log("result", result);
    return result;
  } catch (error) {
    console.error('error', error);
    throw error; 
  }
}

export default instance;
