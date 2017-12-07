FROM node:8.9-alpine

WORKDIR /opt/node/pull-request-scanner

RUN yarn install
