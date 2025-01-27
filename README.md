# Keycloak Client and User Management API
This is a RESTful API for managing clients and users in Keycloak. The API allows you to:
- Create, Read, Update, and Delete clients from Keycloak.
- Create, Read, Update, and Delete users from Keycloak.

## Base URL
```http://localhost:3000/api/v1```

## Setup Instructions

### Prerequisites
- **Keycloak**: Install and set up Keycloak on your local machine.
- **Admin Account**: Ensure you have an admin account in Keycloak.
### Running the Application

#### 1. Clone the Repository

To get started, first clone the repository and navigate into the project folder:

```bash
git clone https://github.com/PUNEET-EMM/Keycloak--Client--and-User-Management-API.git
cd Keycloak--Client--and-User-Management-API
```
#### 2.  Install Dependencies:
```bash
npm install
```
#### 3. Set Up Your Keycloak Instance:
- Create a Keycloak realm  and configure it appropriately.
- Create a client in Keycloak with the client ID admin-cli,

#### 4. Environment Variables
To use this API, create a .env file in the root of your project with the following values:
```bash
KEYCLOAK_URL=http://localhost:8080   # Keycloak server URL
REALM_NAME=""                        # Your realm name
ADMIN_USERNAME=""                    # Admin username
ADMIN_PASSWORD=""                    # Admin password
CLIENT_ID=""                         # Client ID
PORT=3000
```

#### Run the Server

```bash 
npm start
```

#### The API will be running at:
```bash 
http://localhost:3000/api/v1
```

---



# API Endpoints Overview

## Clients
**Client Management API Endpoints**

| **Endpoint**               | **HTTP Method** | **Description**                              | **Request Body** (if applicable)                                        |
|-----------------------------|-----------------|----------------------------------------------|--------------------------------------------------------------------------|
| `POST /api/v1/clients`      | `POST`          | Create a new client                          | `{ "clientId": "test-client", "name": "Test Client", "description": "A test client", "enabled": true, "protocol": "openid-connect", "redirectUris": ["http://localhost:3000/*"], "directAccessGrantsEnabled": true }` |
| `GET /api/v1/clients`       | `GET`           | Retrieve all clients                         | None                                                                     |
| `GET /api/v1/clients/:id`   | `GET`           | Retrieve a specific client by ID             | None                                                                     |
| `PUT /api/v1/clients/:id`   | `PUT`           | Update a client by ID                        | `{ "clientId": "updated-client", "name": "Updated Client", "description": "Updated description", "enabled": true }` |
| `DELETE /api/v1/clients/:id`| `DELETE`        | Delete a client by ID                        | None                                                                     |

---

## Users
**User Management API Endpoints**

| **Endpoint**               | **HTTP Method** | **Description**                              | **Request Body** (if applicable)                                        |
|-----------------------------|-----------------|----------------------------------------------|--------------------------------------------------------------------------|
| `POST /api/v1/users`        | `POST`          | Create a new user                            | `{ "username": "johndoe", "email": "johndoe@example.com", "firstName": "John", "lastName": "Doe", "password": "securepassword" }` |
| `GET /api/v1/users`         | `GET`           | Retrieve all users                           | None                                                                     |
| `GET /api/v1/users/:id`     | `GET`           | Retrieve a specific user by ID               | None                                                                     |
| `PUT /api/v1/users/:id`     | `PUT`           | Update a user by ID                          | `{ "username": "johndoe_updated", "email": "johndoe_updated@example.com", "firstName": "John Updated", "lastName": "Doe Updated", "password": "newsecurepassword" }` |
| `DELETE /api/v1/users/:id`  | `DELETE`        | Delete a user by ID                          | None                                                                     |


