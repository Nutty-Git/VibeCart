# VibeCart – Mock E-Commerce App

## 🛍️ Overview
This is a **mock full-stack e-commerce application** built as part of an assignment. It includes a React frontend, mock backend APIs, and context-based cart and authentication flows. The goal was to implement product listing, cart functionality, and a basic checkout flow using mock data and modular architecture.

---

## 🚀 Features
- Product listing from mock API
- Add to Cart using React Context
- Cart page with quantity and total
- Checkout form with shipping info
- Order confirmation page with delivery estimate
- Responsive UI using Tailwind CSS
- Toast notifications for feedback
- Navigation using React Router

---

## 🧪 Tech Stack
| Layer | Tools Used |
|-------|------------|
| Frontend | React, React Router, Tailwind CSS, Axios, Toastify |
| State Management | React Context API (`AuthContext`, `CartContext`) |
| Backend (Mock) | Express.js, MongoDB (mocked locally), REST APIs |
| Dev Tools | VS Code, GitHub, Postman |
| Environment | `.env` for API base URL configuration |


## ⚙️ Setup Instructions

1. Clone the repo
```bash
git clone https://github.com/your-username/vibeCart.git
cd vibeCart/frontend

2. Install dependencies
npm install


3. Configure .env
Create a .env file in /frontend:
REACT_APP_API_BASE_URL=http://localhost:5050


4. Start the frontend
npm start


5. Start the backend (if applicable)
cd ../backend
npm install
npm run dev


📸 Screenshots
Screenshots of:
- Folder structure
- Product listing page
- Cart page
- Checkout form
- Order confirmation page
- Errors and fixes
These are included in the /screenshots folder or will be attached in the final report.


✅ Assignment Notes
- Built using mock APIs and mock data
- Focused on modular architecture and UI polish
- Bonus features: order confirmation page, delivery estimate, route protection

🧠 Challenges Faced
 Issue/ Resolution
  dispatch already declared | Removed duplicate declaration in Products.jsx

Cart not updating | Ensured CartProvider wraps <App /> in index.js

Navigation after checkout | Replaced navigate("/") with navigate("/order-confirmation")

UI not polished | Used Tailwind CSS for layout, spacing, and responsiveness

📦 Future Improvements
- Persist cart in localStorage
- Save orders to backend
- Add login protection and email confirmation
- Add quantity controls and payment integration

🙌 Author
Shruti Hedau
Full-stack developer in transition, focused on building modular, modern web apps with React and Node.js.
