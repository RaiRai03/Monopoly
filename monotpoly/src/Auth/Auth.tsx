import { FormEvent, useEffect, useRef, useState } from "react";
import classes from "./Auth.module.css";

function Login() {
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const logIn = (e:FormEvent)=>{
    e.preventDefault()
    console.log(usernameRef.current!.value);
    console.log(passwordRef.current!.value);
  }
  return <form className={classes["auth-form"]} onSubmit={logIn}>
    <input type="text" name="username" ref={usernameRef} />
    <input type="password" name="password" ref={passwordRef} />
    <input type="submit" value="log in" />
  </form>
}
function Register() {
  const [username, setUsername]= useState("")
  const [password, setPassword]= useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [passwordsMatch, setPasswordsMatch] = useState(false);
  const registerUser = () => {
    console.log(username, password);
  };
  const checkPasswords = () => {
    setPasswordsMatch(password === confirmPassword);
  };
  useEffect(() => checkPasswords(), [password, confirmPassword]);
  return (
    <form className={classes["auth-form"]}>
      <input 
        name="username" 
        value={username} 
        onChange={(e)=>setUsername(e.target.value)}
      />
      <input 
        type="password"
        name="password" 
        value={password} 
        onChange={(e)=>setPassword(e.target.value)}
      />
      <input 
      type="password"
      name="confirmPassword" 
      value={confirmPassword} 
      onChange={(e)=>setConfirmPassword(e.target.value)}
    />
    <button type="button" onClick={registerUser}> disabled={!passwordsMatch}
      Register{" "}
    </button>
    </form>
  );
}

export default function Auth(){
  const [isLogin, setIsLogin] = useState(false);
  const toggleLogin = () => setIsLogin(!isLogin);
  return (
    <div className={classes["auth-form"]}>
      {isLogin? <Login/> : <Register/>}
      <button onClick={toggleLogin}>
        I need to {isLogin ? "register" : "login"}
      </button>
   </div>
  );
}