const { importSchema } = require('graphql-import');

const typeDefs = importSchema('index.graphql');

module.exports = typeDefs;