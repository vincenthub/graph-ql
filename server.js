//Importing dependencies
const express = require('express');
const express_graphql = require('express-graphql');
const {buildSchema} = require('graphql');
// GraphQl Schema
const schema = require('./schema');

//Create an express server and a GraphQl endpoint
var app = express();
app.use('/graphql', express_graphql({
    schema: schema,
    graphiql: true
}));

app.listen(4000, () => console.log('Express Graphql Server Now Running On localhost:4000/graphql'));