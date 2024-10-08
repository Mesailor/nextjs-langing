FROM node:18-alpine

ADD package.json /tmp/package.json

RUN rm -rf .next

RUN cd /tmp && npm install

ADD ./ /src

RUN rm -rf /src/node_modules && cp -a /tmp/node_modules /src/

WORKDIR /src

ENV HOST=https://emotiontech.ae

RUN npm run build

CMD ["npm", "run", "start"]