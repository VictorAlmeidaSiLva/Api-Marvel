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
    <div className="fundoHome">
      <Header></Header>
      <div className=" row container">
        <div className="col botaoComic">
          <Link to='/Events'>
            <button className="botao"> Events </button>
          </Link>
        </div>
        <div className="col botaoComic">
          <Link to='/Characters'>
            <button className="botao"> Characters </button>
          </Link>
        </div>
        <div className="col botaoComic">
          <Link to='/Comics'>
            <button className="botao">Comics</button>
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
