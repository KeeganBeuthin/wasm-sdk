// src/transactions.js
export function executeCreditLeg(amount, account) {
    console.log(`Crediting ${amount} to account ${account}`);
  }
  
  export function executeDebitLeg(amount, account) {
    console.log(`Debiting ${amount} from account ${account}`);
  }
  
  export async function httpRequest(url, options) {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  }
  

  module.exports= executeCreditLeg
  module.exports= executeDebitLeg
  module.exports= httpRequest