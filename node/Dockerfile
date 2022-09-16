FROM node:16.4

WORKDIR /usr/src/app

COPY . .

#RUN  rm -R ./node_modules

RUN  npm install

EXPOSE 3000

CMD ["node","server.js"]