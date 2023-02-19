// Global imports
import dotenv from "dotenv";

// Local imports
import app from "./app.js";

// Config
dotenv.config();

// Server
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`); // eslint-disable-line no-console
});

server.on("error", (err) => {
  console.error(err); // eslint-disable-line no-console
});
