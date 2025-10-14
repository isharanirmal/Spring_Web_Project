# Onvent Frontend

This is the React frontend for the Onvent event management system.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser to http://localhost:3000

## Features

- User registration and login
- Event creation and listing
- Ticket booking and viewing
- Full CRUD operations for all entities

## API Integration

The frontend connects to the Spring Boot backend running on http://localhost:8085.

## Project Structure

- `/src/components` - Reusable UI components
- `/src/pages` - Page components for different routes
- `/src/services` - API service functions
- `/src/App.jsx` - Main application component with routing
- `/src/main.jsx` - Entry point

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build