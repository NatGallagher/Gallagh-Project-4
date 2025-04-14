import {Link} from "react-router-dom"

function Dashboard() {
    return (
      <>
        <div className="div-main">
            <div className="div-scroll-1">
            <h2>Verses of Assurance</h2>
            </div>
            <div className="table-container">
                <table>
                    <tr>
                    <td>
                        <p className="emotion">Assurance of Salvation</p>
                        <p className="emotion">Assurance of Answered Prayer</p>
                        <p className="emotion">Assurance of Victory</p>
                        <p className="emotion">Assurance of Forgiveness</p>
                        <p className="emotion">Assurance of Guidance</p>
                    </td>
                    <td>
                        <div className="verse">
                            "No temptation has overtaken you except what is common to mankind. And God is faithful, He will not let you be tempted beyond what you can bear, but when you are tempted He will provide a way out so that you may endure it." -Corinthians 10:14
                        </div>
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