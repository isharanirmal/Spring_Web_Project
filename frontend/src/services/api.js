import axios from 'axios';

// Create an axios instance with default configuration
const apiClient = axios.create({
  baseURL: 'http://localhost:8085', // Your Spring Boot backend port
  headers: {
    'Content-Type': 'application/json',
  },
});

// User API calls
export const userAPI = {
  register: (userData) => apiClient.post('/users/create', userData),
  getAllUsers: () => apiClient.get('/users/all'),
  getUserById: (id) => apiClient.get(`/users/${id}`),
  updateUser: (id, userData) => apiClient.put(`/users/update/${id}`, userData),
  deleteUser: (id) => apiClient.delete(`/users/delete/${id}`),
};

// Event API calls
export const eventAPI = {
  createEvent: (eventData) => apiClient.post('/events/create', eventData),
  getAllEvents: () => apiClient.get('/events/all'),
  getEventById: (id) => apiClient.get(`/events/${id}`),
  updateEvent: (id, eventData) => apiClient.put(`/events/update/${id}`, eventData),
  deleteEvent: (id) => apiClient.delete(`/events/delete/${id}`),
};

// Ticket API calls
export const ticketAPI = {
  bookTicket: (ticketData) => apiClient.post('/tickets/create', ticketData),
  getAllTickets: () => apiClient.get('/tickets/all'),
  getTicketById: (id) => apiClient.get(`/tickets/${id}`),
  updateTicket: (id, ticketData) => apiClient.put(`/tickets/update/${id}`, ticketData),
  deleteTicket: (id) => apiClient.delete(`/tickets/delete/${id}`),
};

export default apiClient;