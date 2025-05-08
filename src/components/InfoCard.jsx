import React from 'react';

const InfoCard = ({ title, subtitle, description, variant = 'left' }) => {
  const variants = {
    left: 'h-max pl-6 max-lg:mr-20 max-md:mr-12 lg:w-1/2 lg:px-8 lg:py-10',
    right:
      'h-max rounded-l-3xl border-4 border-r-0 border-slate-300 bg-white p-6 max-lg:ml-20 max-md:ml-12 lg:w-1/2 lg:px-8 lg:py-10',
  };

  return (
    <div className={variants[variant]}>
      <div className="space-y-3">
        <h4 className="font-oddval w-full text-3xl text-gray-900 sm:text-3xl">{title}</h4>
        <p className="font-inter text-sm font-semibold text-balance text-slate-700 sm:text-base">{subtitle}</p>
        <p className="font-inter mt-7 text-sm whitespace-pre-line text-zinc-600 sm:text-base">{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
