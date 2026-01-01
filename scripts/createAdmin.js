const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// ⚠️ PASTE THE SAME URI YOU PUT IN .env.local
const MONGODB_URI = "mongodb+srv://gunimishra273:cdcssropenproj@cluster0.cqimvqj.mongodb.net/?appName=Cluster0";

mongoose.connect(MONGODB_URI);

const AdminSchema = new mongoose.Schema({
  email: String,
  password: String,
  role: String,
});

const Admin = mongoose.model("Admin", AdminSchema);

async function run() {
  await Admin.deleteOne({ email: "admin@demo.com" });

  const hashed = await bcrypt.hash("admin123", 10);

  await Admin.create({
    email: "admin@demo.com",
    password: hashed,
    role: "admin",
  });

  console.log("✅ Admin created");
  process.exit(0);
}

run();
