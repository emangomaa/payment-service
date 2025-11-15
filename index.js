import "dotenv/config";
import express from "express";
import paymentRoutes from "./src/routes/payment.routes.js";

import connectDB from "./database/dbConnection.js";

const app = express();
app.use(express.json());
const port = 3001;
connectDB();
console.log("hello from server side!");
app.use("/api/v1/payment", paymentRoutes);
app.listen(port, () => {
  console.log(`Server is running on port ${port}!`);
});
