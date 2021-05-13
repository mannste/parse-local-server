const express = require('express');
const ParseServer = require('parse-server').ParseServer;
const app = express();

const {
  APP_ID,
  MASTER_KEY,
  DATABASE_URI,
  SERVER_URL,
  REDIS_URL,
  IS_PRODUCTION,
  PORT
} = process.env;

const api = new ParseServer({
  databaseURI: DATABASE_URI,
  appId: APP_ID,
  masterKey: MASTER_KEY,
  fileKey: 'optionalFileKey',
  serverURL: SERVER_URL,
  liveQuery: {
    classNames: ['test1', 'test2', 'test3'],
    redisURL: REDIS_URL
  },
  logLevel: 'VERBOSE',
  websocketTimeout: 10 * 1000,
  cacheTimeout: 60 * 600 * 1000,
});

let httpServer = require('http').createServer(app);
httpServer.listen(PORT);
var parseLiveQueryServer = ParseServer.createLiveQueryServer(httpServer, {
  redisURL: REDIS_URL
})

