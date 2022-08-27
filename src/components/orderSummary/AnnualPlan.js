import React from 'react';
import musicIcon from '../../assets/images/icon-music.svg';

const AnnualPlan = () => {
  return (
    <section className="mb-4 flex items-center justify-between rounded-2xl bg-slate-100 p-2 pt-6 pb-6 ">
      <div className="flex gap-4">
        <div>
          <img src={musicIcon} alt="music icon" />
        </div>
        <div>
          <p className="text-md font-bold text-slate-800">Annual Plan</p>
          <p className="text-slate-500">$59.99/year</p>
        </div>
      </div>
      <div>
        <p className="w-fit cursor-pointer px-2 font-bold text-indigo-600 underline decoration-solid transition-all hover:text-indigo-800 hover:no-underline">
          Change
        </p>
      </div>
    </section>
  );
};

export default AnnualPlan;
