FROM node:10.16.0

WORKDIR /test/

ADD . /test/

RUN npm install -g express-generator
RUN npm install -g yarn
RUN yarn install

RUN yarn run build

CMD ["yarn","start"]
