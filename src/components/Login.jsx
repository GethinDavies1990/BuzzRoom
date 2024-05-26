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

const LoginContainer = styled.div``;
const LoginInnerContainer = styled.div``;
