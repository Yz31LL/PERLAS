import express from "express";
import cors from "cors";
import db from "./models/index.js";

// Create express app
const app = express();

const corsOptions = {
  origin: "http://localhost:5173"
};

app.use(cors(corsOptions));

// Parse requests of content-type - application/json
app.use(express.json());

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Database
import db from "./models/index.js";    // 👈 ESM requires .js extension
const Role = db.role;

// Synchronize models

// db.sequelize.sync();

// To force reset DB:
// db.sequelize.sync({ force: true }).then(() => {
//   console.log('Drop and Resync Database with { force: true }');
//   initial();
// });

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
  initial(); //initialize seeding
});

function initial() {
  Role.create({ id: 1, name: "admin" });
  Role.create({ id: 2, name: "moderator" });
  Role.create({ id: 3, name: "user" });
}

// Simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to PERLAS application." });
});

// Routes
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";

// Mount routes
authRoutes(app);
userRoutes(app);

// Set port and listen
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}.`);
});

// Initialize roles if needed
function initial() {
  Role.create({ id: 1, name: "user" });
  Role.create({ id: 2, name: "moderator" });
  Role.create({ id: 3, name: "admin" });
}
