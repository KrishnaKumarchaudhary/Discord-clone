import React from "react";
import { styled } from "@mui/system";
import FriendListItem from "./FriendListItem";
const DUMMY_FRIENDS = [
  {
    id: 1,
    username: "krishna",
    isOnline: true,
  },
  {
    id: 2,
    username: "Rahul",
    isOnline: true,
  },
  {
    id: 3,
    username: "Mohit",
    isOnline: true,
  },
  {
    id: 4,
    username: "Gaurav",
    isOnline: false,
  },
  {
    id: 5,
    username: "Mahesh",
    isOnline: false,
  },
];

const MainContainer = styled("div")({
  flexGrow: 1,
  width: "100%",
});

const FriendsList = () => {
  return (
    <MainContainer>
      {DUMMY_FRIENDS.map((friend) => (
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

export default FriendsList;
