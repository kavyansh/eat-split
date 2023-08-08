import Button from "./Button";

export default function Friend({ friend, onSelect, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;

  function handleSelectClick() {
    onSelect(friend);
  }

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owe you ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      <Button onClick={handleSelectClick}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}
