import {HashRouter, Routes, Route} from "react-router-dom"
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Search from "./components/Search";
import "./App.css"

function App() {
  return (
    <>
       <HashRouter>       
      <Routes>      
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/search" element={<Search/>}/>      
      </Routes>
    </HashRouter>
    </>
  );
}

export default App;
