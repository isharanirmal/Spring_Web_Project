@echo off
echo Starting Onvent Application...

echo.
echo 1. Make sure you have Node.js installed
echo 2. Make sure your Spring Boot backend is running on port 8085
echo.

echo Starting frontend...
cd frontend
npm install
npm run dev