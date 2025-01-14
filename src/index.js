// pages/index.js
import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;

    const checkoutSession = await axios.post('/api/stripe/checkout', {
      items: [{ priceId: 'price_1IueJ3I8HCcR4xKg5FZRHsI6' }]
    });

    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.sessionId,
    });

    if (result.error) {
      console.error(result.error.message);
    }
  };

  return (
    <div>
      <h1>Choose Your Plan</h1>
      <button role="link" onClick={createCheckoutSession} disabled={isLoading}>
        Subscribe for $10/month
      </button>
    </div>
  );
}
