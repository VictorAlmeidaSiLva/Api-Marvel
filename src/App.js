import React from "react";
import './App.css'
import EventsMarvel from "./components/EventsMarvel";
import Characters from "./components/Characters";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Link, Route, Routes } from "react-router-dom"
import Comics from "./components/Comics";



function App() {
  return (
    <div>
      <Header></Header>
      <div className="row">
        <div className="col bEvents">
          <Link to='/Events'>
            <button> Events </button>
          </Link>
        </div>
        <div className="col bChar">
          <Link to='/Characters'>
            <button> Characters </button>
          </Link>
        </div>
        <div className="col bComic">
          <Link to='/Comics'>
            <button>Comics</button>
          </Link>
        </div>
      </div>
      <Routes>
        <Route path="/Events" element={<EventsMarvel />} />
        <Route path="/Characters" element={<Characters></Characters>}></Route>
        <Route path="/Comics" element={<Comics></Comics>}></Route>
      </Routes>
      <Footer></Footer>
    </div>

  )
}

export default App;
