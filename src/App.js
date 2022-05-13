import React from "react";
import EventsMarvel from "./components/EventsMarvel";
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

        <Routes>
          <Route path="/Events" element={<EventsMarvel />} />
        </Routes>
      <Footer></Footer>
    </div>
    
  )
}

export default App;
