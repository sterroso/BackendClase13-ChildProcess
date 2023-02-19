// Global imports
import express from "express";

// Local imports
import MathRouter from "./src/routes/math.router";

const app = express();

app.use("/api/math/", MathRouter);

export default app;
