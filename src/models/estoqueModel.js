const fs = require('fs');
const path = require('path');

// Consumindo o Submódulo 1 - Caminho correto: 2 níveis
const regrasPath = path.join(__dirname, '../../contracts/regras_produtos.json');
const regras = JSON.parse(fs.readFileSync(regrasPath, 'utf8'));

let inventario = [
    { sku: "PROD-1", qtd: 15 },
    { sku: "PROD-2", qtd: 5 },
    { sku: "PROD-3", qtd: 2 }
];

module.exports = {
    obterEstoque: () => inventario,
    verificarAlerta: (qtdAtual) => qtdAtual <= regras.alerta_estoque_baixo
};