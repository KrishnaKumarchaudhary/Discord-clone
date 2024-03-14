import React from "react";
import { styled } from "@mui/system";
import FriendListItem from "./FriendListItem";
import { connect } from "react-redux";

const MainContainer = styled("div")({
  flexGrow: 1,
  width: "100%",
});


const FriendsList = ({ friends, onlineUsers }) => {
  const checkOnlineUsers = (friends = [], onlineUsers = []) => {
    let data = [];
    friends.forEach((f) => {
      const isUserOnline = onlineUsers.find((user) => user.userId === f.id);
      const isOnline = isUserOnline ? true : false;
      data.push({ ...f, isOnline: isOnline });
    });
     return data;
  };
  return (
    <MainContainer>
      {checkOnlineUsers(friends, onlineUsers).map((friend) => (
        <FriendListItem
          username={friend.username}
          id={friend.id}
          key={friend.id}
          isOnline={friend.isOnline}
        />
      ))}
    </MainContainer>
  );
};

const mapStoreSateToProps = ({ friends }) => {
  return {
    ...friends,
  };
};
export default connect(mapStoreSateToProps)(FriendsList);
