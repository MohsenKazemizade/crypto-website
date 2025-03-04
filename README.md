# 🌍 Crypto-Website

Crypto-Website is an **open-source web application** that allows users to **view real-time cryptocurrency prices** and create a personalized dashboard. Registered users can **track their favorite cryptocurrencies** and receive **custom price change alerts** via notifications.

## 🚀 Features

✔️ **View real-time cryptocurrency prices**  
✔️ **User authentication (Register & Login)**  
✔️ **Personalized dashboard for each user**  
✔️ **Favorite cryptocurrencies tracking**  
✔️ **Custom price alerts with user-defined time intervals**

---

## 🛠️ Technologies Used

This project is built using the following technologies:

- **Vite** → Fast development and optimized builds
- **React** → Component-based UI development
- **React Router** → Client-side navigation and routing
- **Ant Design** → Pre-built UI components for a modern interface
- **Axios** → API calls and data fetching
- **Storybook** → UI component documentation and visualization
- **React Testing Library** → Unit and integration testing for React components

---

## 🏗️ Project Setup & Installation

Follow these steps to set up and run the project locally:

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/MohsenKazemizade/crypto-website
cd crypto-website
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Run the Development Server

```sh
npm run dev
```

After running this command, the project will be available at:  
➡️ **http://localhost:5173/** (default Vite dev server)

---

## 🔐 Authentication & User Roles

This project includes **user authentication** for private and public pages:

- **Public Pages:** Open to all users (e.g., Home, Crypto Prices)
- **Private Pages:** Only accessible to authenticated users (e.g., Profile Page, Dashboard)

💡 Users need to **register and log in** to access **private pages**.

- **Authentication is handled via (https://moviesapi.codingfront.dev).**
- **Crypto pricing data is fetched from CoinCap API.**

---

## 📂 Project Folder Structure

```plaintext
crypto-website/
│── src/
│   ├── Components/       # Reusable UI components
│   ├── Context/          # Global state management (Context API)
│   ├── Hooks/            # Custom hooks for reusable logic
│   ├── Layouts/          # Layout components (AuthLayout, PrimaryLayout, SecondaryLayout, UserLayout)
│   ├── Modules/          # Independent and reusable modules in the project
│   ├── Pages/            # Page components (Auth, LoginPage, SignupPage, CryptoDetailsPage, DashboardPage, ExchangeMarketDetailsPage, ExchangePage, HomePage, NotFoundPage, RankingsPage)
│   ├── Router/           # Application routing management
│   ├── Services/         # API calls and server communication (Axios setup)
│   ├── Stories/          # Storybook documentation and related assets
│   ├── Styles/           # CSS and styling files
│   ├── Utils/            # Utility functions and helper methods
│   ├── main.tsx          # Main entry file of the application
│── public/               # Static assets (images, icons, etc.)
│── .storybook/           # Storybook configuration files
│── package.json          # Project dependencies and scripts
│── README.md             # Project documentation
```

---

## 🧪 Testing with React Testing Library

This project uses **React Testing Library** for unit and integration testing.

To run tests:

```sh
npm test
```

### Installed Testing Dependencies:

```sh
npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

---

## 🔧 Security Considerations

To check for vulnerabilities in dependencies, run:

```sh
npm audit
```

If issues are found, try to fix them with:

```sh
npm audit fix
```

---

## 📝 Additional Notes

- The authentication service is handled via an **(https://moviesapi.codingfront.dev)**.
- Cryptocurrency pricing data is retrieved from **CoinCap API**.
- The project does **not** have a backend yet, but future updates may introduce additional server-side functionality.

---

📌 **This project is open-source! Feel free to contribute and improve it in the future.** 🚀
