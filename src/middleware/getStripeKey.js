import asyncHandler from "express-async-handler";

const getStripeKey = asyncHandler(async (req, res, next) => {
  let body = req.body;
  if (typeof body == "string") {
    body = JSON.parse(body);
  }

  
    req.app.locals.stripeKey = process.env.STRIPE_KEY;

  return next();
});

export default getStripeKey;
