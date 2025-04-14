import {Link} from "react-router-dom"
     


function Home() {

    return (
      <>
        <h2>Memory Verses</h2>
        <p>Verses of Assurance</p>
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
 