import express, { Application, Request, Response} from "express";
import mongoose from "mongoose";
import User from "./models/User";
import jwt from "jsonwebtoken";
import { expressjwt, Request as JWT_SECRET } from "express-jwt"

const app: Application = express();
const PORT = 6001;
const JWT_SECRET = "planetKrypton";
app.use(express.urlencoded({ extended: false }), express.json());
app. get("/", ( req, res,) => {
  res.send("hello world with typescript to my lovely people, expect the build keeps breaking!");
});

app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await new User({ username, password });
    await user.save();
    res.sendStatus(200);
  } catch (e) {
    res.sendStatus(500);
  }
});

app.post("/login", async(req,res)=>{
  const {username, password} = req.body
  const user = await User.findOne({username})
  if(!user) res.sendStatus(404)
  const handler = (isValidPassword: boolean) => {
    if(isValidPassword) {
     res.json({
        jwt: jwt.sign({ user: user!.username}, JWT_SECRET, { expiresIn: "6h" })}
     );
   } else{
     res.sendStatus(401)
   }
 }
   user!.validatePassword(password, handler)
});

app.get("/verify", expressjwt({secret: JWT_SECRET, algorithms: ["HS256"] }), (req: JWT_SECRET, res)=>{
    console.log(req.auth);
    if (req.auth?.user) res.sendStatus(200);
    else res.sendStatus(401);
});

async function main() {
   await mongoose.connect("mongodb://localhost:27017/course3auth");
   app.listen(PORT, () => console.log(`app is listening on ${PORT}`)); 
}
main();
