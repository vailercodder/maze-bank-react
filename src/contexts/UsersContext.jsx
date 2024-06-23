import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UsersContext = createContext();
// good case for children? i dont wanna nest but we good.
export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://66756763a8d2b4d072efe3af.mockapi.io/users"
      );
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const addUser = async (userData) => {
    try {
      const response = await axios.post(
        "https://66756763a8d2b4d072efe3af.mockapi.io/users",
        userData
      );
      setUsers([...users, response.data]);
      alert("User added successfully!");

      const audio = new Audio(
        "/public/sounds/GTA San Andreas Mission Passed - Sound Effect (HD).mp3" // cool sounds xd //
      );
      audio.play();
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  const deleteUser = async (passportId) => {
    try {
      const user = users.find((user) => user.passportId === passportId);
      if (!user) {
        throw new Error("User not found");
      }
      await axios.delete(
        `https://66756763a8d2b4d072efe3af.mockapi.io/users/${user.id}`
      );
      setUsers(users.filter((user) => user.passportId !== passportId));
      alert("User deleted successfully!"); // should have used "id" instead, but idk

      const audio = new Audio(
        "/public/sounds/GTA San Andreas Wasted - Sound Effect (HD).mp3"
      );
      audio.play();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const updateUser = async (passportId, updatedData) => {
    try {
      const user = users.find((user) => user.passportId === passportId);
      if (!user) {
        throw new Error("User not found");
      }
      const response = await axios.put(
        `https://66756763a8d2b4d072efe3af.mockapi.io/users/${user.id}`,
        updatedData
      );
      setUsers(
        users.map((user) =>
          user.passportId === passportId ? response.data : user
        )
      );
    } catch (error) {
      console.error("Error updating user:", error);
    }
  }; // should always remember dependencies, so to avoid infinite loop....

  return (
    <UsersContext.Provider
      value={{ users, fetchUsers, addUser, deleteUser, updateUser }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContext;
