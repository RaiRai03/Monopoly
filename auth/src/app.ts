import express, { Application, Request, Response} from "express";
import mongoose from "mongoose";
import User from "./models/User";

const app: Application = express();
const PORT = 6001;

app.use(express.urlencoded({ extended: false }), express.json());
app. get("/", ( req, res,) => {
  res.send("hello world with typescript to my lovely people, expect the build keeps breaking!");
});

app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await new User({ username, password });
    console.log(user);
    const afterSave = await user.save()
    console.log(afterSave);
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
     res.json({user: user!.username});
   } else{
     res.sendStatus(401)
   }
 }
   user!.validatePassword(password, handler)
});

async function main() {
   await mongoose.connect("mongodb://localhost:27017/course3auth");
   app.listen(PORT, () => console.log(`app is listening on ${PORT}`)); 
}
main();
