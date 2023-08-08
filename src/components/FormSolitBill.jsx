import { useState } from "react";
import Button from "./Button";

export default function FormSplitBill({ selectedFriend, onUpdateBalance }) {
  const [bill, setBill] = useState(0);
  const [yourExpense, setYourExpense] = useState(0);
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSplitBill(e) {
    e.preventDefault();
    if (!bill) return;

    let newBalance = 0;
    if (whoIsPaying === "user") {
      newBalance = selectedFriend.balance + (bill - yourExpense);
    } else {
      newBalance = selectedFriend.balance - yourExpense;
    }
    onUpdateBalance(newBalance);
    setBill(0);
    setYourExpense(0);
    setWhoIsPaying("user");
  }

  return (
    <form className="form-split-bill" onSubmit={handleSplitBill}>
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>💰 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>🧍 Your expense</label>
      <input
        type="text"
        value={yourExpense}
        onChange={(e) =>
          setYourExpense(
            Number(e.target.value) > bill ? yourExpense : Number(e.target.value)
          )
        }
      />

      <label>👫 {selectedFriend.name}'s expense</label>
      <input
        type="text"
        value={bill !== null ? bill - yourExpense : null}
        disabled
      />

      <label>Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}
