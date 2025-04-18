import {Link} from "react-router-dom"
     


function Home() {

    return (
      <>
        <div className="div-main-home">
          <h1>Memory Verses</h1>
            <div className="div-home">
              <h2>Verses of Assurance</h2>
              <p className="links">
                <Link to="/login">Login</Link> {" | "}

                <Link to="/register">Register</Link>
              </p>
            </div>
        </div>
      </>
    );
  }
  
  export default Home;
 