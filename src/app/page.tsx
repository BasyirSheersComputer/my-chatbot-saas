"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.stripe.com/v3/buy-button.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const packages = [
    {
      name: "Automaton - Pro",
      features: [
        "Basic Chatbot for Sales",
        "Standard Marketing Tools",
        "Email Support",
      ],
      buyButtonId: "buy_btn_1Qh0r2DfJxDQAwq1XLWUpQZL", // Ensure this is configured in your Stripe Dashboard
    },
    {
      name: "Automaton - Premium Pro",
      features: [
        "Advanced Chatbot for Sales",
        "Enhanced Marketing Tools",
        "Priority Email Support",
        "Analytics Dashboard",
      ],
      buyButtonId: "buy_btn_1Qh10YDfJxDQAwq1ar9zC0tj",
    },
    {
      name: "Automaton - Ultimate",
      features: [
        "AI-Powered Chatbot for Sales",
        "Full Suite Marketing Tools",
        "24/7 Phone & Email Support",
        "Comprehensive Analytics",
        "Custom Integrations",
      ],
      buyButtonId: "buy_btn_1Qh11HDfJxDQAwq1tpevfB9z",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto my-12 px-4">
      <h1 className="mb-8 text-center text-4xl font-bold text-gray-800 dark:text-gray-100">
        Choose Your Automaton Package
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {packages.map((pkg) => (
          <div
            key={pkg.name}
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex flex-col h-full"
          >
            <div className="min-h-[100px] mb-6 flex items-center justify-center">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                {pkg.name}
              </h2>
            </div>
            <div className="flex-grow">
              <ul className="text-left mb-6">
                {pkg.features.map((feature, index) => (
                  <li
                    key={index}
                    className="mb-2 p-2 bg-gray-100 dark:bg-gray-700 rounded-md"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-auto">
              <stripe-buy-button
                buy-button-id={pkg.buyButtonId}
                publishable-key={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}
              ></stripe-buy-button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}