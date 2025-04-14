import {Link} from "react-router-dom"

function Dashboard() {
    return (
      <>
        <div className="div-main">
            <div className="div-scroll-1">
            <h2>Verses of Encouragement</h2>
            </div>
            <table>
                <tr>
                <td>
                    <p>Catagory 1</p>
                    <p>Catagory 2</p>
                    <p>Catagory 3</p>
                    <p>Catagory 4</p>
                    <p>Catagory 5</p>
                </td>
                <td className="column-right">
                    <p>Verse</p>
                </td>
                </tr>
            </table>
        </div>
        <p></p>
        <Link to="/login">Logout</Link>
      </>
    );
  }
  
  export default Dashboard;