@echo off
echo Installing frontend dependencies...
cd frontend
npm install
if %errorlevel% neq 0 (
    echo Failed to install frontend dependencies
    exit /b %errorlevel%
)

echo Starting frontend development server...
npm run dev