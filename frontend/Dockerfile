FROM node:23-alpine3.20

WORKDIR /src

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "run", "start"]

