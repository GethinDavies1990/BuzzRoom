import React from "react";
import "./App.css";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <div className='app'>
      <Router>
        <>
          <Routes>
            <Route path='/' element={<Header />}></Route>
          </Routes>
        </>
      </Router>
    </div>
  );
}

export default App;
