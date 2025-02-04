import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const EventDetail = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [relatedEvents, setRelatedEvents] = useState([]);

  useEffect(() => {
    axios.get(`https://api.hackthenorth.com/v3/events/${id}`)
      .then(response => {
        setEvent(response.data);

        // Fetch related events by their IDs
        const relatedIds = response.data.related_events || [];
        if (relatedIds.length > 0) {
          Promise.all(relatedIds.map(eventId =>
            axios.get(`https://api.hackthenorth.com/v3/events/${eventId}`)
          ))
          .then(responses => setRelatedEvents(responses.map(res => res.data)))
          .catch(error => console.error("Error fetching related events:", error));
        }
      })
      .catch(error => console.error("Error fetching event:", error));
  }, [id]);

  if (!event) return <p className="text-center">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-3xl font-bold">{event.name}</h2>
      <p className="text-gray-700">{event.description || "No description available"}</p>
      <p><strong>Type:</strong> {event.event_type}</p>
      <p><strong>Time:</strong> {new Date(event.start_time).toLocaleString()}</p>

      {/* Event Links Section */}
      <div className="mt-4">
        <h3 className="text-xl font-bold">Event Links:</h3>
        <ul className="list-disc list-inside">
          {event.public_url && (
            <li>
              <a href={event.public_url} target="_blank" rel="noopener noreferrer" 
                 className="text-blue-500 hover:underline">
                Public Event Link
              </a>
            </li>
          )}
          {event.private_url && (
            <li>
              <a href={event.private_url} target="_blank" rel="noopener noreferrer"
                 className="text-blue-500 hover:underline">
                Private Event Link (For Hackers)
              </a>
            </li>
          )}
        </ul>
      </div>

      {/* Related Events Section */}
      {relatedEvents.length > 0 && (
        <div className="mt-6">
          <h3 className="text-xl font-bold">Related Events:</h3>
          <ul className="list-disc list-inside">
            {relatedEvents.map(relatedEvent => (
              <li key={relatedEvent.id}>
                <Link to={`/event/${relatedEvent.id}`} className="text-blue-500 hover:underline">
                  {relatedEvent.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default EventDetail;
