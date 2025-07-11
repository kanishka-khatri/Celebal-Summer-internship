# Week 6 Assignment: RESTful API using Node.js, Express, and MongoDB

## 📚 Description

This project implements a RESTful API for managing `products` using **Node.js**, **Express**, and **MongoDB** with **Mongoose** ODM.  
It supports **CRUD operations** — Create, Read, Update, and Delete products.

---

## 🗂️ Project Structure

```
celebal-week6-rest-api/
├── controllers/
│   └── productController.js
├── models/
│   └── Product.js
├── routes/
│   └── productRoutes.js
├── server.js
├── package.json
└── README.md
```

---

## ⚙️ Setup Instructions

1. Clone or download this repository.
2. Run the following commands:

```bash
npm install
```

3. Make sure MongoDB is running (local or Atlas), then edit the MongoDB URI in `server.js` if needed:

```js
mongoose.connect('mongodb://localhost:27017/celebal', { ... });
```

4. Start the server:

```bash
node server.js
```

The API will run at: `http://localhost:3000`

---

## 📌 API Endpoints

### ➕ Create a Product

**POST** `/api/products`  
**Body:**
```json
{
  "name": "Wireless Mouse",
  "price": 799,
  "category": "Electronics"
}
{
  "name": "Asus Bagpack",
  "price": 950,
  "category": "Electronics"
}

```

✅ Example Response:
```json
{
  "_id": "6871499a9febaf7e19904962",
  "name": "Wireless Mouse",
  "price": 799,
  "category": "Electronics",
  "__v": 0
}
{
  "_id": "68714a2d9febaf7e19904965",
  "name": "Asus Bagpack",
  "price": 950,
  "category": "Electronics",
  "__v": 0
}
```

🖼️ Screenshot:  
![Create Product](<output/Create a Product.png>)

---

### 📥 Get All Products

**GET** `/api/products`

✅ Example Response:
```json
[
  {
    "_id": "6871499a9febaf7e19904962",
    "name": "Wireless Mouse",
    "price": 799,
    "category": "Electronics"
  }
  {
  "_id": "68714a2d9febaf7e19904965",
  "name": "Asus Bagpack",
  "price": 950,
  "category": "Electronics",
  }
]
```

🖼️ Screenshot:  
![Get All Products](<output/Get All Products.png>)

---

### 🔍 Get Product by ID

**GET** `/api/products/:id`

✅ Example Response:
```json
{
  "_id": "665c2a57c317127dc8fc53a1",
  "name": "Wireless Mouse",
  "price": 799,
  "category": "Electronics"
}
```

🖼️ Screenshot:  
![Get Product By ID](<output/Get Product by ID.png>)

---

### ✏️ Update Product

**PUT** `/api/products/:id`  
**Body:**
```json
{
  "name": "Asus Bagpack",
  "price": 950,
  "category": "Accessories"
}
```

✅ Example Response:
```json
{
  "_id": "68714a2d9febaf7e19904965",
  "name": "Asus Bagpack",
  "price": 950,
  "category": "Accessories"
}
```

🖼️ Screenshot:  
![Update Product](<output/Update Product by ID.png>)

---

### ❌ Delete Product

**DELETE** `/api/products/:id`

✅ Example Response:
```
Deleted: Wireless Mouse
```

🖼️ Screenshot:  
![Delete Product](<output/Delete Product by ID.png>)

---
## MongoDB Compass
---
### Before Deletion
![compass](<output/MongoDB before deletion.png>)

---
### After Deletion
![compass](<output/MongoDB after deletion.png>)


---

## 👩‍💻 Author

**Kanishka Khatri**  
B.Tech CSE, Mody University of Science and Technology  
🔗 [LinkedIn Profile](https://www.linkedin.com/in/kanishka-khatri/)

📌 *Submitted for Celebal Summer Internship 2025 – Week 6 Assignment*
