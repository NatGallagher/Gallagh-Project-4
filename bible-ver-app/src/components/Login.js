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
    let replitUrl = "https://biblev-api-app-gallaghernat8.replit.app"

    const _uid = txtusername.current.value;
    const _pwd = txtpassword.current.value;

    const _url = `${replitUrl}/login/${_uid}/${_pwd}`

    if (_uid == null || _uid.trim().length == 0) {
      msg = "invalid username";
      setMsg(msg)
      return false;
    }

    if (_pwd == null || _pwd.trim().length == 0) {
      msg = "invalid password";
      setMsg(msg)
      return false;
    }

    fetch(_url)
    .then((res) => res.json())
    .then((data) => {

      if(data.login === true) {
        navigate("/dashboard",{replace: true});
      }

      setMsg(data.msg)
    })
    .catch((error) => {
      setMsg("request error");
    });

    txtusername.current.value = "";
    txtpassword.current.value = "";

  }

    return (
      <>
        <div className="div-main-login">
          <h1>Memory Verses</h1>
            <div className="div-login">
              <h3>Login</h3>
              <form>
                  <label></label><input ref={txtusername} type="text" placeholder="Username" maxLength={25}></input><br/>
                  <label></label><input ref={txtpassword} type="password" placeholder="Password" maxLength={25}></input>
                  <p>{msgText}</p>
                  <button onClick={(e) => handleLogin(e)}>Login</button> 
                  <p></p>
                  Not a member?<Link to="/register">Register</Link>
                  <p></p>
                </form>
            </div>
        </div>       
      </>
    );
  }
  
  export default Login;