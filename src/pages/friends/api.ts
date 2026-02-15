import type { friend, FriendData } from "./model";

export async function getFriends(steamID: String) {
  var friendList: FriendData[] = [];
  try {
    const response = await fetch(`https://api.steampowered.com/ISteamUser/GetFriendList/v0001/?key=129CF0CD882286FBDB384462821051A3&steamid=${steamID}&relationship=friend`);
    const data = await response.json();
    if (data?.friendslist?.friends) {
      var friendData = data.friendslist.friends as friend[]
      if (friendData.length > 0) {
        var index = 0;
        for (const currfriend of friendData) {
          if (index < 5){
            const friendResponse = await fetch(`https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=129CF0CD882286FBDB384462821051A3&steamids=${currfriend.steamid}`);
            friendList.push((await friendResponse.json()).response.players[0]);
          }
          index++;
        }
        return friendList;
      }
    }
    else {
      throw new Error('Please enter a valid Steam ID')
    }
    return data;
  } catch (error) {
    console.error('Error fetching friends:', error);
  }
}