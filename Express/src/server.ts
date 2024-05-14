import express from "express";
import "dotenv/config";
import "express-async-errors";
import morgan from "morgan";

const app = express();
const port = process.env.ENV || 3000;
console.log(port);
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (request, response) => {
  response.status(200).send({
    message: "Wabalabadubdub",
  });
});

//El listen es lo ÚLTIMO que se ejecuta
app.listen(port, () => {
  console.log("The server is ON :B");
});
