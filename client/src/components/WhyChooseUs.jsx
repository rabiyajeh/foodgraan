// components/WhyChooseUs.jsx
import React from 'react';
import { CheckCircle } from 'lucide-react';

const features = [
  "Fresh Ingredients",
  "Fast Delivery",
  "Affordable Prices",
  "High Quality",
];

const WhyChooseUs = () => (
  <div className="bg-white py-12 px-4 text-center">
    <h2 className="text-3xl font-bold text-blue-700 mb-6">Why Choose Us?</h2>
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
      {features.map((feature, idx) => (
        <div key={idx} className="flex flex-col items-center p-4">
          <CheckCircle className="text-green-500 w-10 h-10 mb-2" />
          <p className="text-lg font-medium">{feature}</p>
        </div>
      ))}
    </div>
  </div>
);

export default WhyChooseUs;
