const FriendInvitation = require("../../models/friendInvitation");
const friendsUpdates = require("../../socketHandler/updates/friends");
const postReject = async (req, res) => {
  try {
    const { id } = req.body;
    const { userId } = req.user;

    //remove that invitation from friends invitations collection
    const invitationExists = await FriendInvitation.exists({ _id: id });

    if (invitationExists) {
      await FriendInvitation.findByIdAndDelete(id);
    }

    // update pending invitations
    friendsUpdates.updateFriendsPendingInvitations(userId);

    return res.status(200).send("Invitation successfully rejected");
  } catch (err) {
    return res.status(500).send("Something went wrong please try again");
  }
  return res.send("reject handler");
};
module.exports = postReject;
