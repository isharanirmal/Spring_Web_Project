import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ticketAPI, eventAPI, userAPI } from '../services/api';

const TicketBooking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    eventId: location.search.includes('eventId=') 
      ? new URLSearchParams(location.search).get('eventId') 
      : '',
    userId: '',
  });
  const [bookingLoading, setBookingLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchEventsAndUsers();
  }, []);

  const fetchEventsAndUsers = async () => {
    try {
      const [eventsResponse, usersResponse] = await Promise.all([
        eventAPI.getAllEvents(),
        userAPI.getAllUsers(),
      ]);
      setEvents(eventsResponse.data);
      setUsers(usersResponse.data);
      
      // If we came from event list and have an event ID, pre-select it
      if (location.search.includes('eventId=') && usersResponse.data.length > 0) {
        setFormData(prev => ({
          ...prev,
          userId: usersResponse.data[0].id.toString()
        }));
      }
    } catch (err) {
      setError('Failed to fetch data');
      console.error('Error fetching data:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBookingLoading(true);
    setError('');

    try {
      const ticketData = {
        purchaseDate: new Date().toISOString(),
        ticketCode: 'TICKET-' + Date.now(), // Simple ticket code generation
        user: { id: parseInt(formData.userId) },
        event: { id: parseInt(formData.eventId) }
      };

      await ticketAPI.bookTicket(ticketData);
      alert('Ticket booked successfully!');
      navigate('/tickets/view');
    } catch (err) {
      setError('Failed to book ticket. Please try again.');
      console.error('Error booking ticket:', err);
    } finally {
      setBookingLoading(false);
    }
  };

  if (loading) return <div className="text-center py-8">Loading data...</div>;
  if (error) return <div className="text-center py-8 text-red-500">{error}</div>;

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Book Ticket</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="eventId">
            Select Event
          </label>
          <select
            id="eventId"
            name="eventId"
            value={formData.eventId}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Select an event</option>
            {events.map((event) => (
              <option key={event.id} value={event.id}>
                {event.title} - {new Date(event.eventDate).toLocaleDateString()}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userId">
            Select User
          </label>
          <select
            id="userId"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Select a user</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name} ({user.email})
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => navigate('/events')}
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Back to Events
          </button>
          <button
            type="submit"
            disabled={bookingLoading}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50"
          >
            {bookingLoading ? 'Booking...' : 'Book Ticket'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TicketBooking;