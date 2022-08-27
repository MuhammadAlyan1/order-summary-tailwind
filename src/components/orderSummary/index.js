import React from 'react';
import avatar from '../../assets/images/illustration-hero.svg';
import AnnualPlan from './AnnualPlan';

const OrderSummary = () => {
  return (
    <section className="max-w-[320px] overflow-hidden rounded-2xl bg-white shadow-lg md:max-w-[450px]">
      <div className="max-w-[320px] md:max-w-[100%]">
        <img src={avatar} alt="avatar" />
      </div>
      <div className="p-8">
        <h1 className="mb-4 text-center text-3xl font-bold text-slate-700">
          Order Summary
        </h1>
        <p className="mb-4 text-center text-slate-600">
          You can now listen to millions of songs, audiobooks, and podcasts, on
          any device anywhere you like!
        </p>
        <AnnualPlan />
        <button className="w-full rounded-xl bg-indigo-700 p-3 font-bold text-slate-100 shadow-slate-900 transition-all hover:bg-indigo-600">
          Proceed to Payment
        </button>
        <button className="mx-auto mt-4 block font-bold text-slate-600">
          Cancel Order
        </button>
      </div>
    </section>
  );
};

export default OrderSummary;
