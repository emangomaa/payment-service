
import Stripe from "stripe";
import asyncHandler from "express-async-handler"

const createStripeCustomer = asyncHandler(async (req, res, next) => {
  
  
  const{name,email}  = req.body 
  
      // Check if a Stripe customer with this email already exists
      const stripe = new Stripe(req.app.locals.stripeKey);
      let existingCustomer = null;

      if (email) {
        const customers = await stripe.customers.list({
          email,
          limit: 1,
        });
        if (customers.data.length > 0) {
          existingCustomer = customers.data[0];
        }
      }

      if (existingCustomer) {
        return res.json({
          message: "customer already exists",
          stripeCustomerId: existingCustomer.id,
        });
      }else{
        const customer = await stripe.customers.create({
            name: name || "",
            email:email || "",
          })

         return res.json({message:"success",stripeCustomerId:customer.id})
      }
     
      
     
      

});

export default createStripeCustomer
