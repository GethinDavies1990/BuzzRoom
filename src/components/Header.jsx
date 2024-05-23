import { AccessTime, Search } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar />
        <AccessTime />
      </HeaderLeft>
      <HeaderSearch>
        <Search />
        <input placeholder='Search' />
      </HeaderSearch>
      {/* HeaderRight */}
    </HeaderContainer>
  );
}

export default Header;

const HeaderSearch = styled.div`
  flex: 0.4;
  border-radius: 25px;
  opacity: 1;
  border: 1px solid var(--buzz-room-color);
  text-align: center;
  display: flex;
  padding: 0 50px;
  align-items: center;

  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: 0;
    color: white;
    padding: 10px;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: black;
  color: white;
`;

const HeaderLeft = styled.div`
  display: flex;
  flex: 0.3;
  align-items: center;
  margin-left: 20px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;
