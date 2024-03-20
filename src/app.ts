// ----------------------------------------------------------------------------------

import { ApolloServer } from "apollo-server-express";
import express from "express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import http from "http";
// import Schema from "./Schema";
// import Resolvers from "./Resolvers";
import { resolvers, typeDefs } from "./schema/index";

const app = express();
const httpServer = http.createServer(app);
const port = 3000;

const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

server.start().then(() => {
    server.applyMiddleware({ app });
}); //start the GraphQL server.

httpServer.listen({ port }, () => {
    console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`);
});

// --------------------------------------------------------------------------------------------------------

// import express from "express";
// const app = express();
// const port = 3000;

// app.get("/", (req, res) => {
//     res.send("Hello World!");
// });

// app.listen(port, () => {
//     return console.log(`Express is listening at http://localhost:${port}`);
// });
