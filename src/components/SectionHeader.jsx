import React from 'react';

const SectionHeader = ({ title, subtitle, color = 'text-gray-900', variant = 'default' }) => {
  const variants = {
    default: 'mx-auto flex w-full max-w-4xl flex-col items-center justify-center gap-6 sm:gap-8 sm:px-6',
    faq: 'flex w-full max-w-lg flex-col items-start justify-start gap-3 sm:gap-4',
  };

  return (
    <div className={variants[variant]}>
      <h2 className={`font-oddval ${variant === 'default' ? 'text-center' : 'text-start'} text-3xl ${color} lg:text-4xl`}>
        {title}
      </h2>
      <p className="font-inter max-w-2xl text-center text-sm leading-relaxed font-medium text-gray-600 sm:text-base">{subtitle}</p>
    </div>
  );
};

export default SectionHeader;
