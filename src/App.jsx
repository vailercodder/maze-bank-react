import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import UserManagement from "./pages/UserManagement";
import AddUser from "./components/UserPanel/AddUser";
import UserStats from "./components/UserPanel/UserStats";
import WithdrawDeposit from "./components/UserActions/WitdrawDeposit";
import { UsersProvider } from "./contexts/UsersContext";

function App() {
  return (
    <UsersProvider>
      <Router>
        <div className="app">
          <nav>
            <div className="logo">
              <Link to="/">MazeBank</Link>
            </div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/user-management">User Management</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user-management" element={<UserManagement />} />
            <Route path="/user-management/add-user" element={<AddUser />} />
            <Route path="/user-management/user-stats" element={<UserStats />} />
            <Route
              path="/user-management/transactions/:passportId"
              element={<WithdrawDeposit />}
            />
          </Routes>
        </div>
      </Router>
    </UsersProvider>
  );
}

export default App;
