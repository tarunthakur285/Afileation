# Affiliate++ (MERN Stack Project)

Welcome to **Affiliate++**, a full-stack MERN application for affiliate management, user roles, payments, and analytics.

---

## 🚀 Project Overview
Affiliate++ is a modern web application built with the MERN stack (MongoDB, Express, React, Node.js). It provides:
- User authentication (including Google OAuth)
- Role-based access control (RBAC)
- Password reset via email
- Payment and subscription management
- Analytics dashboard

---

## ✨ Features
- **User Registration & Login** (with JWT & Google OAuth)
- **Password Reset** (email-based, secure code)
- **Role Management** (admin, user)
- **Payment Integration** (Razorpay)
- **Subscription Handling**
- **Analytics for Links**
- **Responsive UI** (React + Bootstrap)

---

## 📁 Folder Structure
```
afileation/
  client/         # React frontend
    src/
      pages/      # Main pages (Login, Register, Dashboard, etc.)
      layout/     # Layout components
      rbac/       # Role-based access control
      redux/      # Redux store & user state
      ...
  server/         # Node.js/Express backend
    src/
      controller/ # Route controllers (auth, user, payment, etc.)
      model/      # Mongoose models
      routes/     # Express routes
      middleware/ # Auth & RBAC middleware
      service/    # Email & payment services
      ...
```

---

## ⚙️ Environment Variables

**Do NOT upload your `.env` file to GitHub!**

### Backend (`server/.env`)
Create a `.env` file in the `server/` directory. Here is an example:

```env
# .env (server)
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_REFRESH_TOKEN_SECRET=your_jwt_refresh_secret
GMAIL_EMAIL_ID=your_gmail_address@gmail.com
GMAIL_APP_PASSWORD=your_gmail_app_password
GOOGLE_CLIENT_ID=your_google_oauth_client_id
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
RAZORPAY_WEBHOOK_SECRET=your_razorpay_webhook_secret
NODE_ENV=development
```

> **Note:** For Google and Gmail, use an [App Password](https://support.google.com/accounts/answer/185833) if 2FA is enabled.

### Frontend (`client/.env`)
Create a `.env` file in the `client/` directory. Here is an example:

```env
# .env (client)
REACT_APP_SERVER_ENDPOINT=http://localhost:5000
REACT_APP_GOOGLE_CLIENT_ID=your_google_oauth_client_id
REACT_APP_RAZORPAY_KEY_ID=your_razorpay_key_id
```
- Change the value to your production server URL when deploying.
- All React environment variables must start with `REACT_APP_`.
- After editing the `.env` file, restart the React development server.

---

## ⚡ Quick Setup

### 1. **Clone the Repository**
```bash
git clone https://github.com/yourusername/afileation.git
cd afileation
```

### 2. **Install Dependencies**
```bash
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```

### 3. **Configure Environment Variables**
- Copy the `.env` examples above into `server/.env` and `client/.env` and fill in your secrets.
- **Never commit your `.env` files!**

### 4. **Run the Application**
```bash
# Start backend
cd server
npm start

# In a new terminal, start frontend
cd ../client
npm start
```

- The frontend will run on [http://localhost:3000](http://localhost:3000)
- The backend will run on [http://localhost:5000](http://localhost:5000) (or as configured)

---

## 🛡️ Security & Best Practices
- **Never upload `.env` or sensitive files to GitHub.**
- Use strong, unique secrets for JWT and API keys.
- Use HTTPS in production.

---

## 🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📧 Contact
For questions or support, please contact [your-email@example.com].

---

**Happy Coding! 🚀** 