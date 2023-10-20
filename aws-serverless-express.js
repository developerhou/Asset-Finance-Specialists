const awsServerlessExpress = require('aws-serverless-express');
const { createServer } = require('http');
const { NestFactory } = require('@nestjs/core');
const { AppModule } = require('./dist/main');

const expressApp = require('express')();
let cachedServer;

async function bootstrapServer() {
  if (!cachedServer) {
    const app = await NestFactory.create(AppModule, expressApp);
    await app.init();
    cachedServer = awsServerlessExpress.createServer(createServer(expressApp));
  }
  return cachedServer;
}

module.exports.handler = async (event, context) => {
  const server = await bootstrapServer();
  return awsServerlessExpress.proxy(server, event, context, 'PROMISE').promise;
};
