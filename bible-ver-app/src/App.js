import {HashRouter, Routes, Route} from "react-router-dom"
import Login from "./components/Login";

function App() {
  return (
    <>
       <HashRouter>       
      <Routes>      
        <Route path="/" element={<Login/>}/>
      </Routes>
    </HashRouter>
    </>
  );
}

export default App;
