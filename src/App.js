import { useState } from "react";
import FriendsList from "./components/FriendsList";
import FormSplitBill from "./components/FormSolitBill";
import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(initialFriends[0]);

  function handleAddFriend(newFriend) {
    setFriends((friends) => [...friends, newFriend]);
    setShowAddFriend(false);
  }

  function handleSelection(friend) {
    setSelectedFriend(selectedFriend?.id === friend.id ? null : friend);
    setShowAddFriend(false);
  }

  function handleUpdateBalance(balance) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: balance }
          : friend
      )
    );
    setSelectedFriend(null);
    // setSelectedFriend((selected) => ({ ...selected, balance: balance }));
    // Not needed as we will be closing on split bill done
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelect={handleSelection}
          selectedFriend={selectedFriend}
        />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={() => setShowAddFriend((show) => !show)}>
          {!showAddFriend ? "Add Friend" : "Close"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          key={selectedFriend.id}
          selectedFriend={selectedFriend}
          onUpdateBalance={handleUpdateBalance}
        />
      )}
    </div>
  );
}
