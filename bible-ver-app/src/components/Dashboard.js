import {Link} from "react-router-dom"
import { useRef } from "react"

function Dashboard() {

    function salvation() {
        let msgText = "salvation"
        console.log(msgText);
    }

    function answPrayer() {
        let msgText = "answPrayer"
        console.log(msgText);
    }

    function victory() {
        let msgText = "victory"
        console.log(msgText);
    }

    function forgivness() {
        let msgText = "forgiveness"
        console.log(msgText);
    }

    function guidance() {
        let msgText = "guidance"
        console.log(msgText);
    }
    
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
                        <button className="emotion" onClick={salvation}>Assurance of Salvation</button>
                        <button className="emotion" onClick={answPrayer}>Assurance of Answered Prayer</button>
                        <button className="emotion" onClick={victory}>Assurance of Victory</button>
                        <button className="emotion" onClick={forgivness}>Assurance of Forgiveness</button>
                        <button className="emotion" onClick={guidance}>Assurance of Guidance</button>
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