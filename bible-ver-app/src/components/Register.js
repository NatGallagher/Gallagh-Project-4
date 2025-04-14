import { Link } from "react-router-dom"

function Register() {
    return (
      <>
        <div>
          <h2>Daily Encouragement</h2>
          <h4>Register</h4>
          <form>
                  <label>Username: </label><input type="text" placeholder="* username" maxLength={25}></input><br/>
                  <label>Confirm Username: </label><input type="text" placeholder="* confirm username" maxLength={25}></input><br/>
                  <label>Password: </label><input type="password" placeholder="* password" maxLength={25}></input><br/>
                  <label>Confirm Password: </label><input type="password" placeholder="* confirm password" maxLength={25}></input>
                  <p></p>
                  <button>Submit</button>
              </form>
        </div>
        <p></p>
        <Link to="/">Login</Link>
      </>
    );
  }
  
  export default Register;