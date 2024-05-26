import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";

function ChatInput({ channelName, channelId }) {
  return (
    <ChatInputContainer>
      <form>
        <input placeholder={`Message #ROOM`} />
        <Button hidden type='submit'>
          Send Message
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;

const ChatInputContainer = styled.div``;
