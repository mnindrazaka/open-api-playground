const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");
const path = require("path");
const yaml = require("yamljs");

const swaggerJsDocs = yaml.load(path.resolve(__dirname, "./api.yaml"));

app.get("/schema", (req, res) => {
  res.json(swaggerJsDocs);
});

app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerJsDocs));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
