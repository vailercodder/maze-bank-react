# Maze Bank Admin Panel

## Overview

The Maze Bank Admin Panel is a React application designed to manage bank users, perform transactions, and display user statistics. It leverages MockAPI for CRUD operations and employs React Context for global state management.

## Features

### User Management

- **Add Users**: Form to add users with fields for Passport ID, Cash, Credit, and Active status.
- **Delete Users**: Remove users from the system.
- **User Stats**: Display all users in a sortable table with details including ID, Passport ID, Name, Cash, Credit, Active status, and Profile Image.

### Transactions

- **Withdraw/Deposit**: Form to perform withdrawals and deposits. Includes logic to handle cash and credit balances.

## Pages

1. **Home Page**: Overview and navigation.
2. **User Management**: Add, update, and delete users.
3. **User Stats**: Display user statistics.
4. **Transactions**: Perform deposits and withdrawals.

## Implementation Details

- **React Context**: Used for managing global state, including fetching, adding, deleting, and updating users.
- **MockAPI**: Used for backend operations.
- **Routing**: Handled using React Router for navigation between different pages.

## Usage

- **Add User**: Navigate to User Management -> Add User.
- **View Users**: Navigate to User Management -> User Stats.
- **Perform Transactions**: Navigate to User Management -> User Stats -> Withdraw/Deposit.

## Technologies Used

- React
- React Router
- React Context API
- MockAPI
- Axios for API requests

## Deployment

- Deployed on Netlify.

## Quick Start

1. Clone the repository.
2. Install dependencies: `npm install`.
3. Start the development server: `npm run dev`.

Enjoy managing your bank users with Maze Bank Admin Panel!
