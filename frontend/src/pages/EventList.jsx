import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { eventAPI } from '../services/api';

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await eventAPI.getAllEvents();
      setEvents(response.data);
    } catch (err) {
      setError('Failed to fetch events');
      console.error('Error fetching events:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      try {
        await eventAPI.deleteEvent(id);
        fetchEvents(); // Refresh the list
        alert('Event deleted successfully!');
      } catch (err) {
        alert('Failed to delete event');
        console.error('Error deleting event:', err);
      }
    }
  };

  if (loading) return <div className="text-center py-8">Loading events...</div>;
  if (error) return <div className="text-center py-8 text-red-500">{error}</div>;

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Events</h2>
        <Link
          to="/events/create"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Create Event
        </Link>
      </div>

      {events.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">No events found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="space-y-2">
                  <p><span className="font-semibold">Location:</span> {event.location}</p>
                  <p><span className="font-semibold">Date:</span> {new Date(event.eventDate).toLocaleDateString()}</p>
                  <p><span className="font-semibold">Price:</span> ${event.price}</p>
                  <p><span className="font-semibold">Max Attendees:</span> {event.maxAttendees}</p>
                </div>
                <div className="mt-4 flex space-x-2">
                  <Link
                    to={`/tickets/book?eventId=${event.id}`}
                    className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded text-sm"
                  >
                    Book Ticket
                  </Link>
                  <button
                    onClick={() => handleDelete(event.id)}
                    className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventList;