import "dotenv/config";
import "@babel/polyfill/noConflict";

import mongoose from "mongoose";
import koa from "koa";

import server from "./server";
import helmetMiddleware from "./middlewares/helmet";
import verifyOrigin from "./middlewares/cors";

const app = new koa();

app.use(helmetMiddleware);

const startApolloServer = async () => {
  await server.start();
  const serverOptions = {
    app,
    cors: {
      origin: verifyOrigin,
      methods: ["OPTIONS", "GET", "POST", "PUT"],
      allowedHeaders: ["Content-Type", "Authorization"],
    },
    path: "/graphQL",
  };

  server.applyMiddleware(serverOptions);
  // Modified server startup
  await new Promise((resolve) =>
    app.listen({ port: process.env.PORT || 5003 }, resolve)
  );
  console.log(`🚀 Server ready at ${process.env.PORT + server.graphqlPath}`);
};

mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    startApolloServer();
    console.log(
      "Database Connected & Server is running on port " + process.env.PORT
    );
  })
  .catch((err) => console.log(err));
