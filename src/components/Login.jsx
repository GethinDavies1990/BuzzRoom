import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src='https://assets-global.website-files.com/621c8d7ad9e04933c4e51ffb/65eba5ffa14998827c92cc01_slack-octothorpe.png'
          alt=''
        />
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  background-color: aliceblue;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const LoginInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 024);

  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }
`;
