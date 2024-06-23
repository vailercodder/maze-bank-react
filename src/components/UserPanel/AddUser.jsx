import React, { useState, useContext } from "react";
import { UsersContext } from "../../contexts/UsersContext";
import "../../styles/AddUser.css";

const AddUser = () => {
  const { addUser } = useContext(UsersContext);
  const [formData, setFormData] = useState({
    passportId: "",
    fullName: "",
    cash: 0,
    credit: 100,
    isActive: true,
    email: "",
    age: "",
    address: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(formData);
  };

  // Wasnt sure what fields to put... as long  as the request is sent we good(should add form validation  later {after long sleep...} will prob just add copy paste and chane it later)
  return (
    <div className="add-user">
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Passport ID:
          <input
            type="text"
            name="passportId"
            value={formData.passportId}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Full Name:
          <input
            type="text"
            name="fullName"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Cash:
          <input
            type="number"
            name="cash"
            value={formData.cash}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Credit:
          <input
            type="number"
            name="credit"
            value={formData.credit}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Active:
          <input
            type="checkbox"
            name="isActive"
            checked={formData.isActive}
            onChange={(e) =>
              setFormData({ ...formData, isActive: e.target.checked })
            }
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
