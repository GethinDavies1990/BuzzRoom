import { FiberManualRecordOutlined } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>BuzzRoom HQ</h2>
          <h3>
            <FiberManualRecordOutlined />
            Gethin Davies
          </h3>
        </SidebarInfo>
      </SidebarHeader>
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.div`
  color: white;
  background-color: black;
  flex: 0.3;
  border-top: 1px solid var(--buzz-room-color);
  max-width: 260px;
  margin-top: 60px;
`;

const SidebarHeader = styled.div``;

const SidebarInfo = styled.div``;
