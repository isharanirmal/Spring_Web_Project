const Home = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Onvent</h1>
        <p className="text-xl text-gray-600 mb-8">
          Manage your events and tickets with ease
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Events</h2>
            <p className="text-gray-600 mb-4">
              Create and manage events with all the details you need.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              View Events
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-green-600">Tickets</h2>
            <p className="text-gray-600 mb-4">
              Book and manage tickets for your favorite events.
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
              Book Tickets
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-purple-600">Users</h2>
            <p className="text-gray-600 mb-4">
              Register and manage your account information.
            </p>
            <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;