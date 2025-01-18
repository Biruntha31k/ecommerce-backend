BlossomTrends:
E-Commerce MERN Stack - Backend
The backend of the e-commerce application is built using Node.js, Express.js, and MongoDB to manage users, products, orders, and payment processing. The backend handles authentication, cart management, product operations, and communication with the database.

Table of Contents
Features
Tech Stack
Getting Started
Environment Variables
Running the Application
APIs
License
Features
User Features:
User Authentication: Secure sign-up/login functionality using bcrypt and JWT.
Cart Management: Handle add/remove operations for cart items.
Product Browsing: Retrieve products and related data from MongoDB.
Admin Features:
Admin Panel: Admin can add, edit, and remove products.
Order Management: Admin can view, create, and update orders.
Tech Stack
Backend: Node.js, Express.js
Database: MongoDB (using Mongoose)
Authentication: JWT (JSON Web Tokens)
File Handling: Multer for handling product image uploads.
Security: bcrypt for password hashing.
Getting Started
Prerequisites
Node.js: Ensure you have Node.js installed.
MongoDB: Set up a MongoDB instance or use MongoDB Atlas.
Installation
Clone the repository:

bash
Copy
Edit
git clone https://github.com/Adhibhuvanasandhya/E-commerce
cd E-commerce/backend
Install dependencies:

bash
Copy
Edit
npm install
Environment Variables
Create a .env file in the backend root directory with the following variables:

env
Copy
Edit
PORT=5000
DATABASE_URL=mongodb://localhost:27017/e-commerce
JWT_SECRET=your-jwt-secret-key
CLOUDINARY_URL=your-cloudinary-url
STRIPE_SECRET_KEY=your-stripe-secret-key
Running the Application
Start the backend server:
bash
Copy
Edit
npm start
The server will be available at http://localhost:5000.
Access the Application
Backend: https://e-commerce-backend-mu-sage.vercel.app
APIs
User APIs:

POST /signup: Register a new user.
POST /login: Login an existing user.
POST /addtocart: Add items to the cart.
POST /removefromcart: Remove items from the cart.
GET /getcart: Fetch current user's cart data.
Admin APIs:

POST /addproduct: Add a new product.
GET /allproducts: Fetch all products.
POST /removeproduct: Remove a product by ID.
License
This project is licensed under the MIT License. See the LICENSE file for details.
