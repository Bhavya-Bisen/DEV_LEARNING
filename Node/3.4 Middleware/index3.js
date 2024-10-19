import express from "express";
import { token } from "morgan";

const app = express();
const port = 3000;

function logger(req,res,next)  {
  console.log("Requested method:"+req.method+" Requested url:"+req.url);
  next();
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
