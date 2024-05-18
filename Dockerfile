FROM node:17
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "start"]
# execute o comando docker build -t myapp . para criar a imagem