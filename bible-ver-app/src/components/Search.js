import { useRef, useState, useEffect } from "react";
import {Link} from "react-router-dom"

function Search() {

    const[verses, setVerses] = useState([]);
    //const[savedVerses, setSavedVerses] = useState([]); Do not need this as of right now

    const verseDisplay = useRef("");
    const savedVerseDisplay = useRef("");
    const bookInput = useRef("");
    const chapterInput = useRef("");
    const verseInput = useRef("");

    const verseButton = useRef("");

    const nextStepsDisplay = useRef("");

    useEffect(() => {
        async function fetchSavedVerses() {
          try {
            const response = await fetch('https://280f9539-b42b-4dc9-b331-82899c3782f0-00-21yat16xiedzc.picard.replit.dev/saved-verses');
            if (!response.ok) throw new Error('Failed to fetch');
            const data = await response.json();
            setVerses(data.msg);
           } catch (error) {
              console.error("Error loading saved verses", error);
            }
        }
        fetchSavedVerses();
      }, []);
    

    function searchVerse() {
        let msg = "searchVerse";
        console.log(msg);
        

        const book = bookInput.current.value;
        const chapter = chapterInput.current.value;
        const verse = verseInput.current.value;

        if (book == null || book.trim().length == 0) {
            verseDisplay.current.innerText = "Please enter a book"
            return false;
        }

        if (chapter == null || chapter.trim().length == 0) {
            verseDisplay.current.innerText = "Please enter a chapter"
            return false;
        }

        if (verse == null || verse.trim().length == 0) {
            verseDisplay.current.innerText = "Please enter a verse"
            return false;
        }
        
        const _url = `https://bible-api.com/${book}+${chapter}:${verse}`;

        fetch(_url)
        .then(response => {
            return response.json();
        })

        .then((data) => {
            console.log(data);
            verseDisplay.current.innerText = data.text;
        })

        

        .catch(error => {
            console.error('## There was a problem with the fetch operation:', error);
            divDisplayInfo.innerText = error;
          });
    }

    function addVerse() {
        const book = bookInput.current.value;
        const chapter = chapterInput.current.value;
        const verse = verseInput.current.value;

        const addedVerse = {
            id: verses.length + 1,
            book,
            chapter,
            verse
        }


        console.log(addedVerse);

        setVerses((prevval) => [...prevval, addedVerse]);

        let _url = "https://280f9539-b42b-4dc9-b331-82899c3782f0-00-21yat16xiedzc.picard.replit.dev/insert-verse"

        const _post_data = {book, chapter, verse};

    fetch(_url, {method: 'POST',
      headers:{'Content-type': 'application/json'},
      body:JSON.stringify(_post_data)}
    )
    .then((res) => res.json())
    .then((data) => {

      console.log(data.msg);

    })

    .catch((error) => {
      setVerses("request error");
      console.log("request error");
      console.log(error);
    })

        
    }

    function savedVerse(versesId) {
        const found = verses.find(v => v.id == versesId);

        const _url = `https://bible-api.com/${found.book}+${found.chapter}:${found.verse}`;

        fetch(_url)
        .then(response => {
            return response.json();
        })

        .then((data) => {
            console.log(data);
            savedVerseDisplay.current.innerText = data.text;
        })

        

        .catch(error => {
            console.error('## There was a problem with the fetch operation:', error);
            divDisplayInfo.innerText = error;
          });
        //savedVerseDisplay.current.innerText = `${found.book} ${found.chapter}:${found.verse}`
    }

    function clearAll() {
        verseDisplay.current.innerText = "";
        savedVerseDisplay.current.innerText = "";
        bookInput.current.value = "";
        chapterInput.current.value = "";
        verseInput.current.value = "";
        nextStepsDisplay.current.innerText = "";
    }

    function deleteVerse(verseId) {

        console.log("deleteVerse");

        if(!window.confirm("delete verse?")){
            return false;
          }

       const filteredVerses = verses.filter((verse) => verse.id !== verseId);
       setVerses(filteredVerses);
       
    }

    function nextSteps() {
        nextStepsDisplay.current.innerText = "storing verse in sqlite (attached to user) 2. Manually insert info and see if you can display it with useEffect. (has not been tested) 3. INSERT the info (ie: book, verse, chapter)"
    }


    return (
      <>
        
        <div className="div-search">
            <h2>Search The Bible</h2> 
            <div>         
                <span>Book: </span><input ref={bookInput} style={{width: '105px'}}></input> {" "}                         
                <span>Chapter: </span><input maxLength={3} ref={chapterInput} style={{width: '30px'}}></input> {" "}
                <span>Verse: </span><input maxLength={3} ref={verseInput} style={{width: '30px'}}></input><br/>
            </div>
          <p></p>
          <div>
            <button onClick={searchVerse}>Search</button> {" "}
            <button onClick={clearAll}>Clear</button>
          </div>
            <p ref={verseDisplay}></p>
            <p ref={savedVerseDisplay}></p>
            <button onClick={addVerse}>Add Verse</button>
            <p></p>
            {verses.map((verse) =>
            <div key={verse.id}>
                <button onClick={() => savedVerse(verse.id)}>{`${verse.book} ${verse.chapter}:${verse.verse}`}</button><button onClick={() => deleteVerse(verse.id)}>x</button>
            </div>    
            )}
            <p></p>
            <button onClick={nextSteps}>What's Next?</button>
            <p ref={nextStepsDisplay}></p>
            <p className="logout">
                <Link to="/login">Logout</Link>{" | "}<Link to="/dashboard">Dashboard</Link>
            </p>
        </div>
       
      </>
    );
  }
  
  export default Search;