import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UsersContext } from "../../contexts/UsersContext";
import "../../styles/UsersStats.css";

const UserStats = () => {
  const { users, fetchUsers, deleteUser } = useContext(UsersContext);
  const [sortedUsers, setSortedUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    setSortedUsers(users);
  }, [users]);

  const sortByActive = () => {
    const sorted = [...sortedUsers].sort((a, b) => b.isActive - a.isActive);
    setSortedUsers(sorted);
  };

  const sortByCash = () => {
    const sorted = [...sortedUsers].sort((a, b) => b.cash - a.cash);
    setSortedUsers(sorted);
  };

  const sortByName = () => {
    const sorted = [...sortedUsers].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setSortedUsers(sorted);
  };

  return (
    <div className="user-stats">
      <h2>User Stats</h2>
      <div className="sort-buttons">
        <button onClick={sortByActive}>Sort by Active</button>
        <button onClick={sortByCash}>Sort by Cash</button>
        <button onClick={sortByName}>Sort by Name</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Passport ID</th>
            <th>Name</th>
            <th>Cash</th>
            <th>Credit</th>
            <th>Active</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.passportId}</td>
              <td>{user.name}</td>
              <td>{user.cash}</td>
              <td>{user.credit}</td>
              <td>{user.isActive ? "Yes" : "No"}</td>
              <td>
                {user.image ? (
                  <img
                    src={user.image}
                    alt={user.name}
                    className="user-image"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "images/default-avatar.png";
                    }}
                  />
                ) : (
                  <img
                    src="images/default-avatar.png"
                    alt="Default Avatar"
                    className="user-image"
                  />
                )}
              </td>
              <td>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
                <Link to={`/user-management/transactions/${user.id}`}>
                  <button>Withdraw/Deposit</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserStats;
