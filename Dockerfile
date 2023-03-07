FROM node:lts-alpine

ARG APP_DIR=/opt/telegram_bot/

RUN mkdir -p ${APP_DIR}
WORKDIR ${APP_DIR}

COPY . ${APP_DIR}

RUN npm install

EXPOSE 3000

CMD [ "node", "./src/index.js" ]
