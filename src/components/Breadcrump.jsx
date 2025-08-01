import React from 'react';

const Breadcrump = ({ children, variant = 'default' }) => {
  return (
    <div
      className={`mt-12 mb-6 flex w-full items-center gap-3 md:mt-16 md:mb-8 ${variant === 'default' ? 'justify-center' : 'justify-start'}`}
    >
      <img src="svg/brand-squares.svg" alt="Brand Squares" />
      <p className="font-inter text-xs font-extrabold tracking-wide text-zinc-500">{children}</p>
    </div>
  );
};

export default Breadcrump;
