import express from "express";
import getStripeKey from "../middleware/getStripeKey.js";
import checkUserStripeCustomer from "../middleware/creditCard/checkUserIsStripeCustomer.js";
import addCreditCard from "../controllers/creditCard.controller.js";
import storeCreditCard from "../middleware/creditCard/storeCreditCardOnDB.js";
import createStripeCustomer from "../middleware/creditCard/createStripeCustomer.js";

// const checkUserDriver = require("../middlewares/driver/checkUserDriver.middleware");
// const checkUserOwnerTheCC = require("../middlewares/stripe/checkUserOwnerTheCC");
// const addDefaultCCToDriver = require("../middlewares/driver/addDefaultCCToDriver");
// const { default: getStripeKey } = require("../middleware/getStripeKey");

const creditCardRouter = express.Router();

creditCardRouter.post(
  "/create-stripe-customer",
  getStripeKey,
 createStripeCustomer
);



export default creditCardRouter;
