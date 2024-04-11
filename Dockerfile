FROM node:latest

WORKDIR /home/node/app

USER node

EXPOSE 3000
EXPOSE 3310
EXPOSE 3306

CMD [ "tail","-f","/dev/null" ]