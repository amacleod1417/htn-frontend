import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const EventCard = ({ event, isLoggedIn }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition"
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="text-xl font-bold text-gray-800">{event.name}</h3>
      <p className="text-gray-600">{event.description || "No description available"}</p>
      <p className="text-sm text-gray-500 mt-2"><strong>Type:</strong> {event.event_type}</p>
      <p className="text-sm text-gray-500"><strong>Time:</strong> {new Date(event.start_time).toLocaleString()}</p>
      <Link 
        to={`/event/${event.id}`} 
        className="mt-4 block text-center bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700"
      >
        View Event
      </Link>
    </motion.div>
  );
};

export default EventCard;
