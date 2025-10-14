// Test to verify frontend can communicate with backend
import axios from 'axios';

const testConnection = async () => {
  try {
    // Test the base URL
    const response = await axios.get('http://localhost:8085/users/all');
    console.log('Connection successful:', response.data);
    return true;
  } catch (error) {
    console.error('Connection failed:', error.message);
    return false;
  }
};

// Run the test
testConnection();