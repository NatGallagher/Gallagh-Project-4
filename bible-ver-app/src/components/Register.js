import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

function Register() {

  let navigate = useNavigate();

  const txtusername = useRef("");
  const txtpassword = useRef("");
  const confusername = useRef("");
  const confpassword = useRef("");
  const checkterms = useRef("")
  const [msgText, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log("handle submit");

    let msg = ""
    let replitRul = "https://280f9539-b42b-4dc9-b331-82899c3782f0-00-21yat16xiedzc.picard.replit.dev"

    const _url = `${replitRul}/register`;

    const _uid = txtusername.current.value;
    const _pwd = txtpassword.current.value;
    const _confirmuid = confusername.current.value;
    const _confirmpwd = confpassword.current.value;
    const _checkbox = checkterms.current.checked;

    if (_uid == null || _uid.trim().length == 0) {
      msg = "Username is required";
      console.log(msg)
      setMsg(msg);
      return false;
    }

    if (_pwd == null || _pwd.trim().length == 0) {
      msg = "Password is required";
      console.log(msg)
      setMsg(msg);
      return false;
    }

    if (_uid !== _confirmuid) {
      msg = "confirmed username does not match"
      console.log(msg);
      setMsg(msg);
      return false;
      
    }

    if (_pwd !== _confirmpwd) {
      msg = "confirmed password does not match"
      console.log(msg);
      setMsg(msg);
      return false;
    }

    if (_checkbox == false) {
      msg = "Agree to Terms";
      console.log(msg);
      setMsg(msg);
      return false;
    }

   const _post_data = {username:_uid, password: _pwd};

    fetch(_url, {method: 'POST',
      headers:{'Content-type': 'application/json'},
      body:JSON.stringify(_post_data)}
    )
    .then((res) => res.json())
    .then((data) => {

      if(data.register === true) {
        navigate("/dashboard", {replace:true});
      }

      setMsg(data.msg);

    })

    .catch((error) => {
      setMsg("request error");
      console.log("request error");
      console.log(error);
    })

    txtusername.current.value = "";
    txtpassword.current.value = "";
    confusername.current.value = "";
    confpassword.current.value = "";
    checkterms.current.checked = false;

  }

    return (
      <>
        <div className="div-main-login">
          <h1>Memory Verses</h1>
            <div className="div-register">
              <h2>Register</h2>
                <form>
                  <label>Username: </label><input ref={txtusername} type="text" placeholder="* username" maxLength={25}></input><br/>
                  <label>Confirm Username: </label><input ref={confusername} type="text" placeholder="* confirm username" maxLength={25}></input><br/>
                  <label>Password: </label><input ref={txtpassword} type="password" placeholder="* password" maxLength={25}></input><br/>
                  <label>Confirm Password: </label><input ref={confpassword} type="password" placeholder="* confirm password" maxLength={25}></input>
                  <p></p>
                  I agree to terms and services<input type="checkbox" ref={checkterms}/>
                  <p>{msgText}</p>
                  <button onClick={(e) => handleSubmit(e)}>Submit</button>
                </form>
              <Link to="/">Home</Link>
            </div>
        </div>
      </>
    );
  }
  
  export default Register;