FROM node:12

RUN mkdir -p /usr/src/web-app

WORKDIR /usr/src/web-app

COPY . /usr/src/web-app

RUN npm install

EXPOSE 3000

RUN npm run build

CMD npm start
