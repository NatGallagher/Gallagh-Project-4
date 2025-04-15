import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

function Login() {

  let navigate = useNavigate();

  const txtusername = useRef("");
  const txtpassword = useRef("");
  const [msgText, setMsg] = useState("");

  const handleLogin = (e) => {

    e.preventDefault()

    console.log("handleLogin")
    console.log(`login recieved: username: ${txtusername.current.value} password: ${txtpassword.current.value}`);

    let msg = "";

    const _uid = txtusername.current.value;
    const _pwd = txtpassword.current.value;
  

    if (_uid == null || _uid.trim().length == 0) {
      msg = "invalid username";
      setMsg(msg)
    }

    if (_pwd == null || _pwd.trim().length == 0) {
      msg = "invalid password";
      setMsg(msg)
    }

  }

    return (
      <>
        <div>
          <h2>Memory Verses</h2>
          <h4>Login</h4>
          <form>
                  <label>Username: </label><input ref={txtusername} type="text" placeholder="* username" maxLength={25}></input><br/>
                  <label>Password: </label><input ref={txtpassword} type="password" placeholder="* password" maxLength={25}></input>
                  <p></p>
                  <p>{msgText}</p>
                  <p></p>
                  <button onClick={(e) => handleLogin(e)}>Login</button>
              </form>
        </div>
        <p></p>
        <Link to="/register">Register</Link> {" | "}
        <Link to="/">Home</Link>
      </>
    );
  }
  
  export default Login;