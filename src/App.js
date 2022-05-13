import React from "react";
import EventsMarvel from "./components/EventsMarvel";
import Characters from "./components/Characters";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Link, Route, Routes } from "react-router-dom"


function App() {
  return(
    <div>
      <Header></Header>

        <Link to='/Events'>
          <button> Events </button>
        </Link>
        <Link to='/Characters'>
          <button> Characters </button>
        </Link>

        <Routes>
          <Route path="/Events" element={<EventsMarvel />} />
          <Route path="/Characters" element={<Characters></Characters>}></Route>
        </Routes>
      <Footer></Footer>
    </div>
    
  )
}

export default App;
