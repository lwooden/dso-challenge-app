# FROM node:17-alpine3.12
FROM node:17-alpine3.19.1

RUN apk --no-cache update && \
    rm -rf /var/cache/apk/*

RUN mkdir -p /usr/src/api

WORKDIR /usr/src/api

COPY . .

RUN npm install

CMD ["npm", "start"]

