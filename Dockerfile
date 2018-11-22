FROM mhart/alpine-node:11

COPY ./core/ ./app/core
COPY ./package.json ./app/package.json

WORKDIR ./app
