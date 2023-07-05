const express = require("express");
const app = express();
const routes = require("./routes");

app.use(express.json());
app.use("/", routes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});