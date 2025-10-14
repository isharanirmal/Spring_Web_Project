@echo off
echo Starting backend server...
cd src/main/java/ac/nsbm/onvent
javac OnventApplication.java
if %errorlevel% neq 0 (
    echo Failed to compile backend
    exit /b %errorlevel%
)

echo Running backend application...
java OnventApplication