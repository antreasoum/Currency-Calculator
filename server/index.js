const express = require("express");
const server = express();
const cors = require("cors");

server.use(
  cors({
    origin: "http://localhost:3000",
  })
);

server.get("/", (req, res) => {
  res.json({
    base: "EUR",
    rates: {
      USD: 1.1332561,
      CHF: 1.0526379,
      JPY: 129.76968,
      GBP: 0.8442392,
      CAD: 1.4221446,
    },
  });
});

server.listen(4000);
