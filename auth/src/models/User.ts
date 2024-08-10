import { Schema, model } from "mongoose";
import crypto from "crypto";

interface IUser {
    username: string;
    password: string;
    validatePassword :(
      password:string, 
      handler: (isValid:boolean) => void
    ) => void;
}

const userSchema = new Schema<IUser>({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

userSchema.pre("save", function(next) {
  let user = this;
  if(!user.isModified("password") || !user.isNew) return next();
  try {
    crypto.pdkbf2(
      user.password,
      user.username, 
      310000, 
      32, 
      "sha256", 
      function (err, hashedPassword) {
        if (err) return cd(false);
        const buffer = Buffer.from(user.password, "base64");
        if (
          buffer.length != hashedPassword.length ||
          !crypto.timingSafeEqual(buffer, hashedPassword)
        ) {
          cd(false);
        } else {
          cd(true);
        }
        user.password = hashedPassword.toString("base64");
        next();
      }
    );
  } catch(e) {
    console.error(e);
  }
});

userSchema.methods.validatePassword = async function(
    triedPassword:string,
    cd: (isValid:boolean)=>void
)   {
    let user = this;
    try {
      crypto.pdkbf2(
      triedPassword,
      user.username, 
      310000, 
      32, 
      "sha256", 
      function (err, hashedPassword) {
         if (err) return cd(false);
         const buffer = Buffer.from(user.password, "base64")
         if( buffer.length != hashedPassword.length || !crypto.timingSafeEqual(buffer,hashedPassword)){
            cb(false);
         }else{
            cd(true);
         }
        }
      );
    } catch(e) {
      console.error(e);
    }
};
const User = model("User", userSchema);
export default User;