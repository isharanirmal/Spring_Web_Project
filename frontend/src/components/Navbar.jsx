import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold hover:text-blue-200">
            Onvent
          </Link>
          <div className="flex space-x-4">
            <Link to="/" className="px-3 py-2 rounded-md hover:bg-blue-500">
              Home
            </Link>
            <Link to="/events" className="px-3 py-2 rounded-md hover:bg-blue-500">
              Events
            </Link>
            <Link to="/tickets/book" className="px-3 py-2 rounded-md hover:bg-blue-500">
              Book Ticket
            </Link>
            <Link to="/login" className="px-3 py-2 rounded-md hover:bg-blue-500">
              Login
            </Link>
            <Link to="/register" className="px-3 py-2 rounded-md hover:bg-blue-500">
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;