# 🚀 Activity Dashboard

A sleek, filterable dashboard built with **React**, **raw CSS**, and **Vite** to help users track their progress toward certification. The application provides a clear overview of status, activity types, and time to completion, with features for searching and managing learning activities.

---

## ✨ Features

* **Progress Tracking:** Visual representation of activities **In Progress**, **For Review**, and **Remaining**.
* **Activity Filtering:**
    * Filter by **Status** (In Progress, Not Started, Completed).
    * Filter by **Activity Type** (Video Series, Guided Lab, Quiz, Assignment, Project).
    * Filter by **Time to Complete** (Quick, Less than 30 min).
* **Search Functionality:** Easily find activities using the integrated Search Bar.
* **Modular Design:** Built with reusable React components for maintainability.

---

## 💻 Tech Stack

* **Framework:** React
* **Styling:** Raw CSS (for a custom look and feel)
* **Bundler:** Vite
* **Language:** JavaScript (ES6+)

---

## 🧩 Components

The dashboard is composed of the following key components:

| Component Name | Description |
| :--- | :--- |
| `Header` | Contains the main application title or logo. |
| `WelcomeBanner` | Displays a personalized greeting (e.g., "Hello, Alex!") and key progress metrics. |
| `Sidebar` | Houses the navigation and activity filtering options. |
| `SearchBar` | Allows users to search through the activity list. |
| `ActivityList` | Manages the collection and display of `ActivityCard` components based on filters. |
| `ActivityCard` | Displays the details for an individual activity (title, status, progress%). |

---

## 🛠️ Installation and Setup

1.  **Clone the repository:**
    ```bash
    git clone git clone https://github.com/SinghSparsh/Learning-Dashboard

    cd Learning-Dashboard
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

The application should now be running on `http://localhost:5173/` (or a similar port provided by Vite).

---

## 👤 Author

**Sparsh Singh**
