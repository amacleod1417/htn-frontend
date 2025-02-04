Hack the North 2025 Frontend Developer Challenge - Writeup

Development Process & Thought Process
When approaching this project, my main goal was to build a functional, visually appealing, and scalable application that met all the requirements while providing a great user experience. I started by breaking the project into three key areas: data handling and API integration, user authentication and permissions, and user experience and UI design. This helped me stay organized and ensure that each component had a clear purpose.

To handle data fetching, I chose Axios for its simplicity in making API calls. Since event data needed to be displayed dynamically, I ensured that it was sorted by start_time, and I implemented filtering and searching functionality to make event discovery easier. For authentication, I hardcoded login credentials as required and stored the login state using localStorage, allowing users to remain logged in even after refreshing the page. On the UI side, I used React with Tailwind CSS to create a clean, modern design with responsive styling, ensuring the app worked well on different devices.

One of the challenges I ran into was displaying related events in a meaningful way. Initially, the API only provided event IDs, which didn’t offer much context. To improve this, I made additional API requests to fetch the actual names of related events and displayed them as clickable links, making navigation between related events seamless. Another challenge was ensuring that private events remained hidden unless the user was logged in. I solved this by filtering events dynamically based on the user’s authentication state.

One aspect of the project I’m particularly proud of is the Event Detail Page, which not only displays all relevant event information but also includes event links for both public and private users. Additionally, the search and filter functionality enhances the user experience by making it easy to find specific events. Finally, adding dark mode provided a personalized touch, allowing users to switch themes based on their preference.

How I’d Extend This Project
Given more time, I would expand this project into a fully functional event management platform. One feature I’d add is event registration and bookmarking, allowing users to save events they’re interested in. I’d also implement live event notifications that remind users about upcoming events. Another useful addition would be an admin dashboard, where event organizers could manage and edit event details.

To make the app even more interactive, I’d introduce real-time chat or Q&A sections for each event, allowing attendees to engage with speakers or network with other participants. Additionally, I’d add an analytics panel that tracks popular events, most-viewed sessions, and user engagement.

From a performance perspective, I would optimize API handling using React Query or SWR, ensuring faster and more efficient data fetching. Right now, every event detail page makes a new API call, but with better caching and prefetching, I could significantly improve load times.

Final Thoughts
This project was a great learning experience, allowing me to work with API integrations, user authentication, and frontend state management while keeping accessibility and UI design in mind. I enjoyed solving challenges like event sorting, dynamic data fetching, and UI improvements, and I’m happy with how the final product turned out. If I had more time, I’d love to continue refining the user experience and making the application even more interactive and feature-rich, as well as visually appealing and creative.
