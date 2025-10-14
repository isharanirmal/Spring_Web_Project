# How to Run the Frontend Application

Due to PowerShell execution policy restrictions, you'll need to manually install and run the frontend application.

## Steps to Run the Frontend:

1. Open a new PowerShell or Command Prompt window as Administrator
2. Navigate to the frontend directory:
   ```
   cd [PROJECT_PATH]\frontend
   ```
   Replace [PROJECT_PATH] with the actual path to your project.

3. Temporarily change the execution policy (this is only for this session):
   ```
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```
   Type "Y" and press Enter to confirm.

4. Install the dependencies:
   ```
   npm install
   ```

5. Start the development server:
   ```
   npm run dev
   ```

6. Open your browser and navigate to http://localhost:3000

## Troubleshooting:

If you encounter any issues:

1. Make sure Node.js is installed (check with `node --version`)
2. Make sure the backend is running on http://localhost:8085
3. Check that the database is properly configured in application.properties

## Alternative Method:

If you still have issues with npm, you can try using npx directly:
```
npx create-react-app onvent-frontend
```

Then copy the src folder contents from this project to the newly created onvent-frontend/src directory.