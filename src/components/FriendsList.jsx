import Friend from "./Friend";

export default function FriendsList({ friends, onSelect, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          onSelect={onSelect}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}
