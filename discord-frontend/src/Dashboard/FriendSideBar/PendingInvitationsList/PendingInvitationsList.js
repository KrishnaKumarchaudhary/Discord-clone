import React from "react";
import { styled } from "@mui/system";
import PendingInvitationsListItem from "./PendingInvitationsListItem";
import { connect } from "react-redux";
// const DUMMY_INVITATION = [
//   { _id: "1", senderId: { username: "mark", mail: "dummy@ad.com" } },
//   { _id: "2", senderId: { username: "john", mail: "john@ad.com" } },
//   { _id: "3", senderId: { username: "Richard", mail: "Richard@ad.com" } },
//   { _id: "4", senderId: { username: "Frank", mail: "Frank@ad.com" } },
//   { _id: "5", senderId: { username: "Jonny", mail: "Jonny@ad.com" } },
// ];

const MainContainer = styled("div")({
  height: "22%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "auto",
});
const PendingInvitationsList = ({ pendingFriendsInvitations }) => {
  return (
    <MainContainer>
      {pendingFriendsInvitations.map((invitation) => (
        <PendingInvitationsListItem
          key={invitation._id}
          id={invitation._id}
          username={invitation.senderId.username}
          mail={invitation.senderId.mail}
        />
      ))}
    </MainContainer>
  );
};

const mapStoreStateToProps = ({ friends }) => {
  return {
    ...friends,
  };
};
export default connect(mapStoreStateToProps, null)(PendingInvitationsList);
