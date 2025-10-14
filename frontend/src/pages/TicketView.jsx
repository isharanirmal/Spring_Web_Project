import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ticketAPI } from '../services/api';

const TicketView = () => {
  const navigate = useNavigate();
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    try {
      const response = await ticketAPI.getAllTickets();
      setTickets(response.data);
    } catch (err) {
      setError('Failed to fetch tickets');
      console.error('Error fetching tickets:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this ticket?')) {
      try {
        await ticketAPI.deleteTicket(id);
        fetchTickets(); // Refresh the list
        alert('Ticket deleted successfully!');
      } catch (err) {
        alert('Failed to delete ticket');
        console.error('Error deleting ticket:', err);
      }
    }
  };

  if (loading) return <div className="text-center py-8">Loading tickets...</div>;
  if (error) return <div className="text-center py-8 text-red-500">{error}</div>;

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">My Tickets</h2>
        <button
          onClick={() => navigate('/tickets/book')}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Book New Ticket
        </button>
      </div>

      {tickets.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">No tickets found.</p>
          <button
            onClick={() => navigate('/tickets/book')}
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Book Your First Ticket
          </button>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 text-left">Ticket Code</th>
                <th className="py-3 px-4 text-left">Event</th>
                <th className="py-3 px-4 text-left">User</th>
                <th className="py-3 px-4 text-left">Purchase Date</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket) => (
                <tr key={ticket.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-3 px-4">{ticket.ticketCode}</td>
                  <td className="py-3 px-4">
                    {ticket.event ? ticket.event.title : 'N/A'}
                  </td>
                  <td className="py-3 px-4">
                    {ticket.user ? `${ticket.user.name} (${ticket.user.email})` : 'N/A'}
                  </td>
                  <td className="py-3 px-4">
                    {ticket.purchaseDate ? new Date(ticket.purchaseDate).toLocaleDateString() : 'N/A'}
                  </td>
                  <td className="py-3 px-4">
                    <button
                      onClick={() => handleDelete(ticket.id)}
                      className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TicketView;