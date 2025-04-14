import {Link} from "react-router-dom"

function Dashboard() {
    return (
      <>
        <div className="div-main">
            <div className="div-scroll-1">
            <h2>Verses of Encouragement</h2>
            </div>
            <div className="table-container">
                <table>
                    <tr>
                    <td>
                        <p className="emotion">Catagory 1</p>
                        <p className="emotion">Catagory 2</p>
                        <p className="emotion">Catagory 3</p>
                        <p className="emotion">Catagory 4</p>
                        <p className="emotion">Catagory 5</p>
                    </td>
                    <td>
                        <p className="column-right">Verse</p>
                    </td>
                    </tr>
                </table>
            </div>
        </div>
        <p></p>
        <Link to="/login">Logout</Link>
      </>
    );
  }
  
  export default Dashboard;