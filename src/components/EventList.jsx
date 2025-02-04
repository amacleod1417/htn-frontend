import { useState, useEffect } from "react";
import axios from "axios";
import EventCard from "./EventCard";

const EventList = ({ isLoggedIn }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  // Fetch events and sort them
  useEffect(() => {
    axios.get("https://api.hackthenorth.com/v3/events")
      .then((response) => {
        let sortedEvents = response.data.sort((a, b) => a.start_time - b.start_time);
        if (!isLoggedIn) {
          sortedEvents = sortedEvents.filter(event => event.permission === "public");
        }
        setEvents(sortedEvents);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching events:", error));
  }, [isLoggedIn]);

  // Combined filtering (search + event type)
  const filteredEvents = events.filter(event => 
    (filter === "all" || event.event_type === filter) &&
    event.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p className="text-center text-gray-600">Loading events...</p>;

  return (
    <div className="p-4">
      {/* Search & Filter Controls */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search events..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <select
          onChange={(e) => setFilter(e.target.value)}
          className="w-full md:w-1/3 border p-2 rounded-lg"
        >
          <option value="all">All Events</option>
          <option value="workshop">Workshops</option>
          <option value="activity">Activities</option>
          <option value="tech_talk">Tech Talks</option>
        </select>
      </div>

      {/* Event Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredEvents.length > 0 ? (
          filteredEvents.map(event => (
            <EventCard key={event.id} event={event} isLoggedIn={isLoggedIn} />
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-2">No events found.</p>
        )}
      </div>
    </div>
  );
};

export default EventList;

