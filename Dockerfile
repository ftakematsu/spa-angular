# Use a imagem Node.js 18 como base
FROM node:18

# Instale o Angular CLI globalmente no container
RUN npm install -g @angular/cli@16

# Não necessita, pois imagens node normalmente já vem com Yarn
# RUN npm install -g yarn

# Crie o diretório de trabalho no contêiner
WORKDIR /app

# Copie os arquivos do projeto para o contêiner
COPY . .

# Instale as dependências do projeto
RUN yarn install

# Exponha as portas
EXPOSE 4200

# Execute o aplicativo Angular
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]
