const Breadcrump = ({ children }) => {
  return (
    <div className="flex justify-center items-center gap-3 w-full mt-6 mb-5 md:mt-9 md:mb-8">
      <img src="/svg/brand-squares.svg" alt="Brand Squares" />
      <p className="font-inter font-extrabold text-xs tracking-wide text-zinc-500">{children}</p>
    </div>
  );
};

export default Breadcrump;
