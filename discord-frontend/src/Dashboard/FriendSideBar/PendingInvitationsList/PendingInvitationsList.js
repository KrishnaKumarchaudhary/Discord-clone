import React from "react";
import { styled } from "@mui/system";
import PendingInvitationsListItem from "./PendingInvitationsListItem";
const DUMMY_INVITATION = [
  { _id: "1", senderId: { username: "mark", mail: "dummy@ad.com" } },
  { _id: "2", senderId: { username: "john", mail: "john@ad.com" } },
  { _id: "3", senderId: { username: "Richard", mail: "Richard@ad.com" } },
  { _id: "4", senderId: { username: "Frank", mail: "Frank@ad.com" } },
  { _id: "5", senderId: { username: "Jonny", mail: "Jonny@ad.com" } },
];

const MainContainer = styled("div")({
  height: "22%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "auto",
});
const PendingInvitationsList = () => {
  return (
    <MainContainer>
      {DUMMY_INVITATION.map((invitation) => (
        <PendingInvitationsListItem
          key={invitation._id}
          isd={invitation._id}
          username={invitation.senderId.username}
          mail={invitation.senderId.username}
        />
      ))}
    </MainContainer>
  );
};

export default PendingInvitationsList;
