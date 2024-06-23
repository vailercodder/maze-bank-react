import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UsersContext } from "../../contexts/UsersContext";
const WithdrawDeposit = () => {
  const [userId, setUserId] = useState("");
  const [amount, setAmount] = useState(0);
  const [user, setUser] = useState(null);
  const { updateUser } = useContext(UsersContext);
  const navigate = useNavigate();

  const fetchUser = async () => {
    try {
      const response = await axios.get(
        `https://66756763a8d2b4d072efe3af.mockapi.io/users/${userId}`
      );
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching user:", error);
      alert("User not found.");
    }
  };

  const handleWithdraw = async () => {
    if (!user) {
      alert("Fetch the user first.");
      return;
    }
    if (amount <= 0) {
      alert("Please enter a positive amount.");
      return;
    }
    if (!user.isActive) {
      alert("Account is inactive. Withdrawals are not allowed.");
      return;
    }

    let newCash = user.cash - amount;
    let newCredit = user.credit;

    if (newCash < 0) {
      const cashShortfall = Math.abs(newCash);
      if (user.credit >= cashShortfall) {
        newCredit = user.credit - cashShortfall;
        newCash = 0;
      } else {
        alert("Insufficient funds!");
        return;
      }
    }

    try {
      await axios.put(
        `https://66756763a8d2b4d072efe3af.mockapi.io/users/${userId}`,
        { cash: newCash, credit: newCredit }
      );
      alert("Withdrawal successful!");
      navigate("/user-management/user-stats");
    } catch (error) {
      console.error("Error updating user:", error);
      alert("Failed to update user.");
    }
  };

  const handleDeposit = async () => {
    if (!user) {
      alert("Fetch the user first.");
      return;
    }
    if (amount <= 0) {
      alert("Please enter a positive amount.");
      return;
    }
    if (!user.isActive) {
      alert("Account is inactive. Deposits are not allowed.");
      return;
    }

    const newCash = user.cash + amount;

    try {
      await axios.put(
        `https://66756763a8d2b4d072efe3af.mockapi.io/users/${userId}`,
        { cash: newCash }
      );
      alert("Deposit successful!");
      navigate("/user-management/user-stats");
    } catch (error) {
      console.error("Error updating user:", error);
      alert("Failed to update user.");
    }
  };

  return (
    <div className="withdraw-deposit">
      <h2>Withdraw/Deposit</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchUser();
        }}
      >
        <label>
          User ID:
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
        </label>
        <button type="submit">Fetch User</button>
      </form>
      {user && (
        <form>
          <label>
            Amount:
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              required
            />
          </label>
          <button type="button" onClick={handleWithdraw}>
            Withdraw
          </button>
          <button type="button" onClick={handleDeposit}>
            Deposit
          </button>
        </form>
      )}
    </div>
  );
};

export default WithdrawDeposit;
