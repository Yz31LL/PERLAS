PERLAS

PERLAS (short for Philippine Emergency Response Land Action System) is a web-based application based Computer aided-Dispatching System designed to collect, analyze, and visualize satellite data assisting Philipiine Emergency Responders. It aims to provide accurate geospatial insights for research, environmental monitoring, urban planning, and disaster response.

Features

Satellite Data Visualization: Display satellite imagery on an interactive map using Leaflet.js.

Geospatial Analysis: Analyze changes in land use, vegetation, and other environmental indicators over time.

User Management & Role-Based Access: Admins can create user accounts, assign roles, and control access to features.

Real-time Data Interaction: Users can query satellite data, view trends, and export reports.

Responsive Web App: Designed to work seamlessly on desktop and mobile devices.

Tech Stack

Frontend: React.js, axion, Leaflet.js, HTML, CSS, JavaScript

Backend: Node.js, Express.js

Database: MySQL

Authentication: JWT (JSON Web Tokens)

Version Control: Git & GitHub

Installation

Clone the repository

git clone https://github.com/your-username/PERLAS.git
cd PERLAS


Install backend dependencies

cd backend
npm install


Install frontend dependencies

cd ../frontend
npm install


Set up environment variables
Create a .env file in the backend folder:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=""
DB_NAME=perlas_db
JWT_SECRET= ____


Run the backend

cd backend
npm run dev


Run the frontend

cd frontend
npm start


The app should now be running at http://localhost:8081.

Usage

Admin: Manage users, assign roles, and monitor satellite data usage.

Analyst/User: View satellite imagery, run geospatial queries, and download reports.

Visualization: Interact with the map to explore environmental data trends and generate insights.

Contributing

Contributions are welcome! Please follow these steps:

Fork the repository.

Create a new branch (git checkout -b feature/YourFeature).

Make your changes and commit them (git commit -m 'Add feature').

Push to the branch (git push origin feature/YourFeature).

Create a Pull Request.

License

This project is licensed under the MIT License.
