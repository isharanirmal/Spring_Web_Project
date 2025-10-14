# Onvent - Event Management System

This project provides a complete event management system with both backend (Spring Boot) and frontend (React) components.

## Project Structure

```
.
├── src/                    # Spring Boot backend
│   ├── main/
│   │   ├── java/
│   │   │   └── ac.nsbm.onvent/
│   │   │       ├── config/
│   │   │       ├── controller/
│   │   │       ├── model/
│   │   │       ├── repository/
│   │   │       ├── service/
│   │   │       └── OnventApplication.java
│   │   └── resources/
│   └── test/
├── frontend/              # React frontend
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── services/      # API service functions
│   │   ├── App.jsx        # Main application component
│   │   └── main.jsx       # Entry point
│   ├── package.json       # Frontend dependencies
│   └── vite.config.js     # Vite configuration
├── start-app.bat          # Script to start the complete application
├── start-frontend.bat     # Script to start frontend only
├── start-backend.bat      # Script to start backend only
└── pom.xml                # Maven configuration
```

## Features Implemented

1. **User Management**
   - User registration
   - User listing
   - User update/delete

2. **Event Management**
   - Event creation
   - Event listing
   - Event update/delete

3. **Ticket Management**
   - Ticket booking
   - Ticket viewing
   - Ticket deletion

## API Endpoints

### User API
- `POST /users/create` - Create a new user
- `GET /users/all` - Get all users
- `GET /users/{id}` - Get user by ID
- `PUT /users/update/{id}` - Update user
- `DELETE /users/delete/{id}` - Delete user

### Event API
- `POST /events/create` - Create a new event
- `GET /events/all` - Get all events
- `GET /events/{id}` - Get event by ID
- `PUT /events/update/{id}` - Update event
- `DELETE /events/delete/{id}` - Delete event

### Ticket API
- `POST /tickets/create` - Book a new ticket
- `GET /tickets/all` - Get all tickets
- `GET /tickets/{id}` - Get ticket by ID
- `PUT /tickets/update/{id}` - Update ticket
- `DELETE /tickets/delete/{id}` - Delete ticket

## How to Run

### Prerequisites
- Java 17 or higher
- Node.js 14 or higher
- PostgreSQL database (configured in application.properties)

### Running the Backend
1. Update the database configuration in `src/main/resources/application.properties`
2. Run the Spring Boot application:
   ```bash
   ./mvnw spring-boot:run
   ```
   Or use the provided script:
   ```bash
   start-backend.bat
   ```

### Running the Frontend
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   Or use the provided script:
   ```bash
   start-frontend.bat
   ```

### Running Both
Use the main script to start both servers:
```bash
start-app.bat
```

## Testing CRUD Operations

1. **User Registration/Login**
   - Navigate to http://localhost:3000/register
   - Create a new user account
   - Login with your credentials

2. **Event Creation/Listing**
   - Navigate to http://localhost:3000/events
   - Click "Create Event" to add new events
   - View all events in the listing

3. **Ticket Booking/Viewing**
   - Navigate to http://localhost:3000/tickets/book
   - Select an event and user to book a ticket
   - View all tickets at http://localhost:3000/tickets/view

## Technologies Used

### Backend
- Spring Boot 3.x
- Spring Security
- Spring Data JPA
- PostgreSQL
- Maven

### Frontend
- React 18
- React Router
- Axios for API calls
- Tailwind CSS for styling
- Vite for build tool

## Database Schema

The application uses three main entities:
1. **User** - Represents event organizers and attendees
2. **Event** - Represents events with details like title, date, location
3. **Ticket** - Represents tickets linking users to events

Relationships:
- One User can organize many Events (One-to-Many)
- One User can have many Tickets (One-to-Many)
- One Event can have many Tickets (One-to-Many)