// __tests__/transactions.test.js
const { executeCreditLeg, executeDebitLeg, httpRequest } = require('../src/functions');

describe('SDK Function Tests', () => {
    test('executeCreditLeg should credit the correct amount', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        executeCreditLeg(100, '1234-5678-9012-3456');
        expect(consoleSpy).toHaveBeenCalledWith('Crediting 100 to account 1234-5678-9012-3456');
    });

    test('executeDebitLeg should debit the correct amount', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        executeDebitLeg(50, '1234-5678-9012-3456');
        expect(consoleSpy).toHaveBeenCalledWith('Debiting 50 from account 1234-5678-9012-3456');
    });

    // Example of an async test for httpRequest
    test('httpRequest should return data', async () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve({ data: 'some data' })
            })
        );

        const result = await httpRequest('https://api.example.com/data', { method: 'GET' });
        expect(result).toEqual({ data: 'some data' });
    });
});
