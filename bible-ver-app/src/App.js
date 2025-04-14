import {HashRouter, Routes, Route} from "react-router-dom"
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <>
       <HashRouter>       
      <Routes>      
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>      
      </Routes>
    </HashRouter>
    </>
  );
}

export default App;
