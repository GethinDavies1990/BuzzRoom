import { AccessTime } from "@mui/icons-material";
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
      {/* HeaderSearch */}
      {/* HeaderRight */}
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
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

const HeaderAvatar = styled(Avatar)``;
