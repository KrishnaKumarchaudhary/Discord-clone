import * as api from "../../api";
import { openAlertMessage } from "./alertAction";

export const friendsActions = {
  SET_FRIENDS: "FRIENDS.SET_FRIENDS",
  SET_PENDING_FRIENDS_INITATIONS: "FRIENDS.SET_PENDING_FRIENDS_INITATIONS",
  SET_ONLINE_USERS: "FRIENDS.SET_ONLINE_USERS",
};

export const getActions = (dispatch) => {
  return {
    sendFriendInvitation: (data, closeDialogHandler) => {
      dispatch(sendFriendInvitation(data, closeDialogHandler));
    },
  };
};
export const setPendingFriendsInvitations = (pendingFriendsInvitations) => {
  return {
    type: friendsActions.SET_PENDING_FRIENDS_INITATIONS,
    pendingFriendsInvitations,
  };
};
const sendFriendInvitation = (data, closeDialogHandler) => {
  return async (dispatch) => {
    const response = await api.sendFriendInvitation(data);
    if (response.error) {
      dispatch(openAlertMessage(response.exception?.response?.data));
    } else {
      dispatch(openAlertMessage("Inviation has been sent!"));
      closeDialogHandler();
    }
  };
};
