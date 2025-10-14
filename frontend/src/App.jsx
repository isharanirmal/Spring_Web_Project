import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import EventList from './pages/EventList';
import EventCreate from './pages/EventCreate';
import TicketBooking from './pages/TicketBooking';
import TicketView from './pages/TicketView';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/events" element={<EventList />} />
            <Route path="/events/create" element={<EventCreate />} />
            <Route path="/tickets/book" element={<TicketBooking />} />
            <Route path="/tickets/view" element={<TicketView />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;