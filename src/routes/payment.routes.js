import express from "express";
import creditCardRoutes from "./creditCard.routes.js";

const paymentRoutes = express.Router();

paymentRoutes.use("/credit-card", creditCardRoutes);    

export default paymentRoutes