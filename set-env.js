const fs = require('fs');
const path = require('path');

// Acesse a variável de ambiente corretamente
const apiKey = process.env.API_KEY;

if (!apiKey) {
    console.error('A variável de ambiente API_KEY não está definida.');
    process.exit(1);
}

// Caminho para o arquivo environment.prod.ts
const envFilePath = path.join(__dirname, 'src', 'environments', 'environment.prod.ts');

// Lê o arquivo e substitui a chave da API
const envFileContent = `
export const environment = {
    production: true,
    apiKey: '${apiKey}'
};
`;

// Escreve o novo conteúdo no arquivo
fs.writeFileSync(envFilePath, envFileContent.trim());

console.log('Arquivo environment.prod.ts atualizado com a chave da API.');
