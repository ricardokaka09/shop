const functions = require('firebase-functions');

const express = require('express')
const cors = require('cors')
const stripe = require('stripe')('sk_test_51HU6b6BMQST2LLkig9FeHyltfCNsrFRnT3eE9TjZ46msXFnJC7GQvM50YwauLY8mHIDZw3r2nIXvy8SgH46s3UVJ00VKmqlGOl')

const app = express()

app.use(cors({origin:true}))
app.use(express.json())

app.get('/',(req,res)=>{
    res.status(200).send('dang cong hung')
})
app.post('/payment/create' ,async(req,res)=>{
    const priceTotal = req.query.total;
    // res.status(200).send(priceTotal)
    // console.log(priceTotal);
    const amount = Math.round(priceTotal*100);
    console.log(amount)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: 'usd',

    })
    // sau khi tao paymentIntent
    res.status(200).send({
        clientSecret: paymentIntent.client_secret,
    })
})

exports.api = functions.https.onRequest(app);
