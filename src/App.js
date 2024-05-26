import React from "react";
import "./App.css";
import Header from "./components/Header";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
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
            <Sidebar />
            <Routes>
              <Route path='/' element={<Chat />} />
            </Routes>
          </AppBody>
        </>
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
