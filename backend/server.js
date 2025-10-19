import express from "express";
import cors from "cors";
import db from "./models/index.js";

// Create express app
const app = express();

const corsOptions = {
  origin: ["http://localhost:5173", "http://localhost:5174"]
};

app.use(cors(corsOptions));

// Parse requests of content-type - application/json
app.use(express.json());

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Database
const Role = db.role;

// Synchronize models

// db.sequelize.sync();

// To force reset DB:
// db.sequelize.sync({ force: true }).then(() => {
//   console.log('Drop and Resync Database with { force: true }');
//   initial();
// });

db.sequelize.sync().then(() => {
  console.log("Drop and re-sync db.");
  initial(); //initialize seeding
});

async function initial() {
  const roles = [
    { id: 1, name: "admin" },
    { id: 2, name: "moderator" },
    { id: 3, name: "user" },
  ];

  for (const role of roles) {
    await Role.findOrCreate({
      where: { name: role.name },
      defaults: role,
    });
  }
};

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
