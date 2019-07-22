# API Server container
FROM node:latest

COPY . /app
WORKDIR /app

RUN npm install --production

EXPOSE 8000

CMD ["npm", "start"]