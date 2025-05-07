import clsx from "clsx";

const Button = ({ children, onClick, variant = "primary", link, className }) => {
  const base = "font-inter rounded-[10px] py-2 max-sm:w-full transition-all duration-300";
  const variants = {
    navLink:
      "flex items-center justify-center gap-3 px-6 -mr-1 font-bold text-md tracking-wide text-white button-gradient hover:opacity-85 border border-sky-500 hover:shadow-soft-blue",
    primary:
      "flex items-center justify-center gap-3 w-max px-8 font-bold text-md tracking-wide text-white button-gradient hover:opacity-85 border border-sky-500 shadow-soft-blue",
    secondary: "px-6 font-semibold text-sm text-slate-500 bg-white border border-gray-200 hover:scale-101 shadow-soft-gray",
  };

  const classes = clsx(base, variants[variant], className);

  if (link) {
    return (
      <a href={link} onClick={onClick} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;
