import { useState } from "react";
import Login from "../components/Login.jsx";
import EventList from "../components/EventList.jsx";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"} min-h-screen`}>
      {/* Navbar */}
      <header className="bg-blue-600 text-white flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">Hackathon Events</h1>
        <button 
          onClick={() => setDarkMode(!darkMode)} 
          className="p-2 rounded-lg bg-gray-700 hover:bg-gray-500 transition text-white"
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>

      {/* Main Content */}
      <div className="p-6">
        {!isLoggedIn ? (
          <div className="flex justify-center">
            <Login setIsLoggedIn={setIsLoggedIn} />
          </div>
        ) : (
          <>
            <button 
              onClick={() => {
                localStorage.removeItem("isLoggedIn");
                setIsLoggedIn(false);
              }} 
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 mb-4"
            >
              Logout
            </button>
            <EventList isLoggedIn={isLoggedIn} />
          </>
        )}
      </div>
    </div>
  );
};

export default Home;