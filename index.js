const express = require("express");
const app = express();
const port = 5000;

const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
app.use(jsonParser);

const cors = require("cors");
const corsMiddleware = cors();
app.use(corsMiddleware);

const agentRouter = require("./agent/router");
app.use(agentRouter);

const rightOwnerRouter = require("./rightowner/router");
app.use(rightOwnerRouter);

app.listen(port, () => {
  console.log("Listening on port: " + port);
});
