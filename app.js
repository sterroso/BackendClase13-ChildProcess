// Global imports
import express from "express";

// Local imports
import MathRouter from "./src/routes/math.router.js";

// Setup express app instance and setup middlewares
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setup routers
app.use("/api/math/", MathRouter);

export default app;
