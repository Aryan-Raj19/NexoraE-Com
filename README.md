# Mock E-Commerce Cart (MERN Stack)

A simple **mock e-commerce shopping cart** built with the **MERN stack** (MongoDB, Express, React, Node.js).  
It allows users to:
- Browse products (with images and details)
- Add/remove items from the cart
- View total price dynamically
- Fill a small checkout form (Name, Email, Phone)
- Get a receipt modal after successful checkout

---

##  Features

✅ Product listing in a clean grid layout  
✅ Cart management (add, remove, quantity updates)  
✅ Dynamic total calculation  
✅ Checkout form with validation  
✅ Receipt modal (shows user details, total, and timestamp)  
✅ Organized file structure for scalability  

---

##  Folder Structure

```
mock-ecom-cart/
│
├── backend/
│ ├── data/
│ │ └── products.js
│ ├── models/
│ │ └── cartModel.js
│ ├── controllers/
│ │ ├── productController.js
│ │ ├── checkoutController.js
│ │ └── productController.js
│ ├── routes/
│ │ ├── productRoutes.js
│ │ ├── cartRoutes.js
│ │ └── checkoutRoutes.js
│ ├── config/
│ │ └── db.js
│ ├── server.js
│ ├── package.json
│ ├── package-lock.json
│ ├── .env 
│
├── frontend/
│ ├── src/
│ │ ├── api/
│ │ │ └── api.js
│ │ ├── components/
│ │ │ ├── ProductList.js
│ │ │ ├── Cart.js
│ │ │ └── CheckoutForm.js
│ │ ├── context/
│ │ │ └── CartContext.js
│ │ ├── styles/
│ │ │ └── styles.css
│ │ └── App.js
│ ├── package.json
│ ├── public/
│ └── README.md
│
├── .gitignore
└── README.md
```

---

##  Tech Stack

**Frontend:**
- React (with Context API)
- CSS Grid & Flexbox for layout
- Axios for API calls

**Backend:**
- Node.js + Express
- CORS enabled
- Dummy JSON product data

---

##  How to Run the Project

### 1️ Clone the Repository

```bash
git clone https://github.com/yourusername/mock-ecom-cart.git
cd mock-ecom-cart

``` 
### 2 Setup Backend

```bash
cd backend
npm install
npm start
```

### 3 Setup Frontend

```bash
cd ../frontend
npm install
npm start
```

### 4  API EndPoints

```
Method	 Endpoint	     Description
GET	     /api/products	 Get all products
POST	 /api/checkout	 Submit cart + user info and get receipt
```

### 5 Example Checkout Payload

```json
{
  "cartItems": [
    { "id": 1, "name": "T-Shirt", "price": 20, "qty": 2 },
    { "id": 2, "name": "Shoes", "price": 50, "qty": 1 }
  ],
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210"
}
```

### 6 Example Receipt Response

```json
{
  "message": "Checkout successful",
  "receipt": {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "9876543210",
    "total": 90,
    "timestamp": "2025-11-06T11:20:30.000Z"
  }
}
```
## Scripts

### Backend

```bash
npm run dev
```

### Frontend

```bash
npm start
```

## Author

**Aryan Raj**
