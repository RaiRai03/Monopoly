import express, { Application, Request, Response} from "express";
const app: Application = express();
const PORT = 6001
app. get("/", ( req, res,) => {
  res.send("hello world with typescript to my lovely people, expect the build keeps breaking!")
})

app.listen(PORT, ()=>console.log(`app is listening on ${PORT}`))
