import {Link} from "react-router-dom"
import { useRef } from "react"

function Dashboard() {

    const verseDisplay = useRef("");

    function salvation() {
        let msgText = "salvation"
        console.log(msgText);

        verseDisplay.current.innerHTML = `"This is the testimony: God has given us eternal life, and this life is in His Son. Whoever has the Son has Life; whoever does not have the Son of God does not have life" -1 John 5:11-12`
    }

    function answPrayer() {
        let msgText = "answPrayer"
        console.log(msgText);

        verseDisplay.current.innerHTML = `"Until now you have not asked for anything in my name. Ask and you will receive, and your joy may be complete." -John 16:24`
    }

    function victory() {
        let msgText = "victory"
        console.log(msgText);

        verseDisplay.current.innerHTML = `"No temptation has overtaken you except what is common to mankind. And God is faithful; He will not let you be tempted beyond what you can bear. But when you are tempted, He will also provide a way out so that you can endure it." -Corinthians 10:13`
    }

    function forgivness() {
        let msgText = "forgiveness"
        console.log(msgText);

        verseDisplay.current.innerHTML = `"If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness.” -1 John 1:9`
    }

    function guidance() {
        let msgText = "guidance"
        console.log(msgText);

        verseDisplay.current.innerHTML = `"Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to Him, and He will make your paths straight." -Proverbs 3:5-6`
    }

    function christTheCenter() {
        let msgText = "christTheCenter"
        console.log(msgText);

        verseDisplay.current.innerHTML = `"Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!" -2 Corinthians 5:17`
    }

    function obediance() {
        let msgText = "obediance"
        console.log(msgText);

        verseDisplay.current.innerHTML = `“Therefore, I urge you, brothers and sisters, in view of God’s mercy, to offer your bodies as a living sacrifice, holy and pleasing to God—this is your true and proper worship.” -Romans 12:1`
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
                        <button className="emotion" onClick={christTheCenter}>Christ the Center</button>
                        <button className="emotion" onClick={obediance}>Obediance to Christ</button>
                    </td>
                    <td>
                        <div className="verse" ref={verseDisplay}>
                           Memory verses!<br/>
                           Click on the Assurance we have through God's Word. <br/>
                           Study and test your memory. 
                        </div>
                    </td>
                    </tr>
                </table>
            </div>
            <p className="logout">
                <Link to="/login">Logout</Link>{" | "}<Link to="/search">Search</Link>
            </p>
        </div>
        
      </>
    );
  }
  
  export default Dashboard;