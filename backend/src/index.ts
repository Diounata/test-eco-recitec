import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { SubmitContactController } from "./routes/submit-controller";
import { ListContactsController } from "./routes/list-contacts-controller";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";

app.use(express.json());
app.use(
  cors({
    origin: FRONTEND_URL,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

app.post("/api/submit", SubmitContactController.handler);
app.get("/api/list-submissions", ListContactsController.handler);

app.listen(PORT, () => {
  console.log(`Backend server running at http://localhost:${PORT}`);
});
