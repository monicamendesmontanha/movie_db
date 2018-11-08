FROM mhart/alpine-node:11

COPY ./core/ ./app/core
COPY ./app.js ./app/app.js
COPY ./package.json ./app/package.json

WORKDIR ./app
