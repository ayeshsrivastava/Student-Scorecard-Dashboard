# 🎯 Student Scorecard Dashboard

A modern and interactive **Student Scoreboard Dashboard** built using React.  
This application allows users to manage student records, update scores dynamically, and instantly visualize pass/fail status in a clean UI.

---

## 🚀 Live Demo

👉 https://merry-meringue-b3a7a8.netlify.app/

---

## 📌 Overview

This project is designed to demonstrate how React handles:
- Dynamic data updates
- Component-based architecture
- Real-time UI rendering

It provides a simple yet practical interface to manage student performance efficiently.

---

## ✨ Features

- 📋 View all students in a structured table  
- ➕ Add new students with name and score  
- ✏️ Update scores using inline editing  
- ❌ Delete student records  
- ✅ Automatic pass/fail evaluation  
  - Pass → score ≥ 40  
  - Fail → score < 40  
- 🎨 Clean, responsive, and user-friendly interface  

---

## 🧠 Core Concepts Used

- Functional Components  
- React Hooks (`useState`, `useEffect`)  
- Props & Component Communication  
- Controlled Form Inputs  
- Conditional Rendering  
- State Management  

---

## ⚙️ How It Works

- The main state (`students`) is maintained in **App.jsx**
- Child components receive data via **props**
- User actions (add/update/delete) trigger **state updates**
- React automatically re-renders the UI based on state changes

---

## 🏗️ Project Structure

src/
│
├── components/
│ ├── Header.jsx
│ ├── AddStudentForm.jsx
│ ├── StudentTable.jsx
│ └── StudentRow.jsx
│
├── App.jsx
└── App.css


---

## 🛠️ Tech Stack

- React (Vite)
- JavaScript (ES6+)
- CSS (Pure CSS)

---

## 📦 Installation & Setup

1. Clone the repository
bash
git clone https://github.com/ayeshsrivastava/Student-Scorecard-Dashboard.git
Navigate into the project
cd Student-Scorecard-Dashboard
Install dependencies
npm install
Start development server
npm run dev
📷 Preview

<img width="1919" height="904" alt="image" src="https://github.com/user-attachments/assets/20b511e6-4a39-432e-a510-3f3b115dc42a" />

---
## 🎯 Purpose

This project was built as part of a Web Development (React) lab assignment to strengthen understanding of real-world React concepts and UI design.
---

##💡 Future Improvements
Add local storage or database integration
Add sorting/filtering functionality
Improve accessibility
Add charts/analytics view

🏁 Conclusion

This project demonstrates how simple React concepts can be used to build a clean, functional, and interactive application.

It focuses on writing readable code, maintaining proper structure, and delivering a good user experience.
