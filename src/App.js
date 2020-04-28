import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import TopMenu from './pages/TopMenu'
import About from "./pages/About";
import Routes from "./routes";
import Footer from "./pages/Footer";
function App() {
  return (
    <div className="App">
      <Routes/>
      <Footer/>
    </div>
  );
}

export default App;
