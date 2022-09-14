import Stripe from 'stripe'; 
import { v4 } from 'uuid'; 

const stripe = Stripe(process.env.STRIPE_SECRET_KEY); 

export const createCheckoutSession = (req, res) => {

    const { product, token } = req.body; 
    const idempotencyKey = v4(); 

    return stripe.customers.create({
        email: token.email,
        source: token.id
    })
    .then(customer => stripe.charges.create({
        amount: product.price * 100, // muliplying with 100 because stripe calculates in cents
        currency: "eur",
        customer: customer.id,
        receipt_email: token.email,
        description: product.name,
        shipping: {
            name: token.card.name,
            address: {
                country: token.card.address_country
            }
        } 

    }, {
        idempotencyKey
    }))
    .then(data = res.status(200).json(data))
    .catch(error => console.log(error))
   
}

 /* const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price: 15.60,
                quantity: 1,
            }, 
        ],
        mode: 'payment',
        success_url: `${process.env.CLIENT_URL}?success=true`,
        cancel_url: `${process.env.CLIENT_URL}?canceled=true`,
    }); 

    res.redirect(303, session.url);  */