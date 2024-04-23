/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    const resultados = [];
    for (let i = 0; i < accounts.length; i++) {
    let soma = 0;
        for (let j = 0; j < accounts[i].length; j++) {
            soma += accounts[i][j];
        }
        resultados.push(soma);
    }
    return Math.max(...resultados);
};