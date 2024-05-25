import React from "react";
import "./App.css";
import Header from "./components/Header";
import AppBody from "./components/AppBody";
import styled from "styled-components";
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
          <Header />
          <AppBody>
            <SideBar />
            <Routes>
              <Route path='/' />
              {/* Chat Component */}
            </Routes>
          </AppBody>
        </>
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div``;
