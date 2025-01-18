### **Backend for BlossomTrends**

This repository contains the backend code for the BlossomTrends application. It provides the necessary APIs for user authentication, data management, and interactions with the frontend.

---

### **Features**
- User Registration and Login
- JSON Web Token (JWT) Authentication
- Secure Password Hashing
- Modular Structure for Scalability

---

### **Tech Stack**
- **Node.js**: Backend runtime
- **Express.js**: Web framework
- **MongoDB**: Database
- **JWT**: Authentication
- **Bcrypt.js**: Password hashing

---

### **Setup Instructions**

1. **Clone the repository**  
   ```bash
   git clone https://github.com/your-username/blossomtrends-backend.git
   cd blossomtrends-backend
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

3. **Set up environment variables**  
   Create a `.env` file in the root directory and add your configuration:
   ```plaintext
   MONGO_URI=your_mongo_database_uri
   JWT_SECRET=your_secret_key
   PORT=5000
   ```

4. **Run the server**  
   ```bash
   npm start
   ```

5. **API Endpoints**  
   - `POST /api/auth/register`: Register a new user  
   - `POST /api/auth/login`: Authenticate a user  

---

### **Folder Structure**
```plaintext
backend/
├── config/         
├── controllers/   
├── models/        
├── routes/         
└── server.js       
```

---

### **Contributing**
Feel free to raise issues or submit pull requests to improve the project.  

For any questions, contact : bindhu31krish@gmail.com

--- 

This backend is a core part of the BlossomTrends project. Let us know if you encounter any issues!
