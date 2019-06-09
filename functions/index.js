const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const { ApolloServer } = require("apollo-server-express");
const { importSchema } = require('graphql-import');

const typeDefs = importSchema('schemas/index.graphql');
const resolvers = require('./resolvers');

// console.log('#####################', typeDefs);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.graphql = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

function configureServer() {
  const app = express();
  app.use(cors());
  const server = new ApolloServer({
    typeDefs,
    resolvers
  });
  server.applyMiddleware({ app });
  return app;
}

const server = configureServer();

exports.api = functions.https.onRequest(server);
