import React from "react";
import "./App.css";
import Header from "./components/Header";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";
import Login from "./components/Login";
import { auth } from "./firebase";
import Spinner from "react-spinkit";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContent>
          <img
            src='https://assets-global.website-files.com/621c8d7ad9e04933c4e51ffb/65eba5ffa14998827c92cc01_slack-octothorpe.png'
            alt=''
          />
          <Spinner
            name='ball-spin-fade-loader'
            color='var(--buzz-room-color)'
            fadeIn='none'
          />
        </AppLoadingContent>
      </AppLoading>
    );
  }

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

const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;

const AppLoadingContent = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
  }
`;
