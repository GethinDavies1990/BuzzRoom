import React from "react";
import "./App.css";
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
            <Route path='/' exact>
              <Header />
            </Route>
          </Routes>
        </>
      </Router>
    </div>
  );
}

export default App;
