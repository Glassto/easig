const Breadcrump = ({ children }) => {
  return (
    <div className="mt-6 mb-5 flex w-full items-center justify-center gap-3 md:mt-9 md:mb-8">
      <img src="svg/brand-squares.svg" alt="Brand Squares" />
      <p className="font-inter text-xs font-extrabold tracking-wide text-zinc-500">{children}</p>
    </div>
  );
};

export default Breadcrump;
