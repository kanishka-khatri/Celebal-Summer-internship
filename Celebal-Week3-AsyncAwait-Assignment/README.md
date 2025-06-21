# Celebal Summer Internship – Week 3 Assignment

## ✅ Task:
Refactor callback-based async code to use **Promises** and **Async/Await** in Node.js for better readability and error handling.

---

## 🧠 Objective

Demonstrate the difference between:
- Callback-based asynchronous code
- Promise-based approach
- Modern `async/await` syntax

---

## 📁 Folder Structure

```
Celebal-Week3-AsyncAwait-Assignment/
│
├── callback-version/
│   └── fileReaderCallback.js        # Using callbacks
│
├── promise-version/
│   ├── fileReaderPromise.js         # Using Promises
│   └── fileReaderAsyncAwait.js      # Using async/await
│
├── sample.txt                       # Text file used for demonstration
├── image.png                        # Output screenshot image
└── README.md                        # This file
```

---

## 📄 File Descriptions

- `fileReaderCallback.js`: Reads a file using Node.js `fs.readFile()` with a callback.
- `fileReaderPromise.js`: Same operation refactored using a custom Promise.
- `fileReaderAsyncAwait.js`: Reads the file using `async/await` syntax for improved readability.
- `sample.txt`: A plain text file with sample content to test reading.
- `README.md`: Explains the assignment structure, purpose, and usage.

---

## 🚀 How to Run

```bash
# Step into the assignment directory
cd Celebal-Week3-AsyncAwait-Assignment

# Run callback-based version
node callback-version/fileReaderCallback.js

# Run Promise-based version
node promise-version/fileReaderPromise.js

# Run Async/Await version
node promise-version/fileReaderAsyncAwait.js
```

---

## 🧾 Sample Output

```
📄 File content using Callback:

Hello Celebal Team!
This is the Week 3 assignment for the summer internship.
```

![Output Screenshot](image.png)

---

## 📚 Reference

- [Asynchronous Patterns in Node.js – GeeksforGeeks](https://www.geeksforgeeks.org/asynchronous-patterns-in-nodejs/)
