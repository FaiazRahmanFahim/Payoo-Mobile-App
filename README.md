# 🔥 Payoo Mobile App

A modern, responsive mobile financial services application built with HTML, CSS (Tailwind), and JavaScript.

## 📱 Features

- **Add Money** - Add funds from bank accounts
- **Cash Out** - Withdraw money through agents
- **Transfer Money** - Send money to other users
- **Pay Bills** - Pay utility bills (Electricity, Water, etc.)
- **Get Bonus** - Redeem bonus coupons
- **Transaction History** - View all transactions

## 🚀 How to Run the Project

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for CDN resources)

### Steps to Run:

1. **Download/Clone** the project files
2. **Open** `index.html` in your web browser
3. **Login** using the credentials below
4. **Enjoy** the app!

## 🔐 Login Credentials

### Default Login Information:

- **Phone Number:** `12345678910` (11 digits)
- **PIN:** `1234` (4 digits)

> **Note:** You can use only given phone number and the PIN.

## 💰 Default Balance

- **Starting Balance:** $45,000
- The balance will update as you perform transactions

## 🎮 How to Use

### 1. **Login Process:**

- Enter any 11-digit phone number
- Enter PIN: `1234`
- Click "Login"

### 2. **Add Money:**

- Select a bank from dropdown
- Enter 11-digit account number
- Enter amount to add
- Enter PIN: `1234`
- Click "Add Money"

### 3. **Cash Out:**

- Enter 11-digit agent number
- Enter amount to withdraw
- Enter PIN: `1234`
- Click "Withdraw Money"

### 4. **Transfer Money:**

- Enter 11-digit user account number
- Enter transfer amount
- Enter PIN: `1234`
- Click "Send Money"

### 5. **Pay Bills:**

- Select bill type (Electricity, Water, etc.)
- Enter 11-digit biller account number
- Enter payment amount
- Enter PIN: `1234`
- Click "Pay Now"

### 6. **Get Bonus:**

- Enter any numeric coupon code
- Click "Get Bonus"
- The amount will be added to your balance

### 7. **View Transactions:**

- Click on "Transactions" button
- View your transaction history
- See latest transactions with timestamps

## 📋 Validation Rules

### Phone Numbers & Account Numbers:

- Must be exactly **11 digits**
- Only numeric values accepted

### PIN:

- Must be exactly **1234**
- Required for all financial transactions

### Amounts:

- Must be positive numbers
- Cannot be empty or zero
- For bonus: Enter numeric coupon value

## 🎨 Design Features

- **Mobile-First Responsive Design**
- **Modern Gradient UI**
- **Smooth Animations & Transitions**
- **Interactive Hover Effects**
- **Clean Typography with Inter Font**
- **Color-Coded Transaction Icons**

## 📁 File Structure

```
Payoo-Mobile-App/
├── index.html          # Login page
├── home.html           # Main application
├── JS/
│   ├── login.js        # Login functionality
│   └── home.js         # Main app functionality
├── Styles/
│   └── style.css       # Custom styles
├── Resources/
│   ├── payoo.png       # App icon
│   └── assets/         # UI icons and images
└── README.md           # This file
```

## 🛠️ Technologies Used

- **HTML5** - Structure
- **Tailwind CSS** - Styling & Responsive Design
- **JavaScript (ES6)** - Functionality & Interactions
- **Google Fonts (Inter)** - Typography
- **Font Awesome** - Icons


## 🔄 Transaction Flow

1. **Login** → Enter credentials → Access dashboard
2. **Select Service** → Choose from 6 available services
3. **Fill Form** → Enter required information
4. **Validate** → System validates input
5. **Process** → Transaction completed
6. **Update Balance** → Balance reflects changes
7. **History** → Transaction saved in history

## 👨‍💻 Developer Notes

- Built with mobile-first approach
- Uses local storage for transaction data
- No backend required - runs entirely in browser
- Responsive design optimized for mobile devices

## 📞 Support

If you encounter any issues:

1. Check browser console for errors
2. Ensure internet connection for CDN resources
3. Try refreshing the page
4. Use the exact login credentials provided

---

**Enjoy using Payoo Mobile App! 🚀**

_A modern financial services experience at your fingertips._
