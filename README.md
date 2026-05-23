Users REST API
A simple REST API built with Node.js and Express for managing users. Supports full CRUD operations with in-memory data storage.

1) Getting Started
Prerequisites

Node.js (v14 or higher)
npm

2) Installation
bashgit clone https://github.com/yourusername/your-repo.git
cd your-repo
npm install
Run the Server
bashnode app.js
Server runs on http://localhost:3000

3) API Endpoints
MethodEndpointDescriptionPOST/usersCreate a new userGET/usersGet all usersGET/users/:idGet a specific userPUT/users/:idUpdate a specific userDELETE/users/:idDelete a specific user

4) Usage Examples
Create a User
http POST /users
Content-Type: application/json

{
  "username": "johndoe",
  "email": "john@example.com",
  "phone": "9876543210"
}
Get All Users
httpGET /users
Get a Specific User
httpGET /users/1716123456789
Update a User
httpPUT /users/1716123456789
Content-Type: application/json

{
  "username": "john_updated"
}
Delete a User
httpDELETE /users/1716123456789

🛠 Tech Stack

Runtime: Node.js
Framework: Express.js
Storage: In-memory (array)


⚠️ Note
Data is stored in-memory and will reset every time the server restarts. For persistent storage, integrate a database like MongoDB or MySQL.