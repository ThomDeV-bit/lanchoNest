FROM node:latest

WORKDIR /home/node/app

COPY . .

RUN npm install --quiet --no-optional --no-found --loglevel=error

EXPOSE 3000
EXPOSE 3001
EXPOSE 3002
EXPOSE 3306

CMD ["npm","run","start:prod"]