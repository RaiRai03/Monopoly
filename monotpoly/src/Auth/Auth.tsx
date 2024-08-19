import { FormEvent, useEffect, useRef, useState } from "react";
import classes from "./Auth.module.css";
import axios from "axios";
import { useAuth } from "./useAuth";

interface LoginResponse {
  jwt: string;
}
function Login() {
    const { setUser }= useAuth();
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const logIn = async (e: FormEvent) => {
    e.preventDefault()
    const username = usernameRef.current!.value;
    const password = passwordRef.current!.value;
    const response = await axios.post<LoginResponse>("/login", {
      username,
      password,
    });
    const user = response.data;
    if(user.jwt) {
      setUser({name: username, authToken: user.jwt})
    }
  };
  return ( 
   <form className={classes["auth-form"]} onSubmit={logIn}>
      <input type="text" name="username" ref={usernameRef} />
      <input type="password" name="password" ref={passwordRef} />
      <input type="submit" value="log in" />
    </form>
  );
}

interface RegistrationResponse {
  userCreated: string;
}
function Register() {
  const [username, setUsername]= useState("")
  const [password, setPassword]= useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [passwordsMatch, setPasswordsMatch] = useState(false);
  const registerUser = async () => {
    try {
        const response = await axios.post<RegistrationResponse>("/register", {
          username,
          password,
        });
        console.log(response);
        const createdUser=response.data.userCreated;
        if(createdUser) {
          console.log(`created user ${createdUser}`);
        }
    } catch (e) {
      console.error(e);
    }
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