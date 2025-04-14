import {Link} from "react-router-dom"
     


function Home() {

    return (
      <>
        <h2>Daily Encouragement</h2>
        <h3>Bible Verses</h3>
        <p></p>
        <p>
          <Link to="/login">Login</Link>
        </p>
        <p>
          <Link to="/register">Register</Link>
        </p>
        <p>
          <Link to="/dashboard">Dashboard</Link>
        </p> 
      </>
    );
  }
  
  export default Home;
 