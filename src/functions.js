// src/transactions.js
function executeCreditLeg(amount, account) {
    console.log(`Crediting ${amount} to account ${account}`);
}

function executeDebitLeg(amount, account) {
    console.log(`Debiting ${amount} from account ${account}`);
}

async function httpRequest(url, options) {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}

module.exports = {
    executeCreditLeg,
    executeDebitLeg,
    httpRequest
};