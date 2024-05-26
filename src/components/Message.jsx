import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import { auth } from "../firebase";

function Message({ message, timestamp, user, userImage }) {
  const [userD] = useAuthState(auth);

  return (
    <MessageContainer>
      <img src={userD.photoURL} alt={userD.displayName} />
      <MessageInfo>
        <h4>
          {user}
          {""}
          <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
        </h4>
        <p>{message}</p>
      </MessageInfo>
    </MessageContainer>
  );
}

export default Message;

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;

  > img {
    height: 50px;
    width: 50px;
    object-fit: cover;
    border-radius: 50px;
    border: 1px solid black;
  }
`;
const MessageInfo = styled.div`
  padding-left: 10px;

  > h4 > span {
    color: gray;
    font-weight: 300;
    margin-left: 4px;
    font-size: 10px;
  }
`;
