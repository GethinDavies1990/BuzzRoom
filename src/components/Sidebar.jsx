import {
  AppsOutlined,
  BookmarkBorderOutlined,
  Create,
  DraftsOutlined,
  ExpandLessOutlined,
  FiberManualRecord,
  FileCopyOutlined,
  InboxOutlined,
  InsertCommentOutlined,
  PeopleAltOutlined,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import SidebarOption from "./SidebarOption";

function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>BuzzRoom HQ</h2>
          <h3>
            <FiberManualRecord />
            Gethin Davies
          </h3>
        </SidebarInfo>
        <Create />
      </SidebarHeader>

      <SidebarOption Icon={InsertCommentOutlined} title='Threads' />
      <SidebarOption Icon={InboxOutlined} title='Mentions & reactions' />
      <SidebarOption Icon={DraftsOutlined} title='Saved items' />
      <SidebarOption Icon={BookmarkBorderOutlined} title='Channel browser' />
      <SidebarOption Icon={PeopleAltOutlined} title='People & user groups' />
      <SidebarOption Icon={AppsOutlined} title='Apps' />
      <SidebarOption Icon={FileCopyOutlined} title='File Browser' />
      <SidebarOption Icon={ExpandLessOutlined} title='Show less' />
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

const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid var(--buzz-room-color);
  padding: 13px;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: var(--buzz-room-color);
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
  }
`;

const SidebarInfo = styled.div`
  flex: 1;

  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }

  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`;
