import {
  AddCircleOutlineOutlined,
  AppsOutlined,
  BookmarkBorderOutlined,
  Create,
  DraftsOutlined,
  ExpandLessOutlined,
  ExpandMoreOutlined,
  FiberManualRecord,
  FileCopyOutlined,
  InboxOutlined,
  InsertCommentOutlined,
  PeopleAltOutlined,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import SidebarOption from "./SidebarOption";
import { useCollection } from "react-firebase-hooks/firestore";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Sidebar() {
  const [channels, loading, error] = useCollection(db.collection("rooms"));
  const [user] = useAuthState(auth);

  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>BuzzRoom HQ</h2>
          <h3>
            <FiberManualRecord />
            {user.displayName}
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
      <hr />
      <SidebarOption Icon={ExpandMoreOutlined} title='Channels' />
      <hr />
      <SidebarOption
        Icon={AddCircleOutlineOutlined}
        addChannelOption
        title='Add channel'
      />
      {channels?.docs.map((doc) => (
        <SidebarOption key={doc.id} id={doc.id} title={doc.data().name} />
      ))}
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.div`
  color: white;
  background-color: black;
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;

  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: var(--buzz-room-color);
    font-size: 18px;
    background-color: transparent;
    border-radius: 999px;
    border: solid 1px var(--buzz-room-color);
    cursor: pointer;
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
    color: lightgreen;
  }
`;
