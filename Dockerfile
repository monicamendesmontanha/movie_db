FROM mhart/alpine-node:11

COPY ./core/ ./app/core
COPY ./database/ /app/database
COPY ./web/ /app/web
COPY ./package.json ./app/package.json
COPY ./jest.config.js /app/jest.config.js

WORKDIR ./app
