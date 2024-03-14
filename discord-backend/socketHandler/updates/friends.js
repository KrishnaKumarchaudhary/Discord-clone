const User = require("../../models/user");
const FriendsInvitation = require("../../models/friendInvitation");
const serverStore = require("../../serverStore");

const updateFriendsPendingInvitations = async (userId) => {
  try {
    const pendingInvitations = await FriendsInvitation.find({
      receiverId: userId,
    }).populate("senderId", "_id username mail");

    // find all active connections of specific userId
    const receiverList = serverStore.getActiveConnections(userId);
    const io = serverStore.getSocketServerInstance();

    receiverList.forEach((receiversocketId) => {
      io.to(receiversocketId).emit("friends-invitations", {
        pendingInvitations: pendingInvitations ? pendingInvitations : [],
      });
    });
  } catch (error) {
  }
};
const updateFriends = async (userId) => {
  try {
    const receiverList = serverStore.getActiveConnections(userId);
    if (receiverList.length > 0) {
      const user = await User.findById(userId, {
        _id: 1,
        friends: 1,
      }).populate("friends", "_id username mail");
      if (user) {
        const friendsList = user.friends.map((f) => {
          return {
            id: f._id,
            mail: f.mail,
            username: f.username,
          };
        });

        // find active connections of specific id (online user)

        // get io server instance
        const io = serverStore.getSocketServerInstance();
        receiverList.forEach((receiversocketIdId) => {
          io.to(receiversocketIdId).emit("friends-list", {
            friends: friendsList ? friendsList : [],
          });
        });
      }
    }
  } catch (error) {
  }
};
module.exports = {
  updateFriendsPendingInvitations,
  updateFriends,
};
