FROM node:18-alpine

WORKDIR /app

# Cria a estrutura de pastas
RUN mkdir -p contracts config src/models src/controllers src/routes

# Cria o arquivo de regras
RUN echo '{"unidades_medida":["UN","KG","CX"],"alerta_estoque_baixo":10}' > contracts/regras_produtos.json

# Cria o arquivo de config
RUN echo '{"sqs_url":"http://localhost:4566/000000000000/estoque-queue","features":{"usar_sqs":false}}' > config/ambiente-dev.json

# Copia package.json e instala dependências
COPY package*.json ./
RUN npm install

# Copia os arquivos da API
COPY src/ ./src/
COPY server.js .

# Verifica os arquivos (debug)
RUN echo "=== VERIFICANDO ARQUIVOS ===" && \
    echo "Contracts:" && ls -la /app/contracts/ && \
    echo "Config:" && ls -la /app/config/ && \
    echo "=== CONTEÚDO CONTRATO ===" && \
    cat /app/contracts/regras_produtos.json

EXPOSE 3000

CMD ["node", "server.js"]