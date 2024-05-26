import React from "react";
import "./App.css";
import Header from "./components/Header";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";
import Login from "./components/Login";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  const [user, loading] = useAuthState(auth);

  return (
    <div className='app'>
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <AppBody>
              <Sidebar />
              <Routes>
                <Route path='/' element={<Chat />} />
              </Routes>
            </AppBody>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
