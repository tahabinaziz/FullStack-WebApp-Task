const express = require("express");
const app = express();
const http = require("http");
const bodyParser = require("body-parser");
const shirts = require("./modules/shirts/router");
const httpsServer = http.createServer(app);
const port = process.env.PORT || 5000;
const cors = require("cors");
const db = require("./models");

/*Middleware*/
app.use(cors());
app.use(bodyParser.json());

app.use("/shirts", shirts);

db.sequelize.sync().then((req) => {
  httpsServer.listen(port, () => {
    console.log(`Application is listening at http://localhost:${port}`);
  });
});


module.exports = app;
