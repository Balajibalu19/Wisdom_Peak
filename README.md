# User Management System - HomePage

This project implements a user management system with the following features:

User Listing: Displays a list of users with their details.

Search Functionality: Allows users to search for specific users by name.

Sorting Options: Sorts the user list in ascending or descending order.

Pagination: Breaks the user list into pages for better navigation.

Dark/Light Mode: Switch between themes with a toggle button.

# Features Breakdown

# 1. Search Bar

A search bar component enables users to filter the list by entering a name.

Case-insensitive search ensures flexibility for the user.

# 2. Sorting

Users can sort the list of names alphabetically in ascending or descending order.

Sorting is applied dynamically as the order is changed.

# 3. Pagination

Users are displayed in pages, with a customizable number of users per page.

Buttons for navigating between pages include:

Previous: Disabled on the first page.

Next: Disabled on the last page.

Page Numbers: Highlight the current page with a distinct style.

Pagination buttons are visually appealing and responsive.

# 4. Dark/Light Mode Toggle

Users can switch between light and dark themes.

Toggle button changes dynamically to reflect the current theme (e.g., sun icon for light mode, moon icon for dark mode).



# Folder Structure 

     src/
    |   |-- components/
    |   |   |-- UserCard.js
    |   |   |-- SearchBar.js
    |   |   |-- Sorting.js
    |   |-- context/
    |   |   |-- UserContext.js
    |   |-- pages/
    |   |   |-- HomePage.js
            |--UserDetailsPage.js
    |-- public/
    |-- package.json
    |-- README.md


# How to Run

# Prerequisites

     Node.js (>=16.x)
     
     npm or yarn

# Installation

# Clone the repository:

     git clone https://github.com/Balajibalu19/Wisdom_Peak.git
     cd react-user-app
# Install dependencies:

     npm install
     # or
     yarn install

# Start the development server:

     npm start
     # or
     yarn start

The application will be available at http://localhost:3000. 

# Components

# UserCard.js

Displays user information in a styled card format, adapting to light or dark themes.

# SearchBar.js

Provides an input field for filtering the user list based on the entered search term.

# Sorting.js

Allows sorting the user list by name in ascending or descending order.

# Pagination

Features:

Displays previous, next, and page numbers dynamically.

Highlights the active page.

Disabled state for edge-case buttons (e.g., "Previous" on the first page).

# Styling:

Buttons with hover effects and rounded corners.

Smooth transitions for hover and active states.

# Theming

Dark and light themes are implemented using a state toggle.

Dynamically applies styles to match the selected theme.



# OUTPUT IMAGES

![Image](https://github.com/user-attachments/assets/7d448a8b-a7eb-4d77-a38f-deb9a96d4be7)
