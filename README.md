The Book Management API is a RESTful API for managing books. It supports CRUD operations and is designed to handle basic book management tasks

The API is deployed and accessible at:
https://bookapi1.onrender.com

## **Testing API Endpoints**

**1. GET /books**
This endpoint retrieves all books.

![GET /books](./screenshots/get_books.png)

### **2. POST /books**
This endpoint adds a new book.

![POST /books](./screenshots/post_books.png)

### **3. PUT /books/:id**
This endpoint updates an existing book.

![PUT /books/:id](./screenshots/put_books.png)

### **4. DELETE /books/:id**
This endpoint deletes a book by ID.

![DELETE /books/:id](./screenshots/delete_books.png)

How to Use
	1.	Open Postman 
	2.	Send requests to the base URL: https://bookapi1.onrender.com

Weather API Endpoint

1. GET /api/weather/:city
This endpoint fetches the current weather data for a given city using the OpenWeather API.

How to Use
	1.	Open Postman or any API testing tool.
	2.	Use the base URL: https://bookapi1.onrender.com.
	3.	Test the following endpoints:
	•	/books for book management operations.
	•	/api/weather/:city for fetching weather data

Setup Instructions
	1.	Clone the repository:
    git clone https://github.com/your-username/book-management-api.git
cd book-management-api

	2.	Install dependencies: npm install
    3.	Create a .env file and add your MongoDB URI and OpenWeather API Key:
   MONGO_URI=mongodb+srv://ayaulymorynbassarova222:w0vol2xmDSbWX1wM@web.xgkgf.mongodb.net/?retryWrites=true&w=majority&appName=web
WEATHER_API_KEY=60a685e91e82eaff1494be23be6f6c6c

    Dependencies
	•	Node.js: Backend framework
	•	Express.js: Web framework for Node.js
	•	Mongoose: MongoDB object modeling tool
	•	Axios: HTTP client for making API requests

