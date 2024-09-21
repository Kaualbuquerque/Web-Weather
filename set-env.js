const fs = require('fs');
const path = require('path');

const envFilePath = path.join(__dirname, 'src/environments/environment.prod.ts');
const API_KEY = process.env.API_KEY; // Pega a variável de ambiente

if (!apiKey) {
  console.error('A variável de ambiente API_KEY não está definida.');
  process.exit(1);
}

// Lê o arquivo environment.prod.ts
let envFileContent = fs.readFileSync(envFilePath, 'utf8');

// Substitui a chave da API
envFileContent = envFileContent.replace(/API_KEY: ''/, `API_KEY: '${API_KEY}'`);

// Escreve o conteúdo de volta ao arquivo
fs.writeFileSync(envFilePath, envFileContent, 'utf8');
console.log('Arquivo environment.prod.ts atualizado com a chave de API.');
